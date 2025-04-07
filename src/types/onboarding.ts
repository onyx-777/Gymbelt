import { GymBasicInfoSchema } from "@/schemas/gym-registration";
import { gymInfoOnboardingSchema } from "@/schemas/onboarding";
import { z } from "zod";

export type GymInfoOnboardingSchemaType = z.infer<
  typeof gymInfoOnboardingSchema
>;

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
};

export type OnboardingFieldNames = keyof OnboardingFields;

export type GymBasicInfo = z.infer<typeof GymBasicInfoSchema>;
