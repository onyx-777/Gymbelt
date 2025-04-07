"use client";

import useStore from "@/context/gym-registration/gym-setup-context";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FormProvider, useForm } from "react-hook-form";
import { GymInfoOnboardingSchemaType } from "@/types/onboarding";
import { zodResolver } from "@hookform/resolvers/zod";
import { gymInfoOnboardingSchema } from "@/schemas/onboarding";
import { OnboardingFields } from "@/constants/onboarding";
import OnboardingInput from "./steps/onboarding-input";
import OnboardingHome from "./steps/onboarding_welcome";

interface Props {
  email: string;
}

const OnboardingComponent = ({ email }: Props) => {
  const { step } = useStore();
  const methods = useForm<GymInfoOnboardingSchemaType>({
    resolver: zodResolver(gymInfoOnboardingSchema),
    defaultValues: {
      gymName: "",
      gymType: "",
      gymAddress: "",
      gymEmail: email,
      gymPhoneNumber: "",
      gymGSTNumber: "",
      gymLicenseNumber: "",
      gymLogo: "",
      gymWebsite: "",
      slogan: "",
      subdomain: "",
    },
  });

  const onSubmit = async (data: GymInfoOnboardingSchemaType) => {
    console.log("onSubmit onboarding data : ", data);
  };

  // Filter the fields for the current step
  const currentFields = OnboardingFields.filter((field) => field.step === step);

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <AnimatePresence mode="wait">
          <motion.div
            key={step} // Ensure unique key for each step
            initial={{ opacity: 0, y: 20 }} // Animation when entering
            animate={{ opacity: 1, y: 0 }} // Animation when mounted
            exit={{ opacity: 0, y: -20 }} // Animation when unmounting
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="w-full h-fit p-3 text-center"
          >
            {step === 0 && <OnboardingHome />}
            {currentFields.map(({ fieldName, placeholder }) => (
              <div key={fieldName}>
                <OnboardingInput
                  placeholder={placeholder ? placeholder : ""}
                  registerName={fieldName}
                />
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </form>
    </FormProvider>
  );
};

export default OnboardingComponent;
