import crypto from "crypto";

interface WebhookData {
  orderId: string;
  orderAmount: number;
  referenceId: string;
  txStatus: "SUCCESS" | "FAILED" | "CANCELLED" | "PENDING";
  paymentMode: string;
  txMsg: string;
  txTime: string;
}

export async function POST(req: Request) {
  try {
    const webhookData: WebhookData = await req.json();
    const signature = req.headers.get("x-webhook-signature") || "";
    const webhookBody = JSON.stringify(webhookData);

    // Verify webhook signature using Cashfree's recommended method
    const computedSignature = crypto
      .createHmac("sha256", process.env.CASHFREE_SECRET_KEY!)
      .update(webhookBody)
      .digest("hex");

    const isValid = signature === computedSignature;

    if (!isValid) {
      return Response.json(
        { success: false, message: "Invalid webhook signature" },
        { status: 400 }
      );
    }

    // Handle different payment statuses
    switch (webhookData.txStatus) {
      case "SUCCESS":
        // Update your database to mark payment as successful
        // Add your payment success logic here
        break;
      case "FAILED":
        // Handle payment failure
        // Add your payment failure logic here
        break;
      case "CANCELLED":
        // Handle payment cancellation
        // Add your payment cancellation logic here
        break;
      case "PENDING":
        // Handle pending payment
        // Add your pending payment logic here
        break;
    }

    return Response.json({
      success: true,
      message: "Webhook processed successfully",
    });
  } catch (error) {
    console.error("Webhook Error:", error);
    return Response.json(
      {
        success: false,
        message:
          error instanceof Error ? error.message : "Error processing webhook",
      },
      { status: 500 }
    );
  }
}
