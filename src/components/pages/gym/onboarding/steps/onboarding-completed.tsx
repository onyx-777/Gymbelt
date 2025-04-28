import { CheckCircle } from "lucide-react";
import React from "react";

const OnboardingCompleted = () => {
  return (
    <div className="h-full w-full justify-between items-center flex-col rounded-2xl flex">
      <div className="w-full h-60 max-w-2xl relative aspect-square flex flex-col gap-14 justify-center items-center">
        <div className="w-20 relative aspect-square flex flex-col justify-center items-center">
          <CheckCircle className="animate-ping text-theme w-full h-fit" />
          {/* <video autoPlay loop muted playsInline className=" w-full">
            <source src="/assets/animted-check-icon.webm" type="video/webm" />
            Your browser does not support the video tag.
          </video> */}
        </div>
        <div className="space-y-1">
          <h2 className="text-2xl">Setup complete!</h2>
          <p className="text-muted-foreground text-sm p-5">
            Your gym is ready to go—just one last step to enable payments. Head
            to your dashboard to wrap it up!
          </p>
        </div>
      </div>
    </div>
  );
};

export default OnboardingCompleted;
