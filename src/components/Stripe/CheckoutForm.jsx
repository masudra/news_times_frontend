import React, { useState, useEffect } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useNavigate } from "react-router-dom";

const currencySymbols = {
  USD: "$",
  EUR: "€",
  GBP: "£",
  BDT: "৳",
};

export default function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();

  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("USD");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    if (!stripe || !elements) return;

    if (!amount || isNaN(amount) || Number(amount) <= 0) {
      setError("Please enter a valid donation amount.");
      setLoading(false);
      return;
    }

    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    if (error) {
      setError(error.message);
      setLoading(false);
    } else {
      setError(null);
      setSuccess(true);
      setPaymentMethod(paymentMethod);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => {
        navigate("/");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [success, navigate]);

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-md space-y-6 p-8 border border-gray-200 bg-white rounded-3xl shadow-xl"
    >
      <div className="text-center">
        <h2 className="text-2xl font-bold text-red-700 mb-1">
          Make a Donation
        </h2>
        <p className="text-gray-600 text-sm">Test card: 4242 4242 4242 4242</p>
      </div>

      <div className="flex gap-3">
        <select
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
          className="px-3 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-red-400"
        >
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="GBP">GBP</option>
          <option value="BDT">BDT</option>
        </select>

        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder={`Enter amount (${currencySymbols[currency]})`}
          className="w-full px-4 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-red-400"
          min="1"
        />
      </div>

      <div className="border rounded-md p-3 bg-gray-50">
        <CardElement className="text-sm" />
      </div>

      {error && <p className="text-red-600 text-sm">{error}</p>}

      {success && paymentMethod && (
        <div className="text-sm text-green-700 bg-green-100 p-3 rounded-md">
          <p className="font-medium">✅ Payment Successful</p>
          <p className="mt-2 text-xl">Thank you for your donation!</p>
          <p>
            <strong>ID:</strong> {paymentMethod.id}
          </p>
          <p>
            <strong>Card:</strong> **** **** **** {paymentMethod.card.last4}
          </p>
          <p>
            <strong>Amount:</strong> {currencySymbols[currency]}
            {amount} {currency}
          </p>
          <p className="mt-2">Redirecting to home page...</p>
        </div>
      )}

      <button
        type="submit"
        disabled={!stripe || loading}
        className="bg-red-600 w-full text-white py-2 px-4 rounded-md hover:bg-red-700 transition font-semibold"
      >
        {loading ? "Processing..." : "Pay Now"}
      </button>
    </form>
  );
}
