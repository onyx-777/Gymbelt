import React from "react";

type Props = {
  params: {
    gymId: string;
  };
};

const Gym = ({ params: { gymId } }: Props) => {
  return <div>Gym {gymId}</div>;
};

export default Gym;
