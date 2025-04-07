"use client";
import React, { useState, useEffect } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import useStore from "@/context/gym-registration/gym-setup-context";

const OnboardingHome = () => {
  const { setStep } = useStore();
  const [hasError, setHasError] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // Wait for client-side hydration
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleLottieError = (error: any) => {
    console.error("Lottie Error:", error);
    setHasError(true);
  };

  return (
    <AnimatePresence key={"onboarding-home"}>
      <div className="flex flex-col justify-center items-center w-full h-screen p-4 gap-14 xl:gap-10">
        {isMounted && !hasError && (
          <motion.div
            initial={{ opacity: 0, y: -200 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeInOut", delay: 0.7 }}
            exit={{ opacity: 0, y: -200 }}
            className="hidden xl:block w-full relative"
            style={{ height: "300px" }} // Fixed height container
          >
            <DotLottieReact
              src="https://lottie.host/5eb8be24-c80d-4b7a-b290-d2307245bf1d/4T19IqQXBy.lottie"
              loop
              autoplay
              style={{
                width: "100%",
                height: "100%",
                position: "absolute",
                top: 0,
                left: 0,
              }}
              renderConfig={{
                devicePixelRatio: 1, // Force 1x pixel ratio
              }}
              onError={handleLottieError}
            />
          </motion.div>
        )}

        {hasError && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="w-64 h-64 bg-muted rounded-lg flex items-center justify-center"
          >
            <span className="text-muted-foreground">Animation unavailable</span>
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          exit={{ opacity: 0, y: -100 }}
          className="w-full text-center space-y-8"
        >
          <h1 className="text-5xl">Welcome</h1>
          <p className="text-xl text-muted-foreground">
            Let&apos;s set up your gym in just a few quick steps. We&apos;ll
            handle the rest—easy peasy!
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 200 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeInOut", delay: 1 }}
          className="w-full text-center space-y-8"
        >
          <Button
            size={"lg"}
            className="text-xl p-6 cursor-pointer"
            onClick={() => setStep(1)}
          >
            Get Started
          </Button>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default OnboardingHome;
