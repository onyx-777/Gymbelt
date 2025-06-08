import { businessModel, businessType } from "@/data/business-type";

export type BusinessModelType = (typeof businessModel)[number];
export type BusinessType = (typeof businessType)[number];

export type CreateMerchantType = {
  merchant_id?: string; // Max 40 characters, Alphanumeric, Hyphen, Underscore allowed
  merchant_email: string;
  merchant_name: string;
  poc_phone: string;
  merchant_site_url: string;
  business_details: {
    business_legal_name: string;
    business_type: BusinessType;
    business_model: BusinessModelType;
  };
};
