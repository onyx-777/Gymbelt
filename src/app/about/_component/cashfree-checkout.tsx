/* eslint-disable @typescript-eslint/ban-ts-comment */
"use client";

import { useState, useEffect, useRef } from "react";
//@ts-expect-error
import { load } from "@cashfreepayments/cashfree-js";
import { Button } from "@/components/ui/button";

interface PaymentDetails {
  name: string;
  email: string;
  phone: string;
  amount: string;
}

export interface CheckoutOptions {
  paymentSessionId: string;
  redirectTarget: "_self" | "_blank" | "_modal";
  returnUrl?: string;
  customer: {
    name: string;
    email: string;
    phone: string;
  };
  order: {
    amount: string;
  };
}

export interface PaymentResult {
  error?: {
    message: string;
    code: string;
    type: string;
  };
  redirect?: boolean;
  paymentDetails?: {
    paymentMessage: string;
    orderId: string;
    transactionId: string;
  };
}

interface CheckoutProps {
  paymentSessionId: string;
  customerDetails: PaymentDetails;
  onSuccess?: (details: PaymentResult["paymentDetails"]) => void;
  onError?: (error: PaymentResult["error"]) => void;
}

function Checkout({
  paymentSessionId,
  customerDetails,
  onSuccess,
  onError,
}: CheckoutProps) {
  const [error, setError] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const cashfreeInstance = useRef<any>(null);

  console.log("[Checkout] Initial render with props:", {
    paymentSessionId,
    customerDetails,
  });

  useEffect(() => {
    console.log("[Checkout] Starting SDK initialization");
    const initializeSDK = async () => {
      try {
        console.log("[Checkout] Loading Cashfree SDK");
        const instance = await load({
          mode: "sandbox",
        });
        console.log("[Checkout] SDK loaded successfully");
        cashfreeInstance.current = instance;
      } catch (err) {
        console.error("[Checkout] SDK initialization failed:", err);
        setError("Failed to initialize payment SDK");
      }
    };

    initializeSDK();
  }, []);

  const handlePayment = async () => {
    console.log("[Checkout] Payment initiated");

    if (!cashfreeInstance.current) {
      console.error("[Checkout] Payment failed - SDK not initialized");
      setError("Payment SDK not initialized");
      return;
    }

    setIsProcessing(true);
    setError(null);

    try {
      const checkoutOptions: CheckoutOptions = {
        paymentSessionId: paymentSessionId.trim(),
        redirectTarget: "_modal",
        returnUrl: `${window.location.origin}/payment/callback`,
        customer: {
          name: customerDetails.name,
          email: customerDetails.email,
          phone: customerDetails.phone,
        },
        order: {
          amount: customerDetails.amount,
        },
      };

      console.log(
        "[Checkout] Initiating payment with options:",
        checkoutOptions
      );

      const result: PaymentResult = await cashfreeInstance.current.checkout(
        checkoutOptions
      );

      console.log("[Checkout] Payment result received:", result);

      if (result.error) {
        console.error("[Checkout] Payment error:", result.error);
        setError(result.error.message || "Payment failed");
        onError?.(result.error);
      }

      if (result.paymentDetails) {
        console.log("[Checkout] Payment successful:", result.paymentDetails);
        onSuccess?.(result.paymentDetails);
      }
    } catch (err) {
      console.error("[Checkout] Payment processing error:", err);
      setError("Payment processing failed");
    } finally {
      console.log("[Checkout] Payment process completed");
      setIsProcessing(false);
    }
  };

  console.log("[Checkout] Rendering with state:", {
    error,
    isProcessing,
    hasInstance: !!cashfreeInstance.current,
  });

  return (
    <div className="payment-container">
      {error && (
        <div className="error-message" role="alert">
          {error}
        </div>
      )}

      <div className="payment-details">
        <h3>Payment Details</h3>
        <p>Amount: ₹{customerDetails.amount}</p>
        <p>Name: {customerDetails.name}</p>
        <p>Email: {customerDetails.email}</p>
      </div>

      <Button
        type="button"
        className="payment-button"
        onClick={handlePayment}
        disabled={isProcessing || !cashfreeInstance.current}
      >
        {isProcessing ? "Processing Payment..." : "Pay Now"}
      </Button>
    </div>
  );
}

export default Checkout;
