"use client";

import { useEffect, useState } from "react";
import { HomeLoading } from "./home-loading";

export function LoadingWrapper({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);
  const [isContentReady, setIsContentReady] = useState(false);

  useEffect(() => {
    // Start loading timer
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    // Set content as ready in next tick to ensure initial render
    Promise.resolve().then(() => {
      setIsContentReady(true);
    });

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Render actual content immediately but keep it hidden while loading */}
      <div style={{ visibility: isLoading ? "hidden" : "visible" }}>
        {isContentReady && children}
      </div>

      {/* Show spinner overlay while loading */}
      {isLoading && (
        <div className="fixed inset-0 overflow-hidden h-screen w-screen flex justify-center items-center bg-black z-50">
          <HomeLoading />
        </div>
      )}
    </>
  );
}
