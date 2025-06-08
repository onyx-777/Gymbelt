"use server";

import prisma from "@/lib/prisma";
import { GymOnboardingSchemaType } from "@/schemas/onboarding";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { cacheLife } from "next/dist/server/use-cache/cache-life";
import { cacheTag } from "next/dist/server/use-cache/cache-tag";
import {
  Cashfree_Payment_activation_status,
  CashfreeKYCstatus,
} from "@prisma/client/edge";

export const doesGymExist = async () => {
  try {
    const user = await currentUser();
    if (!user) redirect("/sign-in");

    const gymId = await prisma.user.findUnique({
      where: {
        clerkId: user.id,
      },
      select: {
        id: true,
        role: true,
      },
    });

    return gymId;
  } catch (error) {
    console.log("error in doesGymExist:", error);
  }
};

export const upsertGymInDB = async (
  gym: GymOnboardingSchemaType,
  cashfreeMerchantId: string,
  kyc_status?: CashfreeKYCstatus,
  Payment_activation_status?: Cashfree_Payment_activation_status
) => {
  console.log("Gym data:", gym);

  const user = await currentUser();
  if (!user) redirect("/sign-in");

  // await prisma.membershipTemplate.deleteMany({
  //   where: {
  //     gymId: "8a7a6b36-8523-46c5-b20e-bd15e570da44",
  //   },
  // });

  // await prisma.gym.delete({
  //   where: {
  //     id: "8a7a6b36-8523-46c5-b20e-bd15e570da44",
  //   },
  // });
  try {
    const existingGym = await prisma.gym.findUnique({
      where: { subdomain: gym.sloganSubdomain.subdomain },
      select: { id: true, membershipTemplates: true },
    });

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

    console.log("going for create gym in upset gym in db action gym");
    const createOrUpdateGym = await prisma.gym.upsert({
      where: { subdomain: gym.sloganSubdomain.subdomain },
      create: {
        name: gym.gymNameAddress.gymName,
        cashfreeMerchantId,
        kyc_status,
        Payment_activation_status,
        streetAddress: gym.gymNameAddress.streetAddress,
        city: gym.gymNameAddress.city,
        state: gym.gymNameAddress.state,
        pinCode: gym.gymNameAddress.pinCode,
        phoneNumber: gym.phoneEmail.gymPhoneNumber,
        email: gym.phoneEmail.gymEmail,
        businessModel: gym.gymBusinessTypeModel.businessModel,
        businessType: gym.gymBusinessTypeModel.businessType,
        logo: gym.logoWebsite.gymLogo,
        website: gym.logoWebsite.gymWebsite?.length
          ? gym.logoWebsite.gymWebsite
          : `${process.env.NEXT_PUBLIC_PROTOCOL}://${gym.sloganSubdomain.subdomain}.${process.env.NEXT_PUBLIC_DOMAIN}`,
        slogan: gym.sloganSubdomain.slogan,
        subdomain: gym.sloganSubdomain.subdomain,
        description: gym.gymType.gymType,
        facilities: gym.facilities.facilities,
        services: gym.services.services,
        License_Number: gym.licenseGST.gymLicenseNumber ?? null,
        GST_Number: gym.licenseGST.gymGSTNumber ?? null,
        GST_Registered: !!gym.licenseGST.gymGSTNumber,
        owner: {
          connect: {
            clerkId: user.id,
          },
        },
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
        streetAddress: gym.gymNameAddress.streetAddress,
        city: gym.gymNameAddress.city,
        state: gym.gymNameAddress.state,
        pinCode: gym.gymNameAddress.pinCode,
        phoneNumber: gym.phoneEmail.gymPhoneNumber,
        email: gym.phoneEmail.gymEmail,
        logo: gym.logoWebsite.gymLogo,
        website:
          gym.logoWebsite.gymWebsite ??
          `${process.env.NEXT_PUBLIC_PROTOCOL}://${gym.sloganSubdomain.subdomain}.${process.env.NEXT_PUBLIC_DOMAIN}`,
        slogan: gym.sloganSubdomain.slogan,
        subdomain: gym.sloganSubdomain.subdomain,
        description: gym.gymType.gymType,
        facilities: gym.facilities.facilities,
        services: gym.services.services,
        License_Number: gym.licenseGST.gymLicenseNumber ?? null,
        GST_Number: gym.licenseGST.gymGSTNumber ?? null,
        GST_Registered: !!gym.licenseGST.gymGSTNumber,
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

    try {
      await prisma.user.update({
        where: {
          clerkId: user.id,
        },
        data: {
          role: "GYM_OWNER",
        },
      });
    } catch (error) {
      console.log("error in updating user role : ", error);
    }

    console.log("returning upsert gym going back to onboaridng nav");
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
        Gym: {
          select: {
            name: true,
            id: true,
            logo: true,
            membershipTemplates: true,
            facilities: true,
            services: true,
          },
        },
      },
      cacheStrategy: {
        ttl: 3600,
        swr: 600,
        tags: ["gyms"],
      },
    });

    return gyms;
  } catch (error) {
    console.log("error in getGymDetails:", error);
  }
};

export const getGymDetailsFromSubdomain = async (subdomain: string) => {
  try {
    console.log("subdomain in actions:", subdomain);

    const gyms = await prisma.gym.findUnique({
      where: {
        subdomain,
      },
      select: {
        name: true,
        id: true,
      },
      cacheStrategy: {
        ttl: 3600,
        swr: 600,
        tags: ["gyms"],
      },
    });

    console.log("gyms in actions:", gyms);
    return gyms;
  } catch (error) {
    console.log("error in getGymDetailsFromSubdomain:", error);
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
        Gym: {
          select: {
            id: true,
            subdomain: true,
          },
        },
      },
    });
  } catch (error) {
    console.log("error in isAuthorizedGymOwner:", error);
  }
};

export const getAllGyms = async () => {
  "use cache";

  cacheLife("1 hours");
  cacheTag("gyms");

  try {
    return await prisma.gym.findMany({
      select: {
        id: true,
        name: true,
        logo: true,
        facilities: true,
        services: true,
        streetAddress: true,
        city: true,
        state: true,
        pinCode: true,
      },
      cacheStrategy: {
        ttl: 3600,
        swr: 600,
        tags: ["gyms"],
      },
    });
  } catch (error) {
    console.error("Error fetching gyms:", error);
    return [];
  }
};
