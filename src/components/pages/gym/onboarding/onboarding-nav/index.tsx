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
      <div className="max-w-md flex flex-col justify-between gap-3 items-center h-full w-full">
        {step < totalSteps && (
          <Button
            className="space-x-2 flex cursor-pointer w-full p-5 bg-primary"
            variant={"default"}
            onClick={increaseStep}
            size={"lg"}
          >
            <p className="font-medium">Next Step</p>
            <ChevronRight className="text-muted-foreground" />
          </Button>
        )}
        <Button
          className="space-x-2 flex cursor-pointer w-full p-5"
          variant={"ghost"}
          onClick={decreaseStep}
        >
          <ChevronLeft />
          <p>Previous </p>
        </Button>
      </div>
    </>
  );
};

export default OnboardingNav;
