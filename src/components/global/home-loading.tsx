import React from "react";
import { Progress } from "@/components/ui/progress";
import Image from "next/image";

export function HomeLoading() {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const startTime = performance.now();
    const duration = 5000; // 5 seconds

    const updateProgress = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const nextProgress = Math.min((elapsed / duration) * 100, 100);

      setProgress(nextProgress);

      if (elapsed < duration) {
        requestAnimationFrame(updateProgress);
      }
    };

    const animationFrame = requestAnimationFrame(updateProgress);

    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <div className="flex flex-col w-screen h-screen overflow-hidden justify-center items-center gap-4 bg-white dark:bg-black">
      <Image
        src={"/assets/logo.svg"}
        width={100}
        height={100}
        alt="GymBelt"
        className="object-cover dark:invert animate-pulse"
      />

      <div className="w-44 flex flex-col text-sm justify-center items-center gap-4">
        <Progress value={progress} className="w-full" /> {Math.round(progress)}%
      </div>
    </div>
  );
}
