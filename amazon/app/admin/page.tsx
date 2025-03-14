"use client";

import React, { useEffect, useState } from "react";

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
  const [showSidebar, setShowSidebar] = useState<boolean>(true);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  const tabs = {
    "categories": () => <ListCategories />,
    "products": () => <ListProducts />,
    "users": () => <ListUsers />,
  } as const;

  type TabKey = keyof typeof tabs;
  const ActiveComponent = tabs[activeTab];

  useEffect(() => {
    const handleResize = () => {
      const mobileView = window.innerWidth <= 768;
      setIsMobile(mobileView);
      setShowSidebar(mobileView);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  const handleTabChange = (tab: keyof typeof tabs) => {
    setActiveTab(tab);
    if (isMobile) setShowSidebar(false);
  };

  return (
    <>
      <div className="w-full flex items-start justify-between min-h-screen p-4">
        <div className="flex-1 md:max-w-[217px] md:mr-[48px] py-4 text-white">
          <h2 className="text-3xl font-bold pb-8 text-black border-b border-[#2E2E2E]">
            Your Account
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

        {(!showSidebar || !isMobile) && activeTab && (
          <div className="md:flex-[2] w-full flex items-start md:justify-between justify-start flex-col md:flex-row min-h-screen px-0 md:p-4 md:mt-[50px] mt-[34px]">
            {isMobile && (
              <button
                onClick={() => setShowSidebar(true)}
                className="mb-5 py-[9.5px] text-[23px] leading-[25px] text-black font-[700] flex items-center"
              >
               
                {activeTab}
              </button>
            )}
            <ActiveComponent />
          </div>
        )}
      </div>
    </>
  );
};

export default UserPage;
