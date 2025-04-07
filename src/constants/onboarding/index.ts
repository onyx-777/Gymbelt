import { OnboardingFieldNames } from "@/types/onboarding";

interface OnboardingFieldNamesType {
  step: number;
  fieldName: OnboardingFieldNames;
  placeholder?: string; // Optional placeholder for each field
}

export const OnboardingFields: OnboardingFieldNamesType[] = [
  {
    step: 1,
    fieldName: "gymName",
    placeholder: "Enter your Gym Name",
  },
  {
    step: 2,
    fieldName: "gymType",
    placeholder: "Enter your Gym Type",
  },
  {
    step: 3,
    fieldName: "gymAddress",
    placeholder: "Enter your Gym Address",
  },
  {
    step: 4,
    fieldName: "gymPhoneNumber",
    placeholder: "Enter your Gym Phone Number",
  },
  {
    step: 5,
    fieldName: "gymEmail",
    placeholder: "Enter your Gym Email",
  },
  {
    step: 6,
    fieldName: "gymGSTNumber",
    placeholder: "Enter your GST Number",
  },
  {
    step: 7,
    fieldName: "gymLicenseNumber",
    placeholder: "Enter your Gym License Number",
  },
  {
    step: 8,
    fieldName: "gymLogo",
    placeholder: "Enter your Gym Logo URL",
  },
  {
    step: 9,
    fieldName: "gymWebsite",
    placeholder: "Enter your Gym Website URL",
  },
  {
    step: 10,
    fieldName: "slogan",
    placeholder: "Enter your Gym Slogan",
  },
  {
    step: 11,
    fieldName: "subdomain",
    placeholder: "Enter your Gym Subdomain",
  },
];
