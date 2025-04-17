"use server";

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
