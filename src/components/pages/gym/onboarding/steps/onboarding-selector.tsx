/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React from "react";
import { motion } from "framer-motion";
import { UseFormReturn } from "react-hook-form";
import { OnboardingFieldNames } from "@/types/onboarding";
import { Form, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { MultipleSelect } from "@/components/ui/multiple-select";
import useStore from "@/context/gym-registration/gym-setup-context";

interface Props {
  Icon?: React.ElementType;
  componentHeadline: React.ReactNode;
  label: string;
  registerName: OnboardingFieldNames;
  form: UseFormReturn<any>;
  onSubmit: (data: any) => void;
  list: readonly {
    id: number;
    name: string;
    description: string;
  }[];
}

const OnboardingSelector = ({
  Icon,
  componentHeadline,
  registerName,
  form,
  onSubmit,
  list,
}: Props) => {
  const { services, facilities } = useStore();
  // const handleSelectionChange = React.useCallback(
  //   (value: string[]) => {
  //     // Use a Set to ensure uniqueness of names
  //     const uniqueSelectedNames = Array.from(
  //       new Set(value.map((item) => item))
  //     );

  //     console.log("uniqueSelectedNames : ", uniqueSelectedNames);

  //     // Update form with the unique names
  //     form.setValue(registerName, uniqueSelectedNames, {
  //       shouldValidate: true,
  //     });
  //   },
  //   [form, registerName]
  // );

  console.log(
    "services in store : ",
    services,
    "facilities in store : ",
    facilities
  );

  const getServices = form.getValues(registerName);
  console.log("getServicesValue : ", getServices);

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="flex flex-col items-center justify-center max-h-fit w-full py-6 md:px-6"
    >
      <div className="w-full max-w-lg mx-auto">
        <div className="flex flex-col gap-0 -mb-10">
          <div className="text-center mb-8">
            {Icon && (
              <div className="inline-block p-3 md:p-4 bg-theme/20 rounded-full mb-4">
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
                  <FormItem className="w-full flex flex-col justify-center items-center">
                    <MultipleSelect
                      tags={list.map((item) => ({ name: item.name }))}
                      defaultValue={
                        field.value?.map((name: string) => ({ name })) || []
                      }
                      onChange={(selectedTags) => {
                        const names = selectedTags.map((tag) => tag.name);
                        console.log("in oboarding-selector onchange : ", names);
                        field.onChange(names);
                      }}
                    />
                    <FormMessage />
                  </FormItem>
                )}
              />
            </form>
          </Form>
        </div>
      </div>
    </motion.div>
  );
};

export default OnboardingSelector;
