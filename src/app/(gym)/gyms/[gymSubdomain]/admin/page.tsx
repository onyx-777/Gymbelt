import React from "react";

type Props = {
  params: {
    gymSubdomain: string;
  };
};

const Page = async ({ params }: Props) => {
  const { gymSubdomain } = await params;
  return <div>{gymSubdomain} admin panel</div>;
};

export default Page;
