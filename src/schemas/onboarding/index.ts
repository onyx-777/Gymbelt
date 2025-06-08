import { z } from "zod";

// 1. **Gym Name and Address Schema**:
export const gymNameAddressSchema = z.object({
  gymName: z
    .string()
    .min(2, "Gym name must be at least 2 characters")
    .max(100, "Gym name must be less than 100 characters"),
  streetAddress: z
    .string()
    .min(5, "Street address must be at least 5 characters")
    .max(255, "Street address must be less than 255 characters"),
  city: z
    .string()
    .min(2, "City must be at least 2 characters")
    .max(100, "City must be less than 100 characters"),
  state: z
    .string()
    .min(2, "State must be at least 2 characters")
    .max(100, "State must be less than 100 characters"),
  pinCode: z
    .string()
    .min(4, "Pin code must be at least 4 characters")
    .max(10, "Pin code must be less than 10 characters"),
});

// 2. **Gym Type Schema**:
export const gymTypeSchema = z.object({
  gymType: z
    .string()
    .min(2, "Gym type must be at least 2 characters")
    .max(100, "Gym type must be less than 100 characters"),
});

export const businessTypeandModelSchema = z.object({
  businessType: z
    .string()
    .min(2, "Business type must be selected")
    .max(100, "Business type must be less than 100 characters"),
  businessModel: z
    .string()
    .min(2, "Business model must be selected")
    .max(100, "Business model must be less than 100 characters"),
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
    .optional()
    .refine(
      (val) => !val || z.string().url().safeParse(val).success,
      "Invalid URL format"
    ),
});

// 5. **Slogan and Subdomain Schema**:
export const sloganSubdomainSchema = z.object({
  slogan: z
    .string()
    .min(5, "Slogan must be at least 5 characters")
    .max(100, "Slogan must be less than 100 characters"),
  subdomain: z
    .string()
    .min(1, "Subdomain must be at least 1 characters")
    .max(10, "Subdomain must be less than 10 characters")
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
    .max(100, "Plan name must be less than 100 characters"),

  services: z
    .array(z.string())
    .min(1, "At least one service is required")
    .max(10, "You can provide up to 10 services"),
  facilities: z
    .array(z.string())
    .min(1, "At least one facility is required")
    .max(10, "You can provide up to 10 facilities"),
  duration: z.enum(["1-Month", "3-Month", "6-Month", "12-Month"]),

  price: z
    .string()
    .min(1, "Price is required")
    .refine((val) => !isNaN(Number(val)), {
      message: "Price must be a valid number",
    }),
});

// 👇 Wrap the above schema in an array to accept multiple memberships
export const membershipsSchema = z
  .array(membershipSchema)
  .min(1, { message: "At least one membership plan is required." });

// 10. **Payment Schema**:
// export const paymentSchema = z.object({
//   payment: z
//     .string()
//     .min(5, "Payment details must be at least 5 characters")
//     .max(500, "Payment details must be less than 500 characters"),
// });

export const gymOnboardingSchema = z.object({
  gymNameAddress: gymNameAddressSchema,
  gymType: gymTypeSchema,
  phoneEmail: phoneEmailSchema,
  logoWebsite: logoWebsiteSchema,
  sloganSubdomain: sloganSubdomainSchema,
  licenseGST: licenseGSTSchema,
  services: servicesSchema,
  facilities: facilitiesSchema,
  memberships: membershipsSchema,
  gymBusinessTypeModel: businessTypeandModelSchema,
  // payment: paymentSchema,
});

export type GymOnboardingSchemaType = z.infer<typeof gymOnboardingSchema>;
