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

import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import {
  Command,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandItem,
  CommandGroup,
} from "@/components/ui/command";

import { Button } from "@/components/ui/button";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { AllCities } from "@/data/cities";
import { businessModel, businessType } from "@/data/business-type";
import useStore from "@/context/gym-registration/gym-setup-context";

interface Props {
  Icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  componentHeadline: string | React.ReactNode;
  FirstLabel: string;
  FirstInputPlaceholder: string;
  FirstRegisterName: OnboardingFieldNames;
  SecondLabel?: string;
  SecondInputPlaceholder?: string;
  SecondRegisterName?: OnboardingFieldNames;
  form: UseFormReturn<any>;
  onSubmit: (data: any) => void;
  FirstInputType: React.HTMLInputTypeAttribute;
  SecondInputType?: React.HTMLInputTypeAttribute;
  step1?: boolean;
}

// Build city/state maps
const stateToCitiesMap: Record<string, string[]> = {};
const cityToStateMap: Record<string, string> = {};

AllCities.forEach(({ City, State }: { City: string; State: string }) => {
  if (!stateToCitiesMap[State]) stateToCitiesMap[State] = [];
  stateToCitiesMap[State].push(City);
  cityToStateMap[City] = State;
});
const allStates = Object.keys(stateToCitiesMap);

