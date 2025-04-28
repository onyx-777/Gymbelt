"use server";
import prisma from "@/lib/prisma";
import { GymOnboardingSchemaType } from "@/schemas/onboarding";
import { clerkClient, currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { getGymOwnerIdInDB } from "./users";
import { cacheLife } from "next/dist/server/use-cache/cache-life";
import { cacheTag } from "next/dist/server/use-cache/cache-tag";

export const invalidateGymsCache = async () => {
  await prisma.$accelerate.invalidate({ tags: ["gyms"] });
};

export const doesGymExist = async () => {
  try {
    const user = await currentUser();
    if (!user) redirect("/sign-in");
    const gymId = await prisma.user.findUnique({
      where: {
        clerkId: user.id,
      },
      select: {
        ownedGymId: true,
      },
    });

    return gymId;
  } catch (error) {
    console.log("error in doesGymExist ; ", error);
  }
};

export const upsertGymInDB = async (gym: GymOnboardingSchemaType) => {
  console.log("Gym data:", gym);

  // Retrieve the gym owner
  const gymOwnerId = await getGymOwnerIdInDB();
  if (!gymOwnerId?.id) {
    console.error("Gym owner ID is missing.");
    return null;
  }

  try {
    // Check if the gym already exists with the provided subdomain
    const existingGym = await prisma.gym.findUnique({
      where: { subdomain: gym.sloganSubdomain.subdomain },
      select: { id: true, membershipTemplates: true }, // Only check for membershipTemplates
    });

    // Check if the membership templates have changed
    const membershipsAreDifferent =
      existingGym?.membershipTemplates.length !== gym.memberships.length ||
      !existingGym.membershipTemplates.every((m, idx) => {
        const newMembership = gym.memberships[idx];
        return (
          m.planName === newMembership.planName &&
          m.services.every((s, i) => s === newMembership.services[i]) &&
          m.facilities.every((f, i) => f === newMembership.facilities[i]) &&
          m.duration === newMembership.duration &&
          m.price === newMembership.price
        );
      });

    // Upsert the gym (create or update)
    const createOrUpdateGym = await prisma.gym.upsert({
      where: { subdomain: gym.sloganSubdomain.subdomain },
      create: {
        name: gym.gymNameAddress.gymName,
        address: gym.gymNameAddress.gymAddress,
        phoneNumber: gym.phoneEmail.gymPhoneNumber,
        email: gym.phoneEmail.gymEmail,
        logo: gym.logoWebsite.gymLogo,
        website: gym.logoWebsite.gymWebsite ?? null,
        slogan: gym.sloganSubdomain.slogan,
        subdomain: gym.sloganSubdomain.subdomain,
        description: gym.gymType.gymType,
        facilities: gym.facilities.facilities,
        services: gym.services.services,
        License_Number: gym.licenseGST.gymLicenseNumber ?? null,
        GST_Number: gym.licenseGST.gymGSTNumber ?? null,
        GST_Registered: !!gym.licenseGST.gymGSTNumber,
        gymOwner: {
          connect: {
            clerkId: gymOwnerId.clerkId,
          },
        },
        createdAt: new Date(),
        updatedAt: new Date(),
        membershipTemplates: {
          create: gym.memberships.map((membership) => ({
            planName: membership.planName,
            services: membership.services,
            facilities: membership.facilities,
            duration: membership.duration,
            price: membership.price,
          })),
        },
      },
      update: {
        name: gym.gymNameAddress.gymName,
        address: gym.gymNameAddress.gymAddress,
        phoneNumber: gym.phoneEmail.gymPhoneNumber,
        email: gym.phoneEmail.gymEmail,
        logo: gym.logoWebsite.gymLogo,
        website: gym.logoWebsite.gymWebsite ?? null,
        slogan: gym.sloganSubdomain.slogan,
        subdomain: gym.sloganSubdomain.subdomain,
        description: gym.gymType.gymType,
        facilities: gym.facilities.facilities,
        services: gym.services.services,
        License_Number: gym.licenseGST.gymLicenseNumber ?? null,
        GST_Number: gym.licenseGST.gymGSTNumber ?? null,
        GST_Registered: !!gym.licenseGST.gymGSTNumber,
        updatedAt: new Date(),
        membershipTemplates: membershipsAreDifferent
          ? {
              deleteMany: {},
              create: gym.memberships.map((membership) => ({
                planName: membership.planName,
                services: membership.services,
                facilities: membership.facilities,
                duration: membership.duration,
                price: membership.price,
              })),
            }
          : undefined,
      },
      select: {
        id: true,
        name: true,
      },
    });

    // If the gym is successfully created/updated, also update user metadata in Clerk
    if (createOrUpdateGym) {
      try {
        const client = await clerkClient();
        await client.users.updateUserMetadata(gymOwnerId.clerkId, {
          publicMetadata: { role: "GYM_OWNER" },
        });
      } catch (error) {
        console.error("Error updating Clerk user metadata:", error);
      }
    }
    await invalidateGymsCache();

    return createOrUpdateGym;
  } catch (error) {
    console.error("Error in upsertGymInDB:", error);
    throw error;
  }
};

export const getGymDetails = async () => {
  try {
    const user = await currentUser();
    if (!user) return;

    const gyms = await prisma.user.findUnique({
      where: {
        clerkId: user.id,
      },
      select: {
        ownedGym: {
          select: {
            name: true,
            id: true,
          },
        },
      },
      cacheStrategy: {
        ttl: 3600, // Cache for 1 hour
        swr: 600, // Serve stale data for up to 10 minutes while revalidating
        tags: ["gyms"], // Tagging the cache for invalidation
      },
    });

    await invalidateGymsCache();

    return gyms;
  } catch (error) {
    console.log("error in getGymDetails : ", error);
  }
};

export const getGymDetailsFromSubdomain = async (subdomain: string) => {
  try {
    console.log("subdomain in actions : ", subdomain);

    const gyms = await prisma.gym.findUnique({
      where: {
        subdomain,
      },
      select: {
        name: true,
        id: true,
      },
      cacheStrategy: {
        ttl: 3600, // Cache for 1 hour
        swr: 600, // Serve stale data for up to 10 minutes while revalidating
        tags: ["gyms"], // Tagging the cache for invalidation
      },
    });
    console.log("gyms in actions : ", gyms);

    await invalidateGymsCache();

    return gyms;
  } catch (error) {
    console.log("error in getGymDetails : ", error);
  }
};

export const isAuthorizedGymOwner = async () => {
  try {
    const user = await currentUser();
    if (!user) return;

    return await prisma.user.findUnique({
      where: {
        clerkId: user.id,
      },
      select: {
        ownedGym: {
          select: {
            id: true,
            subdomain: true,
          },
        },
      },
    });
  } catch (error) {
    console.log("error in isAuthorizedGymOwner", error);
  }
};

export const getAllGyms = async () => {
  "use cache";

  // Set cache expiration to 1 hour
  cacheLife("1 hours");

  // Tag cache entries for gyms
  cacheTag("gyms");

  try {
    return await prisma.gym.findMany({
      select: {
        id: true,
        address: true,
        name: true,
        logo: true,
      },
      cacheStrategy: {
        ttl: 3600, // Cache for 1 hour
        swr: 600, // Serve stale data for up to 10 minutes while revalidating
        tags: ["gyms"], // Tagging the cache for invalidation
      },
    });
  } catch (error) {
    console.error("Error fetching gyms:", error);
    return [];
  }
};
