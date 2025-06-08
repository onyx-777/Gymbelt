import UserAction from "@/components/pages/action";
import ModalProvider from "@/components/pages/gym/admin/features/scheduler/providers/modal-context";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
// import { redirect } from "next/navigation";
import React from "react";

const Page = async () => {
  const user = await currentUser();
  if (!user) redirect("/sign-in");
  return (
    <ModalProvider>
      <UserAction />
    </ModalProvider>
  );
};

export default Page;
