/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React from "react";
import { motion } from "framer-motion";
import { UseFormReturn } from "react-hook-form";
import { OnboardingFieldNames } from "@/types/onboarding";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import UploadFile from "@/components/global/image-upload";

interface Props {
  Icon?: React.ElementType;
  componentHeadline: string | React.ReactNode;
  FirstLabel: string;
  FirstInputPlaceholder: string;
  FirstRegisterName: OnboardingFieldNames;
  SecondLabel: string;
  SecondInputPlaceholder: string;
  SecondRegisterName: OnboardingFieldNames;
  form: UseFormReturn<any>;
  onSubmit: (data: any) => void;
  FirstInputType: React.HTMLInputTypeAttribute;
  SecondInputType: React.HTMLInputTypeAttribute;
}

const OnboardingInput = ({
  FirstInputPlaceholder,
  FirstLabel,
  FirstRegisterName,
  SecondInputPlaceholder,
  SecondLabel,
  SecondRegisterName,
  componentHeadline,
  Icon,
  form,
  onSubmit,
  FirstInputType,
  SecondInputType,
}: Props) => {
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <motion.div
          initial={{ opacity: 0, y: -50 }} // Animation when entering
          animate={{ opacity: 1, y: 0 }} // Animation when mounted
          exit={{ opacity: 0 }} // Animation when unmounting
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="flex flex-col items-center justify-center h-full w-full"
        >
          <div className="flex flex-col items-center justify-center h-full w-full max-w-sm">
            <div className="flex flex-col w-full justify-center items-center gap-10 md:gap-10 lg:gap-14">
              <h1 className="flex flex-col gap-5 justify-center items-center w-full">
                {Icon && (
                  <span className="text-theme rounded-full p-5 bg-primary/20">
                    <Icon className="text-primary w-[36px] h-[36px] md:w-[40px] md:h-[40px]" />
                  </span>
                )}
                <span className="text-4xl lg:text-4xl w-full font-semibold">
                  {componentHeadline}
                </span>
              </h1>

              <div className="flex flex-col justify-center items-center gap-7 w-full">
                <FormField
                  control={form.control}
                  name={FirstRegisterName}
                  render={({ field }) => (
                    <FormItem className="flex flex-col items-center justify-center w-full max-w-md">
                      <FormLabel className="w-full">
                        <h1 className="w-full rounded-md text-white px-3 text-left text-base font-medium">
                          {FirstLabel}
                        </h1>
                      </FormLabel>
                      <FormControl>
                        {FirstRegisterName === "gymLogo" ? (
                          <UploadFile field={field} form={form} />
                        ) : (
                          <Input
                            type={FirstInputType}
                            placeholder={FirstInputPlaceholder}
                            className="mt-1 py-2 border rounded-lg w-full"
                            {...field}
                          />
                        )}
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name={SecondRegisterName}
                  render={({ field }) => (
                    <FormItem className="flex flex-col items-center justify-center w-full max-w-sm">
                      <FormLabel className="w-full">
                        <h1 className=" w-full rounded-md text-white px-3 text-left text-base font-medium">
                          {SecondLabel}
                        </h1>
                      </FormLabel>
                      <FormControl>
                        <Input
                          type={SecondInputType}
                          placeholder={SecondInputPlaceholder}
                          className="mt-1 py-2 border rounded-lg w-full"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
          </div>
        </motion.div>
      </form>
    </Form>
  );
};

export default OnboardingInput;
