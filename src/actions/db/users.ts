"use server";

import { GymOwner } from "@prisma/client/edge";
import prisma from "@/lib/prisma";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export const createGymOwnerInDB = async (gymOwner: Partial<GymOwner>) => {
  if (!gymOwner.email || !gymOwner.clerkId || !gymOwner.oauth) return null;

  try {
    console.log("Creating gymOwner in DB:", gymOwner);
    // console.log("client : ", client.gymOwner);
    const createUser = await prisma.gymOwner.create({
      data: {
        clerkId: gymOwner.clerkId,
        email: gymOwner.email,
        first_name: gymOwner.first_name,
        last_name: gymOwner.last_name,
        avatar: gymOwner.avatar,
        oauth: gymOwner.oauth,
      },
      select: {
        id: true,
        first_name: true,
      },
    });

    console.log("gymOwner created in db");
    return createUser;
  } catch (error) {
    console.error("Error creating gymOwner:", error);
    throw new Error("Failed to create user");
  }
};

export const deleteGymOwnerInDB = async (id: string) => {
  try {
    const gymOwner = await prisma.gymOwner.findUnique({
      where: {
        clerkId: id,
      },
      select: {
        email: true,
      },
    });

    await prisma.gymOwner.delete({
      where: {
        clerkId: id,
        email: gymOwner?.email,
      },
    });
  } catch (error) {
    console.log("error in deleteGymOwnerInDB : ", error);
    throw new Error("Failed to delete user");
  }
};

export const getGymOwnerIdInDB = async () => {
  try {
    const user = await currentUser();
    if (!user) redirect("/sign-in");

    const userInDb = await prisma.gymOwner.findUnique({
      where: {
        clerkId: user.id,
      },
      select: {
        id: true,
      },
    });

    return userInDb;
  } catch (error) {
    console.log("error in getGymOwnerIdInDB : ", error);
  }
};
