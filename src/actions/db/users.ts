"use server";

import { User } from "@prisma/client/edge";
import prisma from "@/lib/prisma";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export const createUserInDB = async (userInfo: Partial<User>) => {
  if (
    !userInfo.email ||
    !userInfo.clerkId ||
    !userInfo.oauth ||
    !userInfo.lastName ||
    !userInfo.avatar ||
    !userInfo.dateOfBirth ||
    !userInfo.firstName ||
    !userInfo.gender
  )
    return null;
  try {
    console.log("Creating user in DB:", userInfo);
    // console.log("client : ", client.gymOwner);
    const createUser = await prisma.user.create({
      data: {
        clerkId: userInfo.clerkId,
        email: userInfo.email,
        oauth: userInfo.oauth,
        lastName: userInfo.lastName,
        avatar: userInfo.avatar,
        dateOfBirth: userInfo.dateOfBirth,
        firstName: userInfo.firstName,
        gender: userInfo.gender,
      },
      select: {
        id: true,
        firstName: true,
      },
    });

    console.log("user created in db");
    return createUser;
  } catch (error) {
    console.error("Error creating user:", error);
    throw new Error("Failed to create user");
  }
};

export const createGymOwnerInDB = async (gymOwner: Partial<User>) => {
  if (!gymOwner.email || !gymOwner.clerkId || !gymOwner.oauth) return null;

  try {
    console.log("Creating gymOwner in DB:", gymOwner);
    // console.log("client : ", client.gymOwner);
    const createUser = await prisma.user.create({
      data: {
        clerkId: gymOwner.clerkId,
        email: gymOwner.email,
        firstName: gymOwner.firstName,
        lastName: gymOwner.lastName,
        avatar: gymOwner.avatar,
        oauth: gymOwner.oauth,
      },
      select: {
        id: true,
        firstName: true,
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
    const gymOwner = await prisma.user.findUnique({
      where: {
        clerkId: id,
      },
      select: {
        email: true,
      },
    });

    await prisma.user.delete({
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

    const userInDb = await prisma.user.findUnique({
      where: {
        clerkId: user.id,
      },
      select: {
        id: true,
        clerkId: true,
      },
    });

    return userInDb;
  } catch (error) {
    console.log("error in getGymOwnerIdInDB : ", error);
  }
};
