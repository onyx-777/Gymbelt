"use client";

import * as React from "react";
import { Progress } from "@/components/ui/progress";
import useStore, {
  TOTAL_ONBOARDING_STEPS,
} from "@/context/gym-registration/gym-setup-context";

export function OnboardingProgress() {
  const { step } = useStore();
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    // Calculate percentage based on current step
    const percentage = ((step + 1) / TOTAL_ONBOARDING_STEPS) * 100;
    setProgress(percentage);
  }, [step]);

  return (
    <>
      {step > 0 && (
        <div className="w-full">
          <Progress value={progress} className="w-full" />
          <p className="text-sm text-muted-foreground mt-2 ml-2 hidden lg:block">
            Step {step} of {TOTAL_ONBOARDING_STEPS}
          </p>
        </div>
      )}
    </>
  );
}
