import { z } from "zod";

export const gymInfoOnboardingSchema = z.object({
  gymName: z
    .string()
    .min(2, "Gym name must be at least 2 characters")
    .max(100, "Gym name must be less than 100 characters"),
  gymType: z
    .string()
    .min(2, "Gym type must be at least 2 characters")
    .max(100, "Gym type must be less than 100 characters"),
  gymAddress: z
    .string()
    .min(5, "Gym address must be at least 5 characters")
    .max(255, "Gym address must be less than 255 characters"),
  gymPhoneNumber: z
    .string()
    .length(10, "Gym phone number must be exactly 10 digits")
    .regex(/^\d{10}$/, "Gym phone number must be numeric"),
  gymEmail: z.string().email("Invalid email format"),

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

  gymLogo: z
    .string()
    .min(2, "Please upload a logo of your gym")
    .max(255, "Gym logo URL must be less than 255 characters")
    .url("Invalid URL format"),

  gymWebsite: z
    .string()
    .max(255, "Gym website must be less than 255 characters")
    .url("Invalid URL format")
    .optional(),

  slogan: z
    .string()
    .min(5, "Slogan must be at least 5 characters")
    .max(100, "Slogan must be less than 100 characters"),

  subdomain: z
    .string()
    .min(2, "Subdomain must be at least 2 characters")
    .max(50, "Subdomain must be less than 50 characters")
    .regex(
      /^[a-z0-9-]+$/,
      "Subdomain can only contain lowercase letters, numbers, and hyphens"
    ),
});
