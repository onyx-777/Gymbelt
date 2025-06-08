import { GymBasicInfoSchema } from "@/schemas/gym-registration";
import {
  businessTypeandModelSchema,
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
  streetAddress: string;
  city: string;
  state: string;
  pinCode: string;
  gymType: string;
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
  gymMembership: OnboardingMembershipType[];
  businessModel: string;
  businessType: string;
};

// Define a union type of all form returns (for different onboarding steps)
export type OnboardingFormTypes =
  | UseFormReturn<z.infer<typeof gymNameAddressSchema>> // For gym name and address
  | UseFormReturn<z.infer<typeof gymTypeSchema>> // For gym type
  | UseFormReturn<z.infer<typeof phoneEmailSchema>> // For phone and email
  | UseFormReturn<z.infer<typeof logoWebsiteSchema>> // For logo and website
  | UseFormReturn<z.infer<typeof sloganSubdomainSchema>> // For slogan and subdomain
  | UseFormReturn<z.infer<typeof licenseGSTSchema>> // For license and GST numbers
  | UseFormReturn<z.infer<typeof servicesSchema>> // For services
  | UseFormReturn<z.infer<typeof facilitiesSchema>> // For facilities
  | UseFormReturn<z.infer<typeof membershipSchema>> // For a single membership
  | UseFormReturn<z.infer<typeof businessTypeandModelSchema>>; // For model and type details

// A utility type that will help in extracting field names from OnboardingFields
export type OnboardingFieldNames = keyof OnboardingFields;

// Inferred type for the basic gym information schema
export type GymBasicInfo = z.infer<typeof GymBasicInfoSchema>;

// Membership structure (used in OnboardingFields.gymMembership)
export type OnboardingMembershipType = {
  planName: string;
  services: string[];
  facilities: string[];
  duration: "1-Month" | "3-Month" | "6-Month" | "12-Month";
  price: string;
};
