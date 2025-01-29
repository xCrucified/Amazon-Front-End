import React from "react";
import UserForm from "@/components/shared/user-page";

const UserPage = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md p-4">
        <h3 className="font-semibold text-gray-700 mb-4">Your Account</h3>
        <ul className="space-y-2">
          <li className="text-blue-600 font-medium">Login & Security</li>
          <li className="text-gray-600">Your Orders</li>
          <li className="text-gray-600">Your Addresses</li>
          <li className="text-gray-600">Your Payments</li>
          <li className="text-gray-600">Customer Service</li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <UserForm />
      </main>
    </div>
  );
};

export default UserPage;
