"use client";

import { PricingCard } from "@/components/ui/pricing-card";
import { OnboardingMembershipType } from "@/types/onboarding";
import { Trash } from "lucide-react";

interface Props {
  memberships: OnboardingMembershipType[];
}

function MembershipCard({ memberships }: Props) {
  return (
    <div className="flex flex-wrap justify-center p-4 space-x-4 space-y-4">
      {memberships.map((membership, index) => (
        <div key={index}>
          <Trash className="w-4 h-4 text-destructive absolute top-0 right-0 z-50" />
          <PricingCard
            key={index}
            heading={membership.planName}
            description={`Duration: ${membership.duration}`}
            price={Number(membership.price)}
            buttonText="Get Started"
            list={[...membership.services, ...membership.facilities]}
          />
        </div>
      ))}
    </div>
  );
}

export { MembershipCard };
