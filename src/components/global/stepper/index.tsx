/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Stepper,
  StepperIndicator,
  StepperItem,
  StepperSeparator,
  StepperTrigger,
} from "@/components/ui/stepper";
import { useState } from "react";
import { GymOwnerInfo } from "@/components/pages/gym/register/gym-basic-info-form";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  GymBasicInfoSchema,
  GymBrandingSchema,
} from "@/schemas/gym-registration";
import { GymBrandingInfo } from "@/components/pages/gym/register/gym-branding-details-form";
import useStore from "@/context/gym-registration/gym-setup-context";
import OnboardingHome from "@/components/pages/gym/onboarding/steps/onboarding_welcome";
import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GymFacilitiesSevicesMembership } from "@/components/pages/gym/register/gym-faclities-services-membership";

interface Props {
  userEmail: string;
}

const steps = [1, 2, 3, 4];

export default function StepperComponent({ userEmail }: Props) {
  const [isLoading, setIsLoading] = useState(false);
  const store = useStore();

  // Create separate form instances for each step
  const basicInfoForm = useForm({
    resolver: zodResolver(GymBasicInfoSchema),
    defaultValues: {
      gymName: "",
      gymType: "",
      gymAddress: "",
      gymPhoneNumber: "",
      gymEmail: userEmail,
    },
  });

  const brandingForm = useForm({
    resolver: zodResolver(GymBrandingSchema),
    defaultValues: {
      gymLogo: "",
      gymWebsite: "",
      slogan: "",
      subdomain: "",
    },
  });

  const handleNextStep = async (data: any) => {
    try {
      setIsLoading(true);
      console.log("Current Step:", store.step);
      console.log("Form Data:", data);

      if (store.step === 1) {
        // Store basic info data
        store.setBasicInfo({
          gymName: data.gymName,
          gymType: data.gymType,
          gymAddress: data.gymAddress,
          gymPhoneNumber: data.gymPhoneNumber,
          gymEmail: data.gymEmail,
        });

        console.log("Basic Info Stored:", store.getCompleteData().basicInfo);
      } else if (store.step === 2) {
        // Store branding info data
        store.setBrandingInfo({
          gymLogo: data.gymLogo,
          gymWebsite: data.gymWebsite,
          slogan: data.slogan,
          subdomain: data.subdomain,
        });

        console.log(
          "Branding Info Stored:",
          store.getCompleteData().brandingInfo
        );
      }

      // If this is the final step, log complete data
      if (store.step === steps.length - 1) {
        const completeData = store.getCompleteData();
        console.log("Complete Registration Data:", completeData);
        // Here you can make your API call to save the data
        // await saveGymData(completeData);
      }

      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate API call
      store.increaseStep();
    } catch (error) {
      console.error("Form submission error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const getCurrentForm = () => {
    switch (store.step) {
      case 1:
        return (
          <GymOwnerInfo
            form={basicInfoForm}
            userEmail={userEmail}
            onSubmit={handleNextStep}
          />
        );
      case 2:
        return (
          <GymBrandingInfo form={brandingForm} onSubmit={handleNextStep} />
        );
      case 3:
        return <GymFacilitiesSevicesMembership />;

      default:
        return null;
    }
  };

  return (
    <div className="mx-auto w-full h-full flex flex-col justify-start lg:justify-center mt-6 lg:mt-0 items-center max-w-3xl space-y-4 text-center p-3">
      <AnimatePresence mode="wait">
        {store.step > 0 && (
          <motion.div
            key="stepper"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "backInOut", delay: 0.5 }}
            exit={{ opacity: 0, scale: 0 }}
            className="w-full"
          >
            <Stepper value={store.step} onValueChange={store.setStep}>
              {steps.map((step) => (
                <StepperItem
                  key={step}
                  step={step}
                  className="[&:not(:last-child)]:flex-1"
                  loading={isLoading}
                >
                  <StepperTrigger asChild>
                    <StepperIndicator />
                  </StepperTrigger>
                  {step < steps.length && <StepperSeparator />}
                </StepperItem>
              ))}
            </Stepper>
          </motion.div>
        )}

        {store.step === 0 && (
          <motion.div
            key="onboarding-home"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5, ease: "backInOut" }}
          >
            <OnboardingHome />
          </motion.div>
        )}
        {store.step > 0 && (
          <>
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "backInOut" }}
              exit={{ opacity: 0 }}
              className="flex w-full flex-col items-center justify-center space-y-2 bg-muted/70 p-4 rounded-t-2xl"
            >
              <p className="text-lg font-bold">Step {store.step}</p>
              <p className="text-muted-foreground">
                {store.step === 1 &&
                  "Please fill in your Gym Basic information"}
                {store.step === 2 && "Please fill in Gym Branding details"}
                {store.step === 3 && "Please fill in your payment information"}
              </p>
            </motion.div>

            <ScrollArea className="h-[60vh] rounded-md lg:p-2 xl:p-4 w-full">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.5, ease: "backInOut", delay: 0.5 }}
              >
                {getCurrentForm()}
              </motion.div>
            </ScrollArea>
          </>
        )}
      </AnimatePresence>

      {store.step > 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, ease: "backInOut" }}
          exit={{ opacity: 0 }}
          className="w-full flex justify-center items-center"
        >
          <>
            <div className="bottom-10 fixed max-w-3xl flex justify-between items-center w-full px-5 bg-background p-3">
              <Button
                className="space-x-2 flex cursor-pointer"
                variant={"secondary"}
                onClick={store.decreaseStep}
              >
                <ChevronLeft className="text-muted-foreground" />
                <p>Previous Step</p>
              </Button>
              {store.step < steps.length && (
                <Button
                  className="space-x-2 flex cursor-pointer"
                  variant={"default"}
                  onClick={
                    store.step === 1
                      ? basicInfoForm.handleSubmit(handleNextStep)
                      : brandingForm.handleSubmit(handleNextStep)
                  }
                >
                  <p className="font-medium">Next Step</p>
                  <ChevronRight className="text-muted-foreground" />
                </Button>
              )}
            </div>
          </>
        </motion.div>
      )}
    </div>
  );
}
