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
      console.log("redirecting to dashboard step = 10");

      const gymData = await getCompleteData(); // Extract the complete gym data from the store

      console.log("gymData : ", gymData);

      // Pass the gym data to upsertGymInDB
      const addGymDetails = await upsertGymInDB(gymData);

      console.log("addGymDetails resposne : ", addGymDetails);

      window.location.href = `${process.env.NEXT_PUBLIC_PROTOCOL}://${subdomain}.${process.env.NEXT_PUBLIC_DOMAIN}`;
      // window.location.href = "http://chc.localhost:3000";
    }
    // Execute the form submission firsta

    console.log("step : ", step);
    if (step < TOTAL_ONBOARDING_STEPS) {
      form.handleSubmit(submitForm)();

      // If form value is missing or undefined, show an error
      if (
        step === 9 &&
        (!memberships || memberships === undefined || memberships.length === 0)
      ) {
        toast.error("No memberships created", {
          description: "At least one memberships must be created.",
        });
        return; // Don't proceed if memberships is missing
      }

      // Proceed to next step if the form is valid
      if (step === 9 && memberships.length > 0) {
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
