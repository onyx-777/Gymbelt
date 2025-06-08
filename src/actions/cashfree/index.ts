"use server";

import { CreateMerchantType } from "@/types/cashfree";
import { clerkClient, currentUser } from "@clerk/nextjs/server";

export async function createPaymentSession(formData: {
  name: string;
  email: string;
  phone: string;
  amount: string;
}) {
  const orderData = {
    orderId: "order_" + Date.now(),
    amount: formData.amount,
    customerName: formData.name,
    customerEmail: formData.email,
    customerPhone: formData.phone,
  };

  try {
    const response = await fetch("https://sandbox.cashfree.com/pg/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-client-id": process.env.CASHFREE_APP_ID as string,
        "x-client-secret": process.env.CASHFREE_SECRET_KEY as string,
        "x-api-version": "2025-01-01",
      },
      body: JSON.stringify({
        order_id: orderData.orderId,
        order_amount: orderData.amount,
        order_currency: "INR",
        customer_details: {
          customer_id: "customer_" + Date.now(),
          customer_name: orderData.customerName,
          customer_email: orderData.customerEmail,
          customer_phone: orderData.customerPhone,
        },
      }),
    });

    const data = await response.json();

    console.log("data form createPaymentSession : ", data);
    return data.payment_session_id;
  } catch (error) {
    console.error("Error creating payment session:", error);
    throw new Error("Failed to create payment session");
  }
}

export const createMerchant = async (
  merchantData: CreateMerchantType,
  subdomain: string
) => {
  const user = await currentUser();
  if (!user) return;

  try {
    const response = await fetch(
      "https://api-sandbox.cashfree.com/partners/merchants",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-partner-apikey": process.env.CASHFREE_API_KEY as string,
        },
        body: JSON.stringify({
          merchant_id: merchantData.merchant_id,
          merchant_email: merchantData.merchant_email,
          merchant_name: merchantData.merchant_name,
          poc_phone: merchantData.poc_phone,
          merchant_site_url: merchantData.merchant_site_url,
          business_details: {
            business_legal_name:
              merchantData.business_details.business_legal_name,
            business_type: merchantData.business_details.business_type,
            business_model: merchantData.business_details.business_model,
          },
        }),
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Error creating merchant:", errorData);
      throw new Error(`Failed to create merchant: ${response.statusText}`);
    }

    console.log("Merchant Created Successfully : ");

    const data = await response.json();

    console.log("merchant creation resposne data : ", data);

    if (data) {
      try {
        const client = await clerkClient();
        await client.users.updateUserMetadata(user.id, {
          publicMetadata: {
            role: "GYM_OWNER",
            min_kyc_status: "MIN_KYC_PENDING",
            payment_gateway_activation_status: "PENDING",
            gym_subdomain: subdomain,
          },
          privateMetadata: {
            cashfreeMerchantId: merchantData.merchant_id,
          },
        });

        console.log("clerk meta updated : ", {
          role: "GYM_OWNER",
          min_kyc_status: "MIN_KYC_PENDING",
          payment_gateway_activation_status: "PENDING",
          gym_subdomain: subdomain,
        });
      } catch (error) {
        console.error("Error updating Clerk user metadata:", error);
      }
    }

    return data;
  } catch (error) {
    console.error("Exception during createMerchant:", error);
    throw error;
  }
};

export const getMerchantStatus = async (merchantId: string) => {
  try {
    const response = await fetch(
      `https://api-sandbox.cashfree.com/partners/merchants/${merchantId}`,
      {
        method: "GET",
        headers: {
          "x-partner-apikey": process.env.CASHFREE_API_KEY as string,
        },
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Error creating merchant:", errorData);
      throw new Error(`Failed to create merchant: ${response.statusText}`);
    }

    console.log("Merchant status fetched");

    const data = await response.json();

    console.log("merchant status : ", data);
    return data;
  } catch (error) {
    console.error("Error getting merchant status:", error);
    throw error;
  }
};

export const createMerchantOnboardingLink = async (
  cashfreeMerchantId: string
) => {
  await getMerchantStatus(cashfreeMerchantId);
  try {
    const response = await fetch(
      `https://api-sandbox.cashfree.com/partners/merchants/${cashfreeMerchantId}/onboarding_link/standard`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-partner-apikey": process.env.CASHFREE_API_KEY as string,
        },
        body: '{"type":"account_onboarding","return_url":"https://rnapq-2401-4900-1f30-5099-b069-f36e-5910-76bf.a.free.pinggy.link/action"}',
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Error creating merchant onboarding link:", errorData);
      throw new Error(
        `Failed to create merchant onboarding link : ${response.statusText}`
      );
    }

    console.log("Merchant onboarding link Created Successfully : ", response);

    const data = await response.json();

    console.log("merchant creation resposne data : ", data);
  } catch (error) {
    console.log("error in creatingMerchantOnboardingLink : ", error);
  }
};
