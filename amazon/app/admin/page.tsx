"use client";

import React, { useState } from "react";

import ListCategories from "@/components/shared/admin-list/ListCategories";
import ListProducts from "@/components/shared/admin-list/ListProducts";
import ListUsers from "@/components/shared/admin-list/ListUsers";

const navItems = [
  { id: "categories", label: "Categories" },
  { id: "products", label: "Products" },
  { id: "users", label: "Users" },
] as const;

const UserPage = () => {
  const [activeTab, setActiveTab] = useState<TabKey>("categories");

  const tabs = {
    categories: () => <ListCategories />,
    products: () => <ListProducts />,
    users: () => <ListUsers />,
  } as const;

  type TabKey = keyof typeof tabs;
  const ActiveComponent = tabs[activeTab];

  const handleTabChange = (tab: keyof typeof tabs) => {
    setActiveTab(tab);
  };

  return (
    <>
      <div className="w-full flex justify-between">
        <div className="flex-1 md:max-w-[217px] md:mr-[48px] text-white text-center py-4">
          <h2 className="text-3xl font-bold pb-8 text-black border-b border-[#2E2E2E]">
            Admin Panel
          </h2>
          <nav className="flex flex-col gap-2">
            {navItems.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => handleTabChange(id)}
                className={`text-sm font-[800] p-4 border-b border-[#2E2E2E] text-black hover:text-[#E16C60] transition flex items-center last:border-none ${
                  activeTab === id ? "!text-[#E16C60]" : ""
                }`}
              >
                {label}
              </button>
            ))}
          </nav>
        </div>

        <div className="flex-[2] w-full items-start md:justify-between justify-start flex-col md:flex-row min-h-screen px-0 md:p-4 md:mt-[50px] mt-[34px]">
          <ActiveComponent />
        </div>
      </div>
    </>
  );
};

export default UserPage;
