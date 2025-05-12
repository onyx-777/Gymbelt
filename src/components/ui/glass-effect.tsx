import * as React from "react";
import { cn } from "@/lib/utils";

interface GlassProps extends React.HTMLAttributes<HTMLDivElement> {
  width?: string;
  height?: string;
}

const Glass = React.forwardRef<HTMLDivElement, GlassProps>(
  (
    { width = "w-[360px] lg:w-[900px]", height = "h-[40px]", ...props },
    ref
  ) => {
    return (
      <div
        className="fixed md:absolute animate-slide-up top-0 left-1/2 right-1/2 z-50"
        ref={ref}
        {...props}
      >
        <div className="flex flex-col items-center justify-center w-full">
          <div
            className={cn(
              "relative overflow-hidden rounded-b-2xl",
              width,
              height
            )}
          >
            <div className="pointer-events-none absolute bottom-0 z-10 h-full w-[900px] overflow-hidden border border-[#f5f5f51a] rounded-b-2xl">
              <div className="glass-effect h-full w-full" />
            </div>
            <svg>
              <defs>
                <filter id="fractal-noise-glass">
                  <feTurbulence
                    type="fractalNoise"
                    baseFrequency="0.12 0.12"
                    numOctaves="1"
                    result="warp"
                  />
                  <feDisplacementMap
                    xChannelSelector="R"
                    yChannelSelector="G"
                    scale="30"
                    in="SourceGraphic"
                    in2="warp"
                  />
                </filter>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    );
  }
);
Glass.displayName = "Glass";

export { Glass };
