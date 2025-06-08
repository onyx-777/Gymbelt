"use client";

import { Suspense, useState, useEffect, useRef } from "react";
import dynamic from "next/dynamic";

const Spline = dynamic(() => import("@splinetool/react-spline"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center">
      <span className="loader" />
    </div>
  ),
});

export function SplineScene({
  scene,
  className,
}: {
  scene: string;
  className: string;
}) {
  const [loadSpline, setLoadSpline] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          // Only load when browser is idle too
          if ("requestIdleCallback" in window) {
            requestIdleCallback(() => setLoadSpline(true));
          } else {
            setTimeout(() => setLoadSpline(true), 200); // Fallback
          }
        }
      },
      { threshold: 0.1, rootMargin: "200px" }
    );

    const currentContainer = containerRef.current;
    if (currentContainer) {
      observer.observe(currentContainer);
    }

    return () => {
      if (currentContainer) observer.unobserve(currentContainer);
    };
  }, []);

  return (
    <div ref={containerRef} className={className}>
      {loadSpline && (
        <Suspense
          fallback={
            <div className="h-screen w-screen z-[50] bg-black overflow-hidden flex justify-center items-center">
              <span className="loader"></span>
            </div>
          }
        >
          <Spline scene={scene} className={className} />
        </Suspense>
      )}
    </div>
  );
}
