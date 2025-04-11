import { z } from "zod";

// 1. **Gym Name and Address Schema**:
export const gymNameAddressSchema = z.object({
  gymName: z
    .string()
    .min(2, "Gym name must be at least 2 characters")
    .max(100, "Gym name must be less than 100 characters"),
  gymAddress: z
    .string()
    .min(5, "Gym address must be at least 5 characters")
    .max(255, "Gym address must be less than 255 characters"),
});

// 2. **Gym Type Schema**:
export const gymTypeSchema = z.object({
  gymType: z
    .string()
    .min(2, "Gym type must be at least 2 characters")
    .max(100, "Gym type must be less than 100 characters"),
});

// 3. **Phone and Email Schema**:
export const phoneEmailSchema = z.object({
  gymPhoneNumber: z
    .string()
    .min(10, "Phone number must be at least 10 digits")
    .max(15, "Phone number must be less than 15 digits")
    .refine((val) => !isNaN(Number(val)), {
      message: "Phone number must contain only digits",
    }),
  gymEmail: z.string().email("Invalid email format"),
});

// 4. **Logo and Website Schema (Optional)**:
export const logoWebsiteSchema = z.object({
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
});

// 5. **Slogan and Subdomain Schema**:
export const sloganSubdomainSchema = z.object({
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

// 6. **License Number and GST Number Schema**:
export const licenseGSTSchema = z.object({
  gymLicenseNumber: z
    .string()
    .min(5, "License number must be at least 5 characters")
    .max(50, "License number must be less than 50 characters")
    .optional(),
  gymGSTNumber: z
    .string()
    .min(15, "GST number must be exactly 15 characters")
    .max(15, "GST number must be exactly 15 characters")
    .regex(/^\d{15}$/, "GST number must be numeric")
    .optional(),
});

// 7. **Services Schema**:
export const servicesSchema = z.object({
  services: z
    .array(z.string())
    .min(1, { message: "At least 1 services are required." }),
});

// 8. **Facilities Schema**:
export const facilitiesSchema = z.object({
  facilities: z
    .array(z.string())
    .min(1, { message: "At least 1 facilities are required." }),
});

// 9. **Membership Schema**:
export const membershipSchema = z.object({
  planName: z
    .string()
    .min(1, "Plan name is required")
    .max(100, "Plan name must be less than 100 characters")
    .optional(), // Making this field optional

  services: z
    .array(z.string())
    .min(1, "At least one service is required")
    .max(10, "You can provide up to 10 services")
    .optional(), // Making this field optional

  facilities: z
    .array(z.string())
    .min(1, "At least one facility is required")
    .max(10, "You can provide up to 10 facilities")
    .optional(), // Making this field optional

  duration: z.enum(["1-Month", "3-Month", "6-Month", "12-Month"]).optional(), // Making this field optional

  price: z
    .string()
    .min(0, "Price must be greater than or equal to 0")
    .max(10000, "Price must be less than or equal to 10000")
    .refine((val) => !isNaN(Number(val)), {
      message: "Price must be a valid number",
    })
    .optional(), // Making this field optional
});
// 10. **Payment Schema**:
export const paymentSchema = z.object({
  payment: z
    .string()
    .min(5, "Payment details must be at least 5 characters")
    .max(500, "Payment details must be less than 500 characters"),
});
