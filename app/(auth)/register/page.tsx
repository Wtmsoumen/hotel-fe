"use client";

import { Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import stayentLogoYellow from "../../../public/images/stayentLogoYellow.svg";
import register from "../../../public/images/register.png";

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Left side – Form */}
      <div className="w-1/2 flex flex-col px-16 py-12 overflow-y-auto">
        {/* Logo */}
        <div className="mb-8 w-full max-w-[500px] mx-auto">
          <Image
            src={stayentLogoYellow}
            alt="Stayent"
            width={160}
            height={52}
            className="object-contain"
          />
        </div>

        <div className="w-full max-w-[500px] mx-auto">
          <h1 className="text-5xl font-medium text-black mb-4">
            Create an Account
          </h1>
          <p className="text-black text-base mb-8">
            Please enter your details to signup.
          </p>

          <form className="flex flex-col gap-6">
            {/* Full Name */}
            <div>
              <label className="block text-sm font-normal text-black mb-3">
                Full Name
                <span className="text-red-500 ml-0.5">*</span>
              </label>
              <div className="flex items-center border-b border-[#838383] pb-2">
                <input
                  type="text"
                  placeholder="Enter full name"
                  className="flex-1 outline-none text-[#474545] text-sm bg-transparent"
                />
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="text-[#474545]"
                >
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </div>
            </div>

            {/* Email address */}
            <div>
              <label className="block text-sm font-normal text-black mb-3">
                Email address
                <span className="text-red-500 ml-0.5">*</span>
              </label>
              <div className="flex items-center border-b border-[#838383] pb-2">
                <input
                  type="email"
                  placeholder="Enter email address"
                  className="flex-1 outline-none text-[#474545] text-sm bg-transparent"
                />
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="text-[#474545]"
                >
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m2 7 10 7 10-7" />
                </svg>
              </div>
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-sm font-normal text-black mb-3">
                Phone Number
                <span className="text-red-500 ml-0.5">*</span>
              </label>
              <div className="flex items-center border-b border-[#838383] pb-2">
                <input
                  type="number"
                  placeholder="Enter phone number"
                  className="flex-1 outline-none text-[#474545] text-sm bg-transparent [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                />
                <Phone strokeWidth="1.5" className="w-5 h-5 text-[#474545]" />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-normal text-black mb-3">
                Password
                <span className="text-red-500 ml-0.5">*</span>
              </label>
              <div className="flex items-center border-b border-[#838383] pb-2">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter password"
                  className="flex-1 outline-none text-[#474545] text-sm bg-transparent"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((p) => !p)}
                  className="text-[#474545]"
                >
                  {showPassword ? (
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
                      <line x1="1" y1="1" x2="23" y2="23" />
                    </svg>
                  ) : (
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {/* Sign Up button */}
            <div className="pt-1">
              <button
                type="submit"
                className="px-10 py-3 rounded-full text-nlack text-sm font-medium"
                style={{ backgroundColor: "#D8A95B" }}
              >
                Sign Up
              </button>
            </div>
          </form>

          <p className="mt-8 text-sm text-gray-600">
            Already have an account?{" "}
            <Link
              href="/login"
              className="font-medium"
              style={{ color: "#D8A95B" }}
            >
              Log In
            </Link>
          </p>
        </div>
      </div>

      {/* Right side – Hotel image */}
      <div className="w-1/2 relative">
        <Image
          src={register}
          alt="Hotel"
          fill
          className="object-cover"
          priority
        />
      </div>
    </div>
  );
}
