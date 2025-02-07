"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import React, { useState } from "react";

const UserProfile = () => {
  const [isTwoStepVerificationEnabled, setTwoStepVerificationEnabled] =
    useState(false);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header Section */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          <h1 className="text-xl font-bold">Onyx</h1>
          <div className="flex items-center gap-6">
            <input
              type="text"
              placeholder="Search Onyx"
              className="border border-gray-300 rounded-md px-4 py-2 text-sm w-64"
            />
            <button className="text-sm font-medium text-gray-600 hover:text-black">
              Cart
            </button>
            <button className="text-sm font-medium text-gray-600 hover:text-black">
              User Userovich
            </button>
          </div>
        </div>
      </header>

      {/* Main Layout */}
      <main className="container mx-auto py-8 px-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Sidebar */}
        <aside className="hidden lg:block col-span-3 bg-inherit rounded-lg shadow-none">
          <nav className="flex-col p-6 space-y-6 flex">
            <h2 className="font-bold text-gray-700">Your Account</h2>
            <Link className="bg-inherit hover:bg-inherit shadow-none justify-center flex gap-3 text-black" href={`/login-secure`}>
              <img src="/assets/images/login-secure-img.svg" alt=""></img>
              Login & Security
            </Link>
            <Link href={`/your-orders`} className="bg-inherit hover:bg-inherit shadow-none text-black justify-center flex gap-3">
              <img src="/assets/images/login-secure-img.svg" alt=""></img>
              Login & Security
            </Link>
            <Button></Button>
            <Button></Button>
            <Button></Button>
            <Button></Button>
            {/* <ul className="text-gray-600 space-y-6 border-t border-gray-200 pt-6">
              <li className="hover:text-black cursor-pointer border-b border-gray-200 pb-4">Login & Security</li>
              <li className="hover:text-black cursor-pointer border-b border-gray-200 pb-4">Your Orders</li>
              <li className="hover:text-black cursor-pointer border-b border-gray-200 pb-4">Your Addresses</li>
              <li className="hover:text-black cursor-pointer border-b border-gray-200 pb-4">Your Payments</li>
              <li className="hover:text-black cursor-pointer border-b border-gray-200 pb-4">Gift Cards</li>
              <li className="hover:text-black cursor-pointer border-b border-gray-200 pb-4">Your Messages</li>
              <li className="hover:text-black cursor-pointer pb-4">Customer Service</li>
            </ul> */}
          </nav>
        </aside>

        {/* Profile Details Section */}
        <section className="col-span-12 lg:col-span-9 bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-lg font-bold mb-6">Your Account</h2>
          <div className="space-y-10">
            {" "}
            {/* Increased vertical spacing */}
            {/* Name */}
            <div className="flex justify-between">
              <p className="text-gray-500 font-medium">Name</p>
              <p className="text-gray-700">User Userovich</p>
            </div>
            {/* Email */}
            <div className="flex justify-between">
              <p className="text-gray-500 font-medium">Email</p>
              <p className="text-gray-700">user.account@gmail.com</p>
            </div>
            {/* Mobile */}
            <div className="flex justify-between">
              <p className="text-gray-500 font-medium">Primary mobile number</p>
              <p className="text-gray-700">+90 321 321 0000</p>
            </div>
            {/* Passkey */}
            <div>
              <div className="flex justify-between">
                <p className="text-gray-500 font-medium">Passkey</p>
                <div className="flex items-center gap-2">
                  <img
                    src="/apple.svg"
                    alt="Apple Logo"
                    className="w-6 h-6 ml-3"
                  />
                  <div className="text-right">
                    <p className="text-gray-700">iCloud Keychain</p>
                    <p className="text-gray-500 text-sm">Set up in January</p>
                  </div>
                </div>
              </div>
              <p className="text-gray-500 mt-2 text-sm">
                Sign in the same way you unlock your device by using Face ID or
                Touch ID.
              </p>
            </div>
            {/* Password */}
            <div>
              <div className="flex justify-between">
                <p className="text-gray-500 font-medium">Password</p>
                <div className="flex flex-col text-right">
                  <p className="text-gray-700">********</p>
                  <a
                    href="#"
                    className="text-black
                  -600 hover:underline text-sm mt-2"
                  >
                    Change password
                  </a>
                </div>
              </div>
            </div>
            {/* Two-Step Verification */}
            <div className="flex justify-between items-center">
              <p className="text-gray-500 font-medium">2-step verification</p>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only"
                  checked={isTwoStepVerificationEnabled}
                  onChange={() =>
                    setTwoStepVerificationEnabled(!isTwoStepVerificationEnabled)
                  }
                />
                <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-blue-600"></div>
                <div className="absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition peer-checked:translate-x-5"></div>
              </label>
            </div>
          </div>
          <div className="mt-10 text-left">
            <button className="font-bold text-gray-800:underline">Edit</button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default UserProfile;
