import { getAllGyms } from "@/actions/db/gym";
import GymCard from "@/components/ui/expandable-card-demo-grid";
import { UserProfile } from "@clerk/nextjs";
import React from "react";

const Page = async () => {
  const getGyms = await getAllGyms();
  return (
    <div>
      <GymCard gyms={getGyms} />
      <UserProfile />
    </div>
  );
};

export default Page;
