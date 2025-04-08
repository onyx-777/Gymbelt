import OnboardingComponent from "@/components/pages/gym/onboarding";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import React from "react";

const Onboarding = async () => {
  const user = await currentUser();
  if (!user) redirect("/sign-in");
  return (
    <div>
      <OnboardingComponent
        email={user.emailAddresses[0].emailAddress}
        firstName={user.firstName as string}
      />
    </div>
  );
};

export default Onboarding;
