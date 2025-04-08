"use client";
import React from "react";
import { motion } from "framer-motion";
import { useFormContext } from "react-hook-form";
import {
  GymInfoOnboardingSchemaType,
  OnboardingFieldNames,
} from "@/types/onboarding";
import { Input } from "@/components/ui/input";

interface Props {
  placeholder: string;
  registerName: OnboardingFieldNames;
  label: string;
}

const OnboardingInput = ({ placeholder, registerName, label }: Props) => {
  const { register } = useFormContext<GymInfoOnboardingSchemaType>();
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }} // Animation when entering
      animate={{ opacity: 1, y: 0 }} // Animation when mounted
      exit={{ opacity: 0 }} // Animation when unmounting
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="flex flex-col items-center justify-center h-full w-full max-w-sm"
    >
      <h1 className="lg:text-lg sm:tracking-wide text-left w-full">{label}</h1>
      <Input
        type="text"
        placeholder={placeholder}
        className="mt-4 py-2 border rounded-lg w-full"
        {...register(registerName, {
          required: "Gym name is required",
          minLength: {
            value: 3,
            message: "Gym name must be at least 3 characters long",
          },
          maxLength: {
            value: 50,
            message: "Gym name must be at most 50 characters long",
          },
        })}
      />
    </motion.div>
  );
};

export default OnboardingInput;
