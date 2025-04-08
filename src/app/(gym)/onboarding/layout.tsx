import React from "react";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { doesGymExist } from "@/actions/db/gym";
import { OnboardingProgress } from "@/components/pages/gym/onboarding/progress";

type Props = {
  children: React.ReactNode;
};

const Layout = async (props: Props) => {
  const user = await currentUser();
  if (!user) redirect("/sign-in");

  const gymExist = await doesGymExist();

  if (gymExist?.gymId) {
    redirect(`/gyms/${gymExist.gymId}`);
  }

  return (
    <div className="w-screen relative h-screen flex justify-between items-center">
      <div className="absolute top-0 left-0 right-0">
        <OnboardingProgress />
      </div>
      <div className="w-full  p-3">{props.children}</div>
      {/* <div className="w-1/2 h-screen relative xl:block hidden">
        <Image
          src={"/assets/robo-cover.jpg"}
          alt="onboarding"
          fill
          className="object-cover"
          priority
        />
      </div> */}
    </div>
  );
};

export default Layout;
