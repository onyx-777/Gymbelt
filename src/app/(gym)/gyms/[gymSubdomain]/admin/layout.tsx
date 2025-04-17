import { isAuthorizedGymOwner } from "@/actions/db/gym";
import Unauthorized from "@/components/global/unauthorized-access";
import React from "react";

const Layout = async ({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { gymSubdomain: string };
}) => {
  const authorizedGymOwner = await isAuthorizedGymOwner();
  const { gymSubdomain } = await params;

  if (!authorizedGymOwner)
    return (
      <div className="h-screen">
        <Unauthorized
          redirectingTo={gymSubdomain}
          windowLocationCompleteRedirectingLink={`${process.env.NEXT_PUBLIC_PROTOCOL}://${gymSubdomain}.${process.env.NEXT_PUBLIC_DOMAIN}`}
        />
      </div>
    );

  return { children };
};

export default Layout;
