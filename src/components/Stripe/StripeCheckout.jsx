import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

// Stripe Test Publishable Key (frontend only)
const stripePromise = loadStripe("pk_test_TYooMQauvdEDq54NiTphI7jx");

export default function StripeCheckout() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <Elements stripe={stripePromise}>
        <CheckoutForm/>
      </Elements>
    </div>
  );
}