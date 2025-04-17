import axios from "axios";

interface OrderRequest {
  order_id: string;
  order_amount: number;
  customer_id: string;
  customer_phone: string;
}

export async function POST(req: Request) {
  try {
    const requestData: OrderRequest = await req.json();
    const { order_id, order_amount, customer_id, customer_phone } = requestData;

    const headers = {
      "x-client-id": process.env.CASHFREE_APP_ID!,
      "x-client-secret": process.env.CASHFREE_SECRET_KEY!,
      "x-api-version": "2022-09-01",
      "Content-Type": "application/json",
    };

    const orderData = {
      order_id,
      order_amount,
      order_currency: "INR",
      customer_details: {
        customer_id,
        customer_phone,
        customer_email: "customer@example.com", // Add this from your user context
      },
      order_meta: {
        return_url: `${process.env.NEXT_PUBLIC_APP_URL}/payment/status?order_id=${order_id}`,
        notify_url: `${process.env.NEXT_PUBLIC_APP_URL}/api/webhooks/cashfree`,
      },
    };

    // Create order using Cashfree's new Pay API
    const response = await axios.post(
      "https://api.cashfree.com/pg/orders",
      orderData,
      { headers }
    );

    if (!response.data) {
      throw new Error("No response data received from Cashfree");
    }

    return Response.json({
      success: true,
      message: "Order created successfully!",
      data: response.data,
      paymentSessionId: response.data.payment_session_id,
      orderToken: response.data.order_token,
    });
  } catch (error) {
    console.error("Error in order creation:", error);
    return Response.json(
      {
        success: false,
        message:
          error instanceof Error
            ? error.message
            : "Error processing the request",
      },
      { status: 500 }
    );
  }
}
