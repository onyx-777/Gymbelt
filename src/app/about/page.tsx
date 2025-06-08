"use client";

import { FormEvent, useState } from "react";
import { createPaymentSession } from "@/actions/cashfree";
import { PaymentResult } from "./_component/cashfree-checkout";
import Checkout from "./_component/cashfree-checkout";

export default function CheckoutPage() {
  const [paymentSessionId, setPaymentSessionId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  interface FormElements extends HTMLFormControlsCollection {
    name: HTMLInputElement;
    email: HTMLInputElement;
    phone: HTMLInputElement;
    amount: HTMLInputElement;
  }

  interface CheckoutFormElement extends HTMLFormElement {
    elements: FormElements;
  }

  async function handleSubmit(event: FormEvent<CheckoutFormElement>) {
    event.preventDefault();
    setIsLoading(true);
    try {
      const form = event.currentTarget;
      const formData = {
        name: form.elements.name.value,
        email: form.elements.email.value,
        phone: form.elements.phone.value,
        amount: form.elements.amount.value,
      };

      console.log("Form Data:", formData);

      console.log("entered try block, now going for formData");
      console.log("formData going for sessionId : ", formData);
      const sessionId = await createPaymentSession(formData);
      console.log("sessionId setting to setPaymentSessionId : ", sessionId);
      setPaymentSessionId(sessionId);
    } catch (error) {
      console.error("Payment session creation failed:", error);
      alert("Failed to initialize payment. Please try again.");
    } finally {
      setIsLoading(false);
    }
  }

  const handlePaymentSuccess = (details: PaymentResult["paymentDetails"]) => {
    // Handle successful payment
    console.log("Payment successful:", details);
  };

  const handlePaymentError = (error: PaymentResult["error"]) => {
    // Handle payment error
    console.error("Payment failed:", error);
  };

  return (
    <div className="max-w-md mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Checkout</h1>

      {!paymentSessionId ? (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block mb-1">
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label htmlFor="amount" className="block mb-1">
              Amount (INR)
            </label>
            <input
              type="number"
              id="amount"
              name="amount"
              min="1"
              required
              className="w-full p-2 border rounded"
            />
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 disabled:bg-blue-300"
          >
            {isLoading ? "Processing..." : "Pay Now"}
          </button>
        </form>
      ) : (
        <Checkout
          paymentSessionId={paymentSessionId}
          customerDetails={{
            name: "John Doe",
            email: "john@example.com",
            phone: "1234567890",
            amount: "100",
          }}
          onSuccess={handlePaymentSuccess}
          onError={handlePaymentError}
        />
      )}
    </div>
  );
}

// import React from "react";
// import CashfreeCheckout from "./_component/cashfree-checkout";

// const About = () => {
//   const paymentSessionId =
//     "session_AqbTEAFrXrE1GezpjOoa8mx2M3oYuHA1Gu-teTTq1ypYLD18ET7OMocUoWLqPuN6fctAwVgihktJjQc0kQTtKgI8RtAPlHKZf7kDlP2Yt3Y14UbYHQnMXGnsMwpaymentpayment";
//   return <CashfreeCheckout />;
// };

// export default About;
