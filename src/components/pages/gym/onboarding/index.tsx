"use client";
import useStore from "@/context/gym-registration/gym-setup-context";
import React from "react";
import OnboardingHome from "./steps/onboarding_welcome";
import OnboardingInput from "./steps/onboarding-input";
import { HomeIcon } from "lucide-react";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { gymInfoOnboardingSchema } from "@/schemas/onboarding";
import { AnimatePresence, motion } from "framer-motion";
import { GymInfoOnboardingSchemaType } from "@/types/onboarding";
import OnboardingNav from "./onboarding-nav";

type Props = {
  email: string;
  firstName: string;
};

const OnboardingComponent = ({ firstName, email }: Props) => {
  const { step } = useStore();

  const methods = useForm({
    resolver: zodResolver(gymInfoOnboardingSchema),
    defaultValues: {
      gymAddress: "",
      gymEmail: email,
      gymGSTNumber: "",
      gymLicenseNumber: "",
      gymLogo: "",
      gymName: "",
      gymPhoneNumber: "",
      gymType: "",
      gymWebsite: "",
      slogan: "",
      subdomain: "",
    },
  });

  const onboardingflow = () => {
    switch (step) {
      case 0:
        return <OnboardingHome firstName={firstName} />;

      case 1:
        return (
          <div className="flex flex-col grow gap-[4.5rem] justify-center items-center w-full -mt-7 lg:mt-0">
            <h1 className="flex flex-col gap-5 justify-center items-center w-full">
              <span className="text-theme rounded-full p-5 bg-theme/20">
                <HomeIcon className="w-[36px] h-[36px] md:w-[40px] md:h-[40px] " />
              </span>
              <span className="text-3xl lg:text-4xl font-semibold">
                Tell us about your Gym
              </span>
            </h1>
            <div className="flex flex-col w-full max-w-sm justify-center items-center h-full  gap-10">
              <OnboardingInput
                label="What is the name of your gym ?"
                placeholder="What do you call your gym?"
                registerName={"gymAddress"}
              />

              <OnboardingInput
                label="Where is your gym ?"
                placeholder="what is the address of your gym?"
                registerName={"gymAddress"}
              />
            </div>
          </div>
        );

      default:
        break;
    }
  };

  const onSubmit = async (data: GymInfoOnboardingSchemaType) => {
    console.log("onSubmit onboarding data : ", data);
  };

  return (
    <div className="flex flex-col justify-center items-center w-full h-full">
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(onSubmit)}
          className="flex flex-col justify-center items-center w-full h-full gap-7"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={step} // Ensure unique key for each step
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="w-full h-fit p-3 text-center"
            >
              {onboardingflow()}
            </motion.div>
            <motion.div
              key={`nav-${step}`} // Add unique key for nav component
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="w-full max-w-sm flex justify-center items-center h-fit p-3 text-center"
            >
              {step > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="w-full flex justify-center items-center h-fit text-center"
                >
                  <OnboardingNav />
                </motion.div>
              )}{" "}
            </motion.div>
          </AnimatePresence>
        </form>
      </FormProvider>{" "}
    </div>
  );
};

export default OnboardingComponent;
