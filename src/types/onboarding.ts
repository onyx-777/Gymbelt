// types/onboarding.ts

import { GymBasicInfoSchema } from "@/schemas/gym-registration";
import {
  facilitiesSchema,
  gymNameAddressSchema,
  gymTypeSchema,
  licenseGSTSchema,
  logoWebsiteSchema,
  membershipSchema,
  phoneEmailSchema,
  servicesSchema,
  sloganSubdomainSchema,
} from "@/schemas/onboarding";
import { UseFormReturn } from "react-hook-form";
import { z } from "zod";

// Define the fields for the entire onboarding process
export type OnboardingFields = {
  gymName: string;
  gymType: string;
  gymAddress: string;
  gymEmail: string;
  gymPhoneNumber: string;
  gymGSTNumber: string;
  gymLicenseNumber: string;
  gymLogo: string;
  gymWebsite: string;
  slogan: string;
  subdomain: string;
  services: string[];
  facilities: string[];
  gymMembership: string[];
};

// Define a union type of all form returns (for different onboarding steps)
export type OnboardingFormTypes =
  | UseFormReturn<z.infer<typeof gymNameAddressSchema>> // For gym name and address
  | UseFormReturn<z.infer<typeof gymTypeSchema>> // For gym type
  | UseFormReturn<z.infer<typeof phoneEmailSchema>> // For phone and email
  | UseFormReturn<z.infer<typeof logoWebsiteSchema>> // For logo and website (optional)
  | UseFormReturn<z.infer<typeof sloganSubdomainSchema>> // For slogan and subdomain
  | UseFormReturn<z.infer<typeof licenseGSTSchema>> // For license and GST numbers
  | UseFormReturn<z.infer<typeof servicesSchema>> // For services
  | UseFormReturn<z.infer<typeof facilitiesSchema>> // For facilities
  | UseFormReturn<z.infer<typeof membershipSchema>>; // For membership details

// A utility type that will help in extracting field names from OnboardingFields
export type OnboardingFieldNames = keyof OnboardingFields;

// Inferred type for the basic gym information schema
export type GymBasicInfo = z.infer<typeof GymBasicInfoSchema>;

export type OnboardingMembershipType = {
  planName: string;
  services: string[];
  facilities: string[];
  duration: "1-Month" | "3-Month" | "6-Month" | "12-Month";
  price: string;
};
