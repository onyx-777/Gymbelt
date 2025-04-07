"use client";

import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import useStore from "@/context/gym-registration/gym-setup-context";
import { OnboardingFields } from "@/constants/onboarding";
import { Button } from "@/components/ui/button";

const OnboardingNav = () => {
  const { increaseStep, decreaseStep, step } = useStore();

  const totalSteps = OnboardingFields.length;

  return (
    <>
      {step > 0 && (
        <div className="bottom-10 fixed max-w-3xl flex justify-between items-center h-full w-full px-5 p-3">
          <Button
            className="space-x-2 flex cursor-pointer"
            variant={"secondary"}
            onClick={decreaseStep}
          >
            <ChevronLeft className="text-red-600" />
            <p>Previous </p>
          </Button>
          {step < totalSteps && (
            <Button
              className="space-x-2 flex cursor-pointer"
              variant={"default"}
              onClick={increaseStep}
            >
              <p className="font-medium">Next Step</p>
              <ChevronRight className="text-muted-foreground" />
            </Button>
          )}
        </div>
      )}
    </>
  );
};

export default OnboardingNav;