const OnboardingInput = ({
  FirstInputPlaceholder,
  FirstLabel,
  FirstRegisterName,
  SecondLabel,
  SecondInputPlaceholder,
  SecondRegisterName,
  componentHeadline,
  Icon,
  form,
  onSubmit,
  FirstInputType,
  SecondInputType,
  step1,
}: Props) => {
  const [selectedState, setSelectedState] = React.useState<string>("");
  const [filteredCities, setFilteredCities] = React.useState<string[]>([]);
  const [cityOpen, setCityOpen] = React.useState(false);
  const [stateOpen, setStateOpen] = React.useState(false);
  const [modelOpen, setModelOpen] = React.useState(false);
  const [typeOpen, setTypeOpen] = React.useState(false);

  const { step } = useStore();

  const setValue = form.setValue;
  const watch = form.watch;

  React.useEffect(() => {
    if (selectedState) {
      const cities = stateToCitiesMap[selectedState] || [];
      setFilteredCities([...new Set(cities)]);
      if (!cities.includes(watch("city"))) {
        setValue("city", "");
      }
    } else {
      setFilteredCities([]);
    }
  }, [selectedState, setValue, watch]);

  React.useEffect(() => {
    const city = watch("city");
    if (city && cityToStateMap[city]) {
      const inferredState = cityToStateMap[city];
      if (inferredState !== selectedState) {
        setSelectedState(inferredState);
        setValue("state", inferredState);
      }
    }
  }, [watch("city"), selectedState, setValue]);

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
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
                <span className="text-3xl lg:text-4xl w-full font-semibold">
                  {componentHeadline}
                </span>
              </h1>

              <div className="flex flex-col justify-center items-center gap-4 w-full">
                {/* First Input (Model Popover or Regular Input) */}
                <FormField
                  control={form.control}
                  name={FirstRegisterName}
                  render={({ field }) => (
                    <FormItem className="w-full max-w-sm">
                      <FormLabel className="w-full hidden">
                        {FirstLabel}
                      </FormLabel>
                      <FormControl>
                        {FirstRegisterName === "businessModel" ? (
                          <Popover open={modelOpen} onOpenChange={setModelOpen}>
                            <PopoverTrigger asChild>
                              <Button
                                variant="outline"
                                role="combobox"
                                className="w-full justify-between"
                              >
                                {field.value ? (
                                  <span className="w-full">{field.value}</span>
                                ) : (
                                  <span className="w-full text-muted-foreground">
                                    Select Business Model
                                  </span>
                                )}
                                <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                              </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-full p-0">
                              <Command>
                                <CommandInput placeholder="Search model..." />
                                <CommandList>
                                  <CommandEmpty>No model found.</CommandEmpty>
                                  <CommandGroup>
                                    {businessModel.map((model) => (
                                      <CommandItem
                                        key={model}
                                        value={model}
                                        onSelect={() => {
                                          field.onChange(model); // Updates the form field visually and logically
                                          setModelOpen(false); // Closes the popover
                                        }}
                                      >
                                        <Check
                                          className={cn(
                                            "mr-2 h-4 w-4",
                                            field.value === model
                                              ? "opacity-100"
                                              : "opacity-0"
                                          )}
                                        />
                                        {model}
                                      </CommandItem>
                                    ))}
                                  </CommandGroup>
                                </CommandList>
                              </Command>
                            </PopoverContent>
                          </Popover>
                        ) : FirstRegisterName === "gymLogo" ? (
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

                {/* Second Input (Type Popover or Regular Input) */}
                {SecondRegisterName &&
                  (SecondRegisterName === "businessType" ? (
                    <FormField
                      control={form.control}
                      name={"businessType"}
                      render={({ field }) => (
                        <FormItem className="w-full max-w-sm">
                          <FormLabel className="w-full hidden">
                            {SecondLabel}
                          </FormLabel>
                          <FormControl>
                            <Popover open={typeOpen} onOpenChange={setTypeOpen}>
                              <PopoverTrigger asChild>
                                <Button
                                  variant="outline"
                                  role="combobox"
                                  className="w-full justify-between"
                                >
                                  {field.value ? (
                                    <span className="w-full">
                                      {field.value}
                                    </span>
                                  ) : (
                                    <span className="w-full text-muted-foreground">
                                      Select Business Type
                                    </span>
                                  )}
                                  <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                </Button>
                              </PopoverTrigger>
                              <PopoverContent className="w-full p-0">
                                <Command>
                                  <CommandInput placeholder="Search type..." />
                                  <CommandList>
                                    <CommandEmpty>No type found.</CommandEmpty>
                                    <CommandGroup>
                                      {businessType.map((type) => (
                                        <CommandItem
                                          key={type}
                                          value={type}
                                          onSelect={() => {
                                            field.onChange(type); // ✅ This is the fix
                                            setTypeOpen(false);
                                          }}
                                        >
                                          <Check
                                            className={cn(
                                              "mr-2 h-4 w-4",
                                              field.value === type
                                                ? "opacity-100"
                                                : "opacity-0"
                                            )}
                                          />
                                          {type}
                                        </CommandItem>
                                      ))}
                                    </CommandGroup>
                                  </CommandList>
                                </Command>
                              </PopoverContent>
                            </Popover>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  ) : (
                    <FormField
                      control={form.control}
                      name={SecondRegisterName}
                      rules={
                        step === 6
                          ? {
                              validate: (value: string) => {
                                if (!value || value.trim() === "") return true; // allow blank
                                try {
                                  new URL(
                                    value.startsWith("http")
                                      ? value
                                      : `https://${value}`
                                  );
                                  return true;
                                } catch {
                                  return "Please enter a valid website URL.";
                                }
                              },
                            }
                          : {}
                      }
                      render={({ field }) => (
                        <FormItem className="w-full max-w-sm">
                          <FormLabel className="w-full hidden">
                            {SecondLabel}
                          </FormLabel>
                          <FormControl>
                            <Input
                              type={SecondInputType || "text"}
                              placeholder={SecondInputPlaceholder}
                              className="mt-1 py-2 border rounded-lg w-full"
                              // disabled={step === 3}
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  ))}

                {/* Step 1 Address Details */}
                {step1 && (
                  <>
                    <FormField
                      control={form.control}
                      name="streetAddress"
                      render={({ field }) => (
                        <FormItem className="w-full max-w-sm">
                          <FormLabel className="sr-only">
                            Street Address
                          </FormLabel>
                          <FormControl>
                            <Input
                              type="text"
                              placeholder="Street Address"
                              className="mt-1 py-2 border rounded-lg w-full"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="flex justify-center items-center w-full gap-3">
                      <FormField
                        control={form.control}
                        name="state"
                        render={({ field }) => (
                          <FormItem className="w-1/2">
                            <FormLabel className="sr-only">State</FormLabel>
                            <FormControl>
                              <Popover
                                open={stateOpen}
                                onOpenChange={setStateOpen}
                              >
                                <PopoverTrigger asChild>
                                  <Button
                                    variant="outline"
                                    role="combobox"
                                    className="w-full justify-between"
                                  >
                                    {field.value ? (
                                      <span className="w-full">
                                        {field.value}
                                      </span>
                                    ) : (
                                      <span className="w-full text-muted-foreground">
                                        Select State
                                      </span>
                                    )}
                                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                  </Button>
                                </PopoverTrigger>
                                <PopoverContent className="w-full p-0">
                                  <Command>
                                    <CommandInput placeholder="Search state..." />
                                    <CommandList>
                                      <CommandEmpty>
                                        No state found.
                                      </CommandEmpty>
                                      <CommandGroup>
                                        {allStates.map((state) => (
                                          <CommandItem
                                            key={state}
                                            value={state}
                                            onSelect={(value) => {
                                              setValue("state", value);
                                              setSelectedState(value);
                                              setStateOpen(false);
                                            }}
                                          >
                                            <Check
                                              className={cn(
                                                "mr-2 h-4 w-4",
                                                field.value === state
                                                  ? "opacity-100"
                                                  : "opacity-0"
                                              )}
                                            />
                                            {state}
                                          </CommandItem>
                                        ))}
                                      </CommandGroup>
                                    </CommandList>
                                  </Command>
                                </PopoverContent>
                              </Popover>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="city"
                        render={({ field }) => (
                          <FormItem className="w-1/2">
                            <FormLabel className="sr-only">City</FormLabel>
                            <FormControl>
                              <Popover
                                open={cityOpen}
                                onOpenChange={setCityOpen}
                              >
                                <PopoverTrigger asChild>
                                  <Button
                                    variant="outline"
                                    role="combobox"
                                    className="w-full justify-between"
                                  >
                                    {field.value ? (
                                      <span className="w-full">
                                        {field.value}
                                      </span>
                                    ) : (
                                      <span className="w-full text-muted-foreground">
                                        Select City
                                      </span>
                                    )}
                                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                  </Button>
                                </PopoverTrigger>
                                <PopoverContent className="w-full p-0">
                                  <Command>
                                    <CommandInput placeholder="Search city..." />
                                    <CommandList>
                                      <CommandEmpty>
                                        No city found.
                                      </CommandEmpty>
                                      <CommandGroup>
                                        {filteredCities.map((city) => (
                                          <CommandItem
                                            key={city}
                                            value={city}
                                            onSelect={(value) => {
                                              setValue("city", value);
                                              const inferredState =
                                                cityToStateMap[value];
                                              if (
                                                inferredState &&
                                                inferredState !== selectedState
                                              ) {
                                                setSelectedState(inferredState);
                                                setValue(
                                                  "state",
                                                  inferredState
                                                );
                                              }
                                              setCityOpen(false);
                                            }}
                                          >
                                            <Check
                                              className={cn(
                                                "mr-2 h-4 w-4",
                                                field.value === city
                                                  ? "opacity-100"
                                                  : "opacity-0"
                                              )}
                                            />
                                            {city}
                                          </CommandItem>
                                        ))}
                                      </CommandGroup>
                                    </CommandList>
                                  </Command>
                                </PopoverContent>
                              </Popover>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="pinCode"
                      render={({ field }) => (
                        <FormItem className="w-full max-w-sm">
                          <FormLabel className="sr-only">Pin Code</FormLabel>
                          <FormControl>
                            <Input
                              type="number"
                              placeholder="Pin Code"
                              className="mt-1 py-2 border rounded-lg w-full"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </form>
    </Form>
  );
};

export default OnboardingInput;
