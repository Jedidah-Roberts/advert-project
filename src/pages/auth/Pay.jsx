import React, { useState } from "react";

const PaymentForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Payment Data:", formData);
    alert("Payment submitted!");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center text-green-700">Payment</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Cardholder Name</label>
            <input
              type="text"
              name="name"
              placeholder="John Doe"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Card Number</label>
            <input
              type="text"
              name="cardNumber"
              placeholder="1234 5678 9012 3456"
              value={formData.cardNumber}
              onChange={handleChange}
              maxLength={19}
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block text-sm font-medium mb-1">Expiry Date</label>
              <input
                type="text"
                name="expiry"
                placeholder="MM/YY"
                value={formData.expiry}
                onChange={handleChange}
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>

            <div className="flex-1">
              <label className="block text-sm font-medium mb-1">CVV</label>
              <input
                type="password"
                name="cvv"
                placeholder="123"
                value={formData.cvv}
                onChange={handleChange}
                maxLength={4}
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
          >
            Pay Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default PaymentForm;
