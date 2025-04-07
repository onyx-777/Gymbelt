"use client";

import { UseFormReturn } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { GymBasicInfo } from "@/types/onboarding";

export function GymOwnerInfo({
  form,
  userEmail,
  onSubmit,
}: {
  form: UseFormReturn<GymBasicInfo>;
  userEmail: string;
  onSubmit: (data: GymBasicInfo) => void;
}) {
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 p-2">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <FormField
            control={form.control}
            name="gymName"
            render={({ field }) => (
              <FormItem className="relative">
                <FormLabel>Gym Name</FormLabel>
                <FormControl>
                  <Input placeholder="Your Gym Name" {...field} />
                </FormControl>
                <FormDescription className="hidden xl:block text-left">
                  This is the name of your gym.
                </FormDescription>
                <FormMessage className="text-red-500 mt-1" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="gymType"
            render={({ field }) => (
              <FormItem className="relative">
                <FormLabel>Gym Type</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Fitness Center, Yoga Studio, etc."
                    {...field}
                  />
                </FormControl>
                <FormDescription className="hidden xl:block text-left">
                  This is the type of gym you own.
                </FormDescription>
                <FormMessage className="text-red-500 mt-1" />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="gymAddress"
          render={({ field }) => (
            <FormItem className="relative">
              <FormLabel>Location</FormLabel>
              <FormControl>
                <Input placeholder="Address of the gym" {...field} />
              </FormControl>
              <FormDescription className="hidden xl:block text-left">
                This is the gym&apos;s location.
              </FormDescription>
              <FormMessage className="text-red-500 mt-1" />
            </FormItem>
          )}
        />

        <div className="flex flex-col lg:flex-row justify-between items-center gap-8 w-full">
          <FormField
            control={form.control}
            name="gymEmail"
            render={({ field }) => (
              <FormItem className="relative w-full">
                <FormLabel>Gym Email</FormLabel>
                <FormControl>
                  <Input placeholder="contact@gym.com" {...field} />
                </FormControl>
                <FormDescription className="hidden xl:block text-left">
                  This is the gym&apos;s email address.
                </FormDescription>
                <FormMessage className="text-red-500 mt-1" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="gymPhoneNumber"
            render={({ field }) => (
              <FormItem className="relative w-full">
                <FormLabel>Gym Phone</FormLabel>
                <FormControl>
                  <Input placeholder="1234567890" type="number" {...field} />
                </FormControl>
                <FormDescription className="hidden xl:block text-left">
                  This is the gym&apos;s contact phone number.
                </FormDescription>
                <FormMessage className="text-red-500 mt-1" />
              </FormItem>
            )}
          />
        </div>
        <div className="space-y-2">
          <Label>Email</Label>
          <Input placeholder={userEmail} disabled />
          <p className="text-sm text-muted-foreground">
            This is the email you used to sign up and cannot be changed. It will
            be used to create your gym account.
          </p>
        </div>
      </form>
    </Form>
  );
}
