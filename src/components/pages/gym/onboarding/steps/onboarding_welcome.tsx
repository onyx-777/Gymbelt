"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import useStore from "@/context/gym-registration/gym-setup-context";
import Image from "next/image";
import { TextShimmer } from "@/components/ui/text-shimmer";

interface Props {
  firstName: string;
}

const OnboardingHome = ({ firstName }: Props) => {
  const { setStep } = useStore();

  return (
    <AnimatePresence key={"onboarding-home"}>
      <div className="flex flex-col justify-center items-center w-full h-fit gap-14 xl:gap-10">
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          exit={{ opacity: 0, y: -100 }}
          className="w-full text-center space-y-8 flex justify-center items-center flex-col"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: 1,
              scale: 1,
              transition: {
                type: "spring",
                stiffness: 260,
                damping: 20,
              },
            }}
            exit={{
              opacity: 0,
              scale: 0,
              transition: {
                duration: 0.5,
              },
            }}
            className="relative w-40 aspect-square mb-8"
          >
            <Image
              src={"/assets/logo.png"}
              alt="gymbelt"
              fill
              className="object-cover dark:invert-100"
            />
          </motion.div>

          <h1 className="text-5xl space-x-3">
            <span>Welcome</span>
            <br />
            {firstName && (
              <TextShimmer
                duration={1.2}
                className="text-5xl leading-16 font-bold [--base-color:theme(colors.blue.600)] [--base-gradient-color:theme(colors.blue.200)] dark:[--base-color:theme(colors.blue.700)] dark:[--base-gradient-color:theme(colors.blue.400)]"
              >
                {firstName}
              </TextShimmer>
            )}
          </h1>
          <p className="text-lg lg:text-lg text-muted-foreground">
            Let&apos;s set up your gym in just a few quick steps. We&apos;ll
            handle the rest—easy peasy!
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{
            opacity: 0,
            y: 100,
            transition: {
              duration: 0.3,
              ease: "easeOut",
            },
          }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="w-full text-center space-y-8"
        >
          <Button
            size={"lg"}
            variant={"default"}
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
