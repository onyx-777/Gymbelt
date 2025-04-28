/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React from "react";
import { motion } from "framer-motion";
import { UseFormReturn } from "react-hook-form";
import { OnboardingFieldNames } from "@/types/onboarding";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Form, FormField, FormItem } from "@/components/ui/form";

interface Props {
  Componentfor: string;
  Icon?: React.ElementType;
  componentHeadline: React.ReactNode;
  label: string;
  registerName: OnboardingFieldNames;
  form: UseFormReturn<any>;
  onSubmit: (data: any) => void;
  list: readonly any[];
}

const OnboardingRadio = ({
  Icon,
  componentHeadline,
  registerName,
  form,
  onSubmit,
  list,
}: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="flex flex-col items-center justify-center max-h-fit w-full py-6 md:px-6"
    >
      <div className="w-full max-w-lg mx-auto ">
        <div className="flex flex-col gap-5">
          <div className="text-center mb-8">
            {Icon && (
              <div className="inline-block p-3 md:p-4 bg-primary/20 rounded-full mb-4">
                <Icon className="w-8 h-8 md:w-10 md:h-10 text-theme" />
              </div>
            )}
            <h1 className="text-3xl lg:text-4xl font-semibold">
              {componentHeadline}
            </h1>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <FormField
                control={form.control}
                name={registerName}
                render={({ field }) => (
                  <FormItem>
                    <RadioGroup
                      className="flex w-full flex-wrap gap-4 justify-center items-center"
                      onValueChange={field.onChange}
                      value={field.value}
                    >
                      {list.map(({ id, name }) => (
                        <div
                          key={id}
                          className="relative flex flex-col gap-2 w-40 h-10 flex-wrap items-center justify-center p-4 rounded-lg transition-colors cursor-pointer"
                        >
                          <RadioGroupItem
                            value={name}
                            id={`${id}-1`}
                            className="absolute w-full h-full"
                          />
                          <div className="flex flex-col gap-1">
                            <Label
                              htmlFor={`${id}-1`}
                              className="text-base font-medium cursor-pointer"
                            >
                              {name}
                            </Label>
                          </div>
                        </div>
                      ))}
                    </RadioGroup>{" "}
                    {/* <FormMessage /> */}
                  </FormItem>
                )}
              />
            </form>
          </Form>

          <fieldset className="space-y-4 -mr-10"></fieldset>
        </div>
      </div>
    </motion.div>
  );
};

export default OnboardingRadio;
