"use client";

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
import { z } from "zod";
import { GymBrandingSchema } from "@/schemas/gym-registration"; // Make sure to import GymBranding schema
import UploadFile from "@/components/global/image-upload";
import { UseFormReturn } from "react-hook-form";

export function GymBrandingInfo({
  form,
  onSubmit,
}: {
  form: UseFormReturn<z.infer<typeof GymBrandingSchema>>;
  onSubmit: (data: z.infer<typeof GymBrandingSchema>) => void;
}) {
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="space-y-8 p-2">
          <FormField
            control={form.control}
            name="gymLogo"
            render={({ field }) => (
              <FormItem className="relative">
                <FormLabel>Gym Logo URL</FormLabel>
                <FormControl>
                  <UploadFile field={field} form={form} />
                </FormControl>
                <FormDescription className="hidden xl:block text-left">
                  This is the URL of your gym&apos;s logo.
                </FormDescription>
                <div className="absolute -bottom-6 w-full">
                  <FormMessage className="text-red-500 mt-1" />
                </div>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="gymWebsite"
            render={({ field }) => (
              <FormItem className="relative">
                <FormLabel>Gym Website</FormLabel>
                <FormControl>
                  <Input placeholder="Your gym's website URL" {...field} />
                </FormControl>
                <FormDescription className="text-left">
                  Enter the website link if available
                </FormDescription>
                <div className="absolute -bottom-6 w-full">
                  <FormMessage className="text-red-500 mt-1" />
                </div>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="slogan"
            render={({ field }) => (
              <FormItem className="relative">
                <FormLabel>Gym Slogan</FormLabel>
                <FormControl>
                  <Input placeholder="Your gym's slogan" {...field} />
                </FormControl>
                <FormDescription className="text-left">
                  This is the slogan of your gym&apos;s.
                </FormDescription>
                <div className="absolute -bottom-6 w-full">
                  <FormMessage className="text-red-500 mt-1" />
                </div>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="subdomain"
            render={({ field }) => (
              <FormItem className="relative">
                <FormLabel>Subdomain</FormLabel>
                <FormControl>
                  <Input placeholder="your-gym" {...field} />
                </FormControl>
                <FormDescription className="text-left">
                  This will be part of your gym&apos;s unique URL (e.g.,
                  your-gym.gymbelt.com).
                </FormDescription>
                <div className="absolute -bottom-6 w-full">
                  <FormMessage className="text-red-500 mt-1" />
                </div>
              </FormItem>
            )}
          />
        </div>
        <button type="submit" className="hidden" />
      </form>
    </Form>
  );
}
