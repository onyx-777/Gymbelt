import OnboardingComponent from "@/components/pages/gym/onboarding";
import { currentUser } from "@clerk/nextjs/server";
import Image from "next/image";
import { redirect } from "next/navigation";
import React from "react";

const Onboarding = async () => {
  const user = await currentUser();
  if (!user) redirect("/sign-in");
  return (
    <div className="w-full h-screen flex justify-between items-center">
      <div className="w-1/2 max-w-2xl">
        <OnboardingComponent email={user.emailAddresses[0].emailAddress} />
      </div>
      <div className="w-1/2 h-screen relative xl:block hidden">
        <Image
          src={"/assets/robo-hand-2.jpg"}
          alt="onboarding"
          fill
          className="object-cover"
          priority
        />
      </div>
    </div>
  );
};

export default Onboarding;
