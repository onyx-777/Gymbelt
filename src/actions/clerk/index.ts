"use server";

import { clerkClient, currentUser } from "@clerk/nextjs/server";

export const addPhoneNumber = async (phoneNumber: string) => {
  console.log("addPhoneNumber action called");
  const userId = await currentUser();
  console.log(userId?.id);
  if (!userId) return;
  try {
    console.log("addPhoneNumber action called inside try");
    const response = (await clerkClient()).phoneNumbers.createPhoneNumber({
      userId: userId.id,
      phoneNumber,
    });

    console.log(
      "addPhoneNumber action called inside try RESPONSE : ",
      (await response).verification
    );
    return response;
  } catch (error) {
    console.log("error in creating phone number in clerk : ", error);
  }
};
