import { z } from "zod";

// Personal Information Schema

export const GymBasicInfoSchema = z.object({
  gymName: z.string().min(1, "Gym name is required"),
  gymType: z.string().min(1, "Gym type is required"),
  gymAddress: z.string().min(1, "Address is required"),
  gymPhoneNumber: z.string().min(1, "Phone number is required"),
  gymEmail: z.string().email("Invalid email address"),
});

export const GymBrandingSchema = z.object({
  gymLogo: z.string().optional(),
  gymWebsite: z.string().url("Invalid URL").optional(),
  slogan: z.string().optional(),
  subdomain: z.string().min(1, "Subdomain is required"),
});

export type GymBasicInfo = z.infer<typeof GymBasicInfoSchema>;
export type GymBranding = z.infer<typeof GymBrandingSchema>;

// Additional Gym Information Schema
const GymAdditionalInfoSchema = z.object({
  gymWebsite: z
    .string()
    .max(255, "Gym website must be less than 255 characters")
    .url("Invalid URL format")
    .optional(),
  gymGSTNumber: z
    .string()
    .min(15, "GST number must be exactly 15 characters")
    .max(15, "GST number must be exactly 15 characters")
    .regex(/^\d{15}$/, "GST number must be numeric")
    .optional(),
  gymLicenseNumber: z
    .string()
    .min(5, "License number must be at least 5 characters")
    .max(50, "License number must be less than 50 characters")
    .optional(),
});

// Combine all schemas into a single validation schema
const RegistrationSchema = z.object({
  step: z
    .number()
    .min(1, "Step must be at least 1")
    .max(10, "Step must not exceed 10"),
  gymInfo: GymBasicInfoSchema,
  brandingInfo: GymBrandingSchema, // Add branding info
  additionalInfo: GymAdditionalInfoSchema,
});

export { GymAdditionalInfoSchema, RegistrationSchema };
