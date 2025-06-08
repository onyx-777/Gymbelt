"use client";

import React from "react";
import ContentSection from "../components/content-section";
import { Button } from "@/components/ui/button";
import { CashfreeKYCstatus } from "@prisma/client/edge";
import { createMerchantOnboardingLink } from "@/actions/cashfree";

interface Props {
  kycStatus: CashfreeKYCstatus;
  cashfreeMerchantId: string;
}

const getButtonText = (status: CashfreeKYCstatus) => {
  switch (status) {
    case "MIN_KYC_APPROVED":
      return "Activated";
    case "MIN_KYC_PENDING":
      return "Activate";
    case "MIN_KYC_SUBMITTED":
      return "Submitted";
    case "MIN_KYC_REJECTED":
      return "Activate";
    default:
      return "Unknown";
  }
};

const isButtonDisabled = (status: CashfreeKYCstatus) => {
  return status === "MIN_KYC_APPROVED" || status === "MIN_KYC_SUBMITTED";
};

const SettingsPayments: React.FC<Props> = ({
  kycStatus,
  cashfreeMerchantId,
}) => {
  const handleActivateOnboarding = async () => {
    console.log("merchantId : ", cashfreeMerchantId);
    const resp = await createMerchantOnboardingLink(cashfreeMerchantId);
    // Optionally, add feedback or refresh logic here

    console.log("resp : ", resp);
  };

  return (
    <ContentSection
      title="Payments"
      desc="Manage your payments settings. Set your preferred payment and subscriptions."
    >
      <div className="h-fit w-full">
        <div className="flex justify-between items-center w-full">
          <h3>Payment</h3>
          <Button
            className="dark:bg-white bg-black dark:text-black text-white dark:hover:text-white dark:hover:bg-primary"
            disabled={isButtonDisabled(kycStatus)}
            onClick={handleActivateOnboarding}
          >
            {getButtonText(kycStatus)}
          </Button>
        </div>
      </div>
    </ContentSection>
  );
};

export default SettingsPayments;
