// components/OnboardingNav.tsx

"use client";

import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import useStore, {
  TOTAL_ONBOARDING_STEPS,
} from "@/context/gym-registration/gym-setup-context";
import { Button } from "@/components/ui/button";
import { UseFormReturn } from "react-hook-form";
import { OnboardingFormTypes } from "@/types/onboarding";
import { toast } from "sonner";
import { upsertGymInDB } from "@/actions/db/gym";
import { createMerchant } from "@/actions/cashfree";
import { nanoid } from "nanoid";

interface Props {
  submitForm: (data: OnboardingFormTypes) => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  form: UseFormReturn<any>; // Keep as 'any' for conditional handling
}

const OnboardingNav = ({ submitForm, form }: Props) => {
  const {
    decreaseStep,
    step,
    increaseStep,
    memberships,
    getCompleteData,
    sloganSubdomain: { subdomain },
  } = useStore();

  const handleSubmitClick = async () => {
    if (step === TOTAL_ONBOARDING_STEPS) {
      console.log("redirecting to dashboard");

      const gymData = await getCompleteData(); // Extract the complete gym data from the store

      console.log("gymData : ", gymData);

      const generateMerchantId = () => nanoid(); // default is 21 characters

      const merchant_id = generateMerchantId(); // Secure & unique ID

      console.log("going for merchant creation in onboarding nav");

      try {
        console.log(
          "going for merchant creation inside try block onboarding nav"
        );

        console.log(
          "website : ",
          gymData?.logoWebsite?.gymWebsite?.trim()
            ? gymData.logoWebsite.gymWebsite.trim()
            : `${process.env.NEXT_PUBLIC_PROTOCOL}://${gymData?.sloganSubdomain?.subdomain}.${process.env.NEXT_PUBLIC_DOMAIN}`
        );
        const merchantCreated = await createMerchant(
          {
            merchant_id: merchant_id,
            merchant_name: gymData.gymNameAddress.gymName,
            merchant_email: gymData.phoneEmail.gymEmail,
            merchant_site_url: gymData?.logoWebsite?.gymWebsite?.trim()
              ? gymData.logoWebsite.gymWebsite.trim()
              : `${process.env.NEXT_PUBLIC_PROTOCOL}://${gymData?.sloganSubdomain?.subdomain}.${process.env.NEXT_PUBLIC_DOMAIN}`,
            poc_phone: gymData.phoneEmail.gymPhoneNumber, // Adjust according to your data structure
            business_details: {
              business_legal_name: gymData.gymNameAddress.gymName,
              business_model: gymData.gymBusinessTypeModel.businessModel,
              business_type: gymData.gymBusinessTypeModel.businessType,
            }, // Adjust according to your data structure
          },
          gymData.sloganSubdomain.subdomain
        );

        console.log("Merchant created in successfully : ", merchantCreated);

        console.log("going for gym creation");

        if (merchantCreated) {
          // Pass the gym data to upsertGymInDB

          console.log("going for gym creation in if block");

          const addGymDetails = await upsertGymInDB(
            gymData,
            merchantCreated.merchant_id,
            "MIN_KYC_PENDING",
            "PENDING"
          );

          console.log("added GymDetails resposne : ", addGymDetails);

          if (addGymDetails) {
            console.log(
              "redirecting to ... subdomain.domain but commented, uncomment to use it",
              subdomain
            );
            // window.location.href = `${process.env.NEXT_PUBLIC_PROTOCOL}://${subdomain}.${process.env.NEXT_PUBLIC_DOMAIN}`;
            // // window.location.href = "http://chc.localhost:3000";
          }
        }
      } catch (error) {
        console.log("error creating merchant : ", error);
      }
    }
    // Execute the form submission firsta

    console.log("step in onboarding nav : ", step);
    if (step < TOTAL_ONBOARDING_STEPS) {
      form.handleSubmit(submitForm)();

      // If form value is missing or undefined, show an error
      if (
        step === 10 &&
        (!memberships || memberships === undefined || memberships.length === 0)
      ) {
        toast.error("No memberships created", {
          description: "At least one memberships must be created.",
        });
        return; // Don't proceed if memberships is missing
      }

      // Proceed to next step if the form is valid
      if (step === 10 && memberships.length > 0) {
        increaseStep();
      }
    }
  };

  return (
    <div className="max-w-md flex flex-col justify-between gap-3 items-center h-full w-full">
      <Button
        className="space-x-2 flex rounded-full cursor-pointer w-full p-5 bg-primary"
        variant={"default"}
        type="button" // Change to "button" to prevent form submission automatically
        onClick={handleSubmitClick} // Call the refactored function
        size={"lg"}
      >
        <p className="font-medium">
          {step === TOTAL_ONBOARDING_STEPS ? (
            <>Go to dashboard</>
          ) : (
            <>Next Step</>
          )}
        </p>
        {step < TOTAL_ONBOARDING_STEPS && (
          <ChevronRight className="text-muted-foreground" />
        )}
      </Button>
      <Button
        className="space-x-2 flex rounded-full cursor-pointer w-full p-5"
        variant={"ghost"}
        onClick={decreaseStep}
      >
        <ChevronLeft />
        <p>Previous</p>
      </Button>
    </div>
  );
};

export default OnboardingNav;
