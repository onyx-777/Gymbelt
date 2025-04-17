"use server";
import prisma from "@/lib/prisma";
import { GymOnboardingSchemaType } from "@/schemas/onboarding";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { getGymOwnerIdInDB } from "./users";

export const doesGymExist = async () => {
  try {
    const user = await currentUser();
    if (!user) redirect("/sign-in");
    const gymId = await prisma.gymOwner.findUnique({
      where: {
        clerkId: user.id,
      },
      select: {
        gymId: true,
      },
    });

    return gymId;
  } catch (error) {
    console.log("error in doesGymExist ; ", error);
  }
};

export const upsertGymInDB = async (gym: GymOnboardingSchemaType) => {
  console.log("gym data in upsertGymInDB : ", gym);
  console.log("gym.memberships : ", gym.memberships);

  const gymOwnerId = await getGymOwnerIdInDB();
  console.log("gymOwnerId : ", gymOwnerId?.id);
  if (!gymOwnerId?.id) return;

  try {
    console.log("inside trycatch block");
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
        gymOwnerId: gymOwnerId.id,
        createdAt: new Date(),
        updatedAt: new Date(),
        memberships: {
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
        // Optional: consider deleting and recreating memberships if upsert not possible
        memberships: {
          deleteMany: {}, // delete old memberships
          create: gym.memberships.map((membership) => ({
            planName: membership.planName,
            services: membership.services,
            facilities: membership.facilities,
            duration: membership.duration,
            price: membership.price,
          })),
        },
      },
      select: {
        id: true,
        name: true,
      },
    });

    console.log("gym created in db");

    return createOrUpdateGym;
  } catch (error) {
    console.error("Error creating/updating gym:", error);
    throw error;
  }
};

export const getGymDetails = async () => {
  try {
    const user = await currentUser();
    if (!user) return;

    const gyms = await prisma.gymOwner.findUnique({
      where: {
        clerkId: user.id,
      },
      select: {
        gym: {
          select: {
            name: true,
            id: true,
          },
        },
      },
    });

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
    });
    console.log("gyms in actions : ", gyms);

    return gyms;
  } catch (error) {
    console.log("error in getGymDetails : ", error);
  }
};

export const isAuthorizedGymOwner = async () => {
  try {
    const user = await currentUser();
    if (!user) return;

    return await prisma.gymOwner.findUnique({
      where: {
        clerkId: user.id,
      },
      select: {
        gym: {
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
