import prisma from "@/lib/prisma";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

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
