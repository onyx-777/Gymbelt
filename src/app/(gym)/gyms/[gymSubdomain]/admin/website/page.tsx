import { getGymDetails } from "@/actions/db/gym";
import Website from "@/components/pages/gym/admin/features/website";
import React from "react";

const Page = async () => {
  const gymDetails = await getGymDetails();
  if (!gymDetails?.Gym) return;
  return <Website gymDetails={gymDetails} />;
};

export default Page;
