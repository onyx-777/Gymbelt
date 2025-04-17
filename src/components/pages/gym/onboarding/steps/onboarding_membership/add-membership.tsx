/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { Button } from "@/components/ui/button";
import {
  DialogHeader,
  DialogFooter,
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Plus } from "lucide-react";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form"; // Import Form components
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { SelectFacilitiesServices } from "./select-facilities-services";
import useStore from "@/context/gym-registration/gym-setup-context";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ScrollArea } from "@/components/ui/scroll-area";
import { membershipSchema } from "@/schemas/onboarding";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { useRef } from "react";
import { OnboardingMembershipType } from "@/types/onboarding";

interface Props {
  stateMemberships: OnboardingMembershipType[];
  setStateMemberships: React.Dispatch<OnboardingMembershipType[]>;
}

export function AddMembership({
  setStateMemberships,
  stateMemberships,
}: Props) {
  const { services, facilities } = useStore();

  console.log(
    "in add membership ---> services : ",
    services,
    "facilities : ",
    facilities
  );

  // Define the form with react-hook-form and Zod resolver
  const form = useForm<z.infer<typeof membershipSchema>>({
    resolver: zodResolver(membershipSchema),
    defaultValues: {
      planName: "", // Set the default value for planName
      services: [], // Set the default value for services (empty array)
      facilities: [], // Set the default value for facilities (empty array)
      duration: "1-Month" as const, // Set the default value for duration
      price: "", // Set the default value for price
    },
  });

  const dialogCloseRef = useRef<HTMLButtonElement>(null);

  // Handle form submission
  const onSubmit = (data: z.infer<typeof membershipSchema>) => {
    console.log("membership form submit : ", data);
    // Handle updating the membership state in the store
    // const updatedMembership = {
    //   planName: data.planName,
    //   services: data.services,
    //   facilities: data.facilities,
    //   duration: data.duration,
    //   price: data.price,
    // };

    // const uniqueMembership = [filteredMemberships];

    if (!data) {
      toast.error("Something went wrong", {
        description: "Error with value you entered",
      });
    }

    const exists = stateMemberships.some(
      (m) =>
        m.planName.trim().toLowerCase() === data?.planName?.trim().toLowerCase()
    );
    if (exists) {
      toast.error("Memebership Already Exist", {
        description: `Membership with name "${data.planName}" already exist`,
      });
    }

    // If it doesn't exist, add it
    if (!exists) {
      setStateMemberships([
        ...stateMemberships,
        {
          planName: data.planName || "",
          services: data.services || [],
          facilities: data.facilities || [],
          duration: data.duration || "1-Month",
          price: data.price || "",
        } as OnboardingMembershipType,
      ]);
      toast.success("Membership Created", {
        description: `Your ${data.planName} plan created successfully`,
      });
      // Programmatically click the close button
      dialogCloseRef.current?.click();
      console.log("New membership added:", data);
    } else {
      console.warn("Membership with that plan name already exists.");
    }

    // console.log("membership Info Stored:", getCompleteData().membership);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="flex flex-col gap-3 w-full h-full text-muted-foreground tracking-wider aspect-square items-center justify-center">
          <Plus />
          Add Membership
        </div>
      </DialogTrigger>
      <DialogContent className="flex flex-col gap-0 p-0 sm:max-h-[min(640px,80vh)] sm:max-w-lg [&>button:last-child]:hidden">
        <ScrollArea className="h-[80vh] scroll-smooth">
          <DialogHeader className="contents space-y-0 text-left">
            <DialogTitle className="p-4 w-full text-center bg-muted rounded-t-2xl">
              Add Membership Plan
            </DialogTitle>
            <DialogDescription asChild>
              <div className="p-6">
                <div className="space-y-4 [&_strong]:font-semibold [&_strong]:text-foreground">
                  {/* Replace the specific div with form field */}
                  <div className="space-y-1">
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
                              <div className="flex flex-col justify-center items-center gap-7 w-full">
                                <FormField
                                  control={form.control}
                                  name={"planName"}
                                  render={({ field }) => (
                                    <FormItem className="flex flex-col items-center justify-center w-full max-w-md">
                                      <FormLabel className="w-full">
                                        <h1 className="w-full rounded-md text-primary px-3 text-left text-sm font-medium">
                                          Plan Name
                                        </h1>
                                      </FormLabel>
                                      <FormControl>
                                        <Input
                                          type={"text"}
                                          placeholder={"Name your plan"}
                                          className="mt-1 py-2 border rounded-lg w-full"
                                          {...field}
                                        />
                                      </FormControl>
                                      <FormMessage />
                                    </FormItem>
                                  )}
                                />
                                <FormField
                                  control={form.control}
                                  name={"services"}
                                  render={({ field }) => (
                                    <FormItem className="flex flex-col items-center justify-center w-full max-w-sm">
                                      <FormLabel className="w-full">
                                        <h1 className=" w-full rounded-md text-primary px-3 text-left text-sm font-medium">
                                          Select services this plan would have
                                        </h1>
                                      </FormLabel>
                                      <FormControl>
                                        <SelectFacilitiesServices
                                          componentFor="services"
                                          list={services.services}
                                          field={{
                                            ...field,
                                            value: field.value || [],
                                          }}
                                        />
                                      </FormControl>
                                      <FormMessage />
                                    </FormItem>
                                  )}
                                />
                                <FormField
                                  control={form.control}
                                  name={"facilities"}
                                  render={({ field }) => (
                                    <FormItem className="flex flex-col items-center justify-center w-full max-w-sm">
                                      <FormLabel className="w-full">
                                        <h1 className=" w-full rounded-md text-primary px-3 text-left text-sm font-medium">
                                          Select Facilities this plan would have
                                        </h1>
                                      </FormLabel>
                                      <FormControl>
                                        <SelectFacilitiesServices
                                          componentFor="facilities"
                                          list={facilities.facilities}
                                          field={{
                                            ...field,
                                            value: field.value || [],
                                          }}
                                        />
                                      </FormControl>
                                      <FormMessage />
                                    </FormItem>
                                  )}
                                />
                                <FormField
                                  control={form.control}
                                  name={"duration"}
                                  render={({ field }) => (
                                    <FormItem className="flex flex-col items-center justify-center w-full max-w-sm">
                                      <FormLabel className="w-full">
                                        <h1 className=" w-full rounded-md text-primary px-3 text-left text-sm font-medium">
                                          Select plan duration
                                        </h1>
                                      </FormLabel>
                                      <FormControl>
                                        <Select
                                          onValueChange={(value) =>
                                            field.onChange(value)
                                          }
                                          required
                                        >
                                          <SelectTrigger>
                                            <SelectValue placeholder="Select Plan Duration..." />
                                          </SelectTrigger>
                                          <SelectContent>
                                            <SelectItem value="1-Month">
                                              1-Month
                                            </SelectItem>
                                            <SelectItem value="3-Month">
                                              3-Month
                                            </SelectItem>
                                            <SelectItem value="6-Month">
                                              6-Month
                                            </SelectItem>
                                            <SelectItem value="12-Month">
                                              12-Month
                                            </SelectItem>
                                          </SelectContent>
                                        </Select>
                                      </FormControl>
                                      <FormMessage />
                                    </FormItem>
                                  )}
                                />
                                <FormField
                                  control={form.control}
                                  name={"price"}
                                  render={({ field }) => (
                                    <FormItem className="flex flex-col items-center justify-center w-full max-w-md">
                                      <FormLabel className="w-full">
                                        <h1 className="w-full rounded-md text-primary px-3 text-left text-sm font-medium">
                                          Plan Price
                                        </h1>
                                      </FormLabel>
                                      <FormControl>
                                        <Input
                                          type={"text"}
                                          placeholder={"Membership cost"}
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
                        <DialogFooter className="px-6 mt-4 pb-6 w-full space-y-3">
                          <DialogClose asChild>
                            <Button
                              type="button"
                              variant="outline"
                              className="w-full"
                            >
                              Cancel
                            </Button>
                          </DialogClose>
                          <DialogClose
                            ref={dialogCloseRef}
                            className="hidden"
                          />
                          <Button
                            onClick={form.handleSubmit(onSubmit)}
                            type="submit"
                            className="w-full mb-2"
                          >
                            Okay
                          </Button>
                        </DialogFooter>
                      </form>
                    </Form>
                  </div>
                </div>
              </div>
            </DialogDescription>
          </DialogHeader>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
