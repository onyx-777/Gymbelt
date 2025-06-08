/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextRequest, NextResponse } from "next/server";
import { headers } from "next/headers";
import * as crypto from "crypto";
import { clerkClient, currentUser } from "@clerk/nextjs/server";
import { CashfreeKYCstatus } from "@prisma/client/edge";

const WEBHOOK_SECRET = process.env.CASHFREE_API_KEY;

// Verify webhook signature
function verifyWebhookSignature(payload: string, signature: string | null) {
  if (!WEBHOOK_SECRET || !signature) return false;

  const computedSignature = crypto
    .createHmac("sha256", WEBHOOK_SECRET)
    .update(payload)
    .digest("base64");

  return crypto.timingSafeEqual(
    Buffer.from(signature),
    Buffer.from(computedSignature)
  );
}

export async function POST(req: NextRequest) {
  const user = await currentUser();
  if (!user) return;
  try {
    const headersList = await headers();
    const signature = headersList.get("x-webhook-signature");
    const payload = await req.text();

    // Verify webhook signature
    const isValid = verifyWebhookSignature(payload, signature);
    if (!isValid) {
      return NextResponse.json({ error: "Invalid signature" }, { status: 401 });
    }

    const event = JSON.parse(payload);

    console.log("cashfree webhook event : ", event);

    // Handle different webhook events
    switch (event.type) {
      case "MERCHANT_ONBOARDED":
        // Handle merchant onboarding
        await handleMerchantOnboarded(event);

        const client = await clerkClient();
        await client.users.updateUserMetadata(user.id, {
          publicMetadata: {
            ...user.publicMetadata,
            min_kyc_status: "MIN_KYC_APPROVED" as CashfreeKYCstatus,
          },
        });
        break;

      case "PAYMENT_SUCCESS":
        // Handle successful payment
        await handlePaymentSuccess(event);
        break;

      case "PAYMENT_FAILED":
        // Handle failed payment
        await handlePaymentFailed(event);
        break;

      case "KYC_STATUS_UPDATED":
        // Handle KYC status updates
        await handleKycStatusUpdate(event);
        break;

      default:
        console.log("Unhandled webhook event:", event.type);
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error("Webhook error:", error);
    return NextResponse.json(
      { error: "Webhook processing failed" },
      { status: 500 }
    );
  }
}

// Handler functions
async function handleMerchantOnboarded(event: any) {
  // Implement merchant onboarding logic
  console.log("Merchant onboarded:", event);
}

async function handlePaymentSuccess(event: any) {
  // Implement payment success logic
  console.log("Payment successful:", event);
}

async function handlePaymentFailed(event: any) {
  // Implement payment failure logic
  console.log("Payment failed:", event);
}

async function handleKycStatusUpdate(event: any) {
  // Implement KYC status update logic
  console.log("KYC status updated:", event);
}
