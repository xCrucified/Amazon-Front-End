'use client'
import React, { useState } from "react";

interface Props {
  className?: string;
}

const UserForm: React.FC<Props> = ({ className }) => {
  const [isTwoStepEnabled, setIsTwoStepEnabled] = useState(false);

  return (
    <div className={`p-6 bg-white shadow-md rounded-md ${className}`}>
      <h2 className="text-lg font-semibold mb-4">Your Account</h2>

      {/* User Information Form */}
      <div className="border rounded-lg p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="text-gray-600 block">Name</label>
            <input
              type="text"
              value=""
              className="w-full border p-2 rounded bg-gray-100"
              disabled
            />
          </div>
          <div>
            <label className="text-gray-600 block">Email</label>
            <input
              type="email"
              value=""
              className="w-full border p-2 rounded bg-gray-100"
              disabled
            />
          </div>
          <div>
            <label className="text-gray-600 block">Primary Mobile Number</label>
            <input
              type="tel"
              value=""
              className="w-full border p-2 rounded bg-gray-100"
              disabled
            />
          </div>
          <div>
            <label className="text-gray-600 block">Password</label>
            <input
              type="password"
              value=""
              className="w-full border p-2 rounded bg-gray-100"
              disabled
            />
          </div>
        </div>

        {/* 2-Step Verification */}
        <div className="flex items-center justify-between mt-4">
          <span className="text-gray-600">2-Step Verification</span>
          <label className="switch">
            <input
              type="checkbox"
              checked={isTwoStepEnabled}
              onChange={() => setIsTwoStepEnabled((prev) => !prev)}
            />
            <span className="slider round"></span>
          </label>
        </div>

        {/* Buttons */}
        <div className="mt-6 flex justify-between">
          <button className="px-4 py-2 bg-blue-600 text-white rounded">
            Edit
          </button>
          <button className="px-4 py-2 bg-gray-600 text-white rounded">
            Change Password
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserForm;
