import React from "react";
import {
  SiStripe,
  SiPaypal,
  SiGooglepay,
  SiApple,
  SiPayoneer,
} from "react-icons/si";
import { Link } from "react-router-dom";

export default function Donate() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-6">
      <div className="bg-white rounded-3xl shadow-2xl p-10 max-w-lg w-full border border-gray-200">
        <h1 className="text-4xl font-extrabold text-center text-red-600 mb-4">
          Support a Cause
        </h1>
        <p className="text-center text-gray-700 text-lg mb-6">
          Your small contribution can bring a big change in someone's life.
        </p>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
            Donate Internationally
          </h2>

          <div className="space-y-3">
            <Link
              to="/donate/stripe"
              className="flex items-center gap-3 justify-center bg-[#635bff] text-white py-3 px-5 rounded-2xl font-medium hover:bg-[#5245ff] transition shadow-md"
            >
              <SiStripe className="w-6 h-6" /> Donate with Stripe
            </Link>

            <a
              href="https://your-paypal-link.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 justify-center bg-[#ffc439] text-black py-3 px-5 rounded-2xl font-medium hover:bg-[#ffb347] transition shadow-md"
            >
              <SiPaypal className="w-6 h-6" /> Donate with PayPal
            </a>

            <a
              href="https://your-google-pay-link.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 justify-center bg-[#5f6368] text-white py-3 px-5 rounded-2xl font-medium hover:bg-[#44474c] transition shadow-md"
            >
              <SiGooglepay className="w-6 h-6" /> Donate with Google Pay
            </a>

            <a
              href="https://your-apple-pay-link.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 justify-center bg-[#000000] text-white py-3 px-5 rounded-2xl font-medium hover:bg-[#1c1c1c] transition shadow-md"
            >
              <SiApple className="w-6 h-6" /> Donate with Apple Pay
            </a>

            <a
              href="https://your-payoneer-link.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 justify-center bg-[#ff4800] text-white py-3 px-5 rounded-2xl font-medium hover:bg-[#e04300] transition shadow-md"
            >
              <SiPayoneer className="w-6 h-6" /> Donate with Payoneer
            </a>
          </div>
        </div>

        <p className="text-sm text-gray-600 text-center">
          Thank you for your generosity. Every donation matters.
        </p>
      </div>
    </div>
  );
}
