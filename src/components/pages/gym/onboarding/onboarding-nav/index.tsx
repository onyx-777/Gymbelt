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

interface Props {
  submitForm: (data: OnboardingFormTypes) => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  form: UseFormReturn<any>; // Keep as 'any' for conditional handling
}

const OnboardingNav = ({ submitForm, form }: Props) => {
  const { decreaseStep, step, increaseStep, membership } = useStore();

  const handleSubmitClick = () => {
    // Execute the form submission first
    form.handleSubmit(submitForm)();

    // If form value is missing or undefined, show an error
    if (
      step === 9 &&
      (!membership || membership === undefined || membership.length === 0)
    ) {
      toast.error("No membership created", {
        description: "At least one membership must be created.",
      });
      return; // Don't proceed if membership is missing
    }

    // Proceed to next step if the form is valid
    if (step === 9 && membership.length > 0) {
      increaseStep();
    }
  };

  return (
    <div className="max-w-md flex flex-col justify-between gap-3 items-center h-full w-full">
      {step < TOTAL_ONBOARDING_STEPS && (
        <Button
          className="space-x-2 flex rounded-full cursor-pointer w-full p-5 bg-primary"
          variant={"default"}
          type="button" // Change to "button" to prevent form submission automatically
          onClick={handleSubmitClick} // Call the refactored function
          size={"lg"}
        >
          <p className="font-medium">Next Step</p>
          <ChevronRight className="text-muted-foreground" />
        </Button>
      )}
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
