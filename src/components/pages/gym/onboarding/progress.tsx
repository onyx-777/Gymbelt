"use client";

import * as React from "react";
import { Progress } from "@/components/ui/progress";
import useStore, {
  TOTAL_ONBOARDING_STEPS,
} from "@/context/gym-registration/gym-setup-context";

export function OnboardingProgress() {
  const step = useStore((state) => state.step);
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const percentage = (step / TOTAL_ONBOARDING_STEPS) * 100;
    setProgress(percentage);
  }, [step]);

  return (
    <>
      {step > 0 && step < TOTAL_ONBOARDING_STEPS && (
        <div className="w-full">
          <Progress
            value={progress}
            className="w-full"
            fillClassName="bg-primary"
          />
          <p className="text-sm text-muted-foreground mt-2 ml-2 hidden lg:block">
            Step {step} of {TOTAL_ONBOARDING_STEPS}
          </p>
        </div>
      )}
    </>
  );
}
