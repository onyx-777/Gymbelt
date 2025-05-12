import { getAllGyms } from "@/actions/db/gym";
import { GymTable } from "@/components/pages/gym/gyms";
import React from "react";

const Page = async () => {
  const getGyms = await getAllGyms();
  console.log(getGyms);
  return (
    <div className="p-2 md:p-4">
      <GymTable gyms={getGyms} />
    </div>
  );
};

export default Page;
