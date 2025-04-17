import { getGymDetailsFromSubdomain } from "@/actions/db/gym";
import React from "react";

type Props = {
  params: {
    gymSubdomain: string;
  };
};

const Gym = async ({ params }: Props) => {
  const { gymSubdomain } = await params; // Await the params before destructuring

  console.log("subdomain in gym app : ", gymSubdomain);

  console.log("inside params true : ", gymSubdomain);
  const gymDetails = await getGymDetailsFromSubdomain(gymSubdomain);
  console.log(gymDetails);

  return (
    <div>
      Gym name from db: {gymDetails?.name} ------ gym id from params:{" "}
      {gymSubdomain}
    </div>
  );
};

export default Gym;
