import React from "react";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { doesGymExist } from "@/actions/db/gym";

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

  return <>{props.children}</>;
};

export default Layout;
