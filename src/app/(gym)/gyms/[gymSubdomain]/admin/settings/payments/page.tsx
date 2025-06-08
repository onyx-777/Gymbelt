import SettingsPayments from "@/components/pages/gym/admin/features/settings/payments";
import { currentUser } from "@clerk/nextjs/server";
import { CashfreeKYCstatus } from "@prisma/client/edge";
import React from "react";

const Payments = async () => {
  const user = await currentUser();
  if (!user) return;

  console.log(user.publicMetadata.min_kyc_status);
  console.log(user.privateMetadata.merchantId);

  return (
    <SettingsPayments
      kycStatus={user.publicMetadata.min_kyc_status as CashfreeKYCstatus}
      cashfreeMerchantId={user.privateMetadata.merchantId as string}
    />
  );
};

export default Payments;
