import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleLogin = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Login API can go here

    navigate("/home");
  };

  const handlePayment = async () => {
    try {
      const amount = 500;

      const res = await fetch(
        "http://localhost:4000/payment/create-order",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ amount }),
        }
      );

      const data = await res.json();

      if (!data.success) {
        alert("Unable to create order");
        return;
      }

     console.log("Key:", process.env.REACT_APP_RAZORPAY_KEY);

     
const options = {
  key: process.env.REACT_APP_RAZORPAY_KEY,
  amount: data.order.amount,
  currency: data.order.currency,
  name: "My Store",
  description: "Test Transaction",
  order_id: data.order.id,
  handler: async function (response) {
    console.log(response);
  },
};
      const razor = new window.Razorpay(options);

      razor.on("payment.failed", function (response) {
        alert(response.error.description);
      });

      razor.open();
    } catch (err) {
      console.log(err);
      alert("Something went wrong");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
        <h1 className="text-3xl font-bold text-center text-gray-800">
          Welcome Back
        </h1>

        <p className="text-center text-gray-500 mt-2 mb-8">
          Sign in to your account
        </p>

        <form className="space-y-5" onSubmit={handleSubmit}>
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Email
            </label>

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={loginData.email}
              onChange={handleLogin}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Password
            </label>

            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={loginData.password}
              onChange={handleLogin}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
          >
            Login
          </button>

          <button
            type="button"
            onClick={handlePayment}
            className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700"
          >
            Pay Now ₹500
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;