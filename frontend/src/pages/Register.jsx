import React, { useState } from "react";
import { handleRegisterSubmit} from "../services/auth.service";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [signUpData, setSignUpData] = useState({
    email: "",
    fullName: "",
    phoneNumber: "",
    password: "",
  });
  const handleSignup = (e) => {
    setSignUpData({ ...signUpData, [e.target.name]: e.target.value });
  };

  const handleRegisteration = async (e) => {
    try {
      e.preventDefault();
      const signupResponse = await handleRegisterSubmit(signUpData);
      if (signupResponse) {
        navigate("/login");
      } else {
        alert(signupResponse.message);
      }
    } catch (err) {
      return err;
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100 px-4">
      <div className="w-full max-w-md rounded-xl bg-white p-8 shadow-sm border border-slate-200">
        <div className="mb-6">
          <h1 className="text-2xl font-semibold text-slate-900">
            Create account
          </h1>
          <p className="mt-1 text-sm text-slate-500">Sign up to get started</p>
        </div>

        <form className="flex flex-col gap-4" onSubmit={handleRegisteration}>
          <div>
            <label className="mb-1 block text-sm font-medium text-slate-700">
              Full Name
            </label>
            <input
              type="text"
              name="fullName"
              value={signUpData.fullName}
              placeholder="Enter your full name"
              className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm outline-none transition focus:border-slate-500 focus:ring-1 focus:ring-slate-300"
              onChange={handleSignup}
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-slate-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={signUpData.email}
              placeholder="Enter your email"
              className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm outline-none transition focus:border-slate-500 focus:ring-1 focus:ring-slate-300"
             onChange={handleSignup}
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-slate-700">
              Phone Number
            </label>
            <input
              type="tel"
              name="phoneNumber"
              value={signUpData.phoneNumber}
              placeholder="Enter your phone number"
              className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm outline-none transition focus:border-slate-500 focus:ring-1 focus:ring-slate-300"
         onChange={handleSignup}
        />
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-slate-700">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={signUpData.password}
              placeholder="Enter your password"
              className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm outline-none transition focus:border-slate-500 focus:ring-1 focus:ring-slate-300"
             onChange={handleSignup}
            />
          </div>

          <button
            type="submit"
            className="mt-2 w-full rounded-lg bg-slate-900 py-2.5 text-sm font-medium text-white transition hover:bg-slate-800"
          >
            Create Account
          </button>
          <p className="flex justify-center">
            Already you have an account?
            <a className="text-blue-400" href="/login">
              login
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
