"use client";

import React, {useEffect, useState} from "react";
import Image from "next/image";
import Link from "next/link";

import LoginSecurity from "@/features/profile/secure";
import YourOrders from "@/features/profile/orders";
import YourAddresses from "@/features/profile/addresses";
import YourPayments from "@/features/profile/payments";
import CustomerService from "@/features/profile/customerService";
import GiftCards from "@/features/profile/giftCards";
import YourMessages from "@/features/profile/messages";

// const tabs = {
//   "login-security": <LoginSecurity/>,
//   "your-orders": <YourOrders/>,
//   "your-addresses": <YourAddresses/>,
//   "customer-service": null,
//   "exit": null,
//   "your-payments": null,
//   "gift-cards": null,
//   "your-messages": null,
// };

const navItems = [
  { id: "login-security", label: "Login & Security", icon: "/assets/images/user-mini.svg" },
  { id: "your-orders", label: "Your Orders", icon: "/assets/images/orders.svg" },
  { id: "your-addresses", label: "Your Addresses", icon: "/assets/images/house-line.svg" },
  { id: "your-payments", label: "Your Payments", icon: "/assets/images/cardholder.svg" },
  { id: "gift-cards", label: "Gift Cards", icon: "/assets/images/cards.svg" },
  { id: "your-messages", label: "Your Messages", icon: "/assets/images/envelope-open.svg" },
  { id: "customer-service", label: "Customer Service", icon: "/assets/images/headset.svg" },
  { id: "exit", label: "Exit", icon: "/assets/images/sign-out-mini.svg" },
] as const;

const UserPage = () => {
  const [activeTab, setActiveTab] = useState<TabKey>("login-security");
  const [showSidebar, setShowSidebar] = useState<boolean>(true);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  
  const tabs = {
    "login-security": () => <LoginSecurity />,
    "your-orders": () => <YourOrders />,
    "your-addresses": () => <YourAddresses />,
    "customer-service": () => <CustomerService/>,
    "exit": () => null,
    "your-payments": () => <YourPayments/>,
    "gift-cards": () => <GiftCards/>,
    "your-messages": () => <YourMessages/>,
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
      {(showSidebar || !isMobile) && (
        <div className="flex-1 max-w-[217px] mr-[48px] py-4 text-white">
          <div className='flex items-center mb-[32px]'>
            <Link href='/' className='flex items-center text-[16px] text-black'>
              <Image className='mr-[9px]' src='/assets/images/Corner-left-up.svg' alt='icon' width='20' height='20'/>
              Main
              <Image src='/assets/images/caret-right-mini.svg' alt='icon' width='20' height='20'/>
            </Link>
            <Link href='/userpage' className='flex items-center text-[#00000073] text-[16px] ml-[9px]'>
              Profile
            </Link>
          </div>
          <h2 className="text-3xl font-bold pb-8 text-black border-b border-[#2E2E2E]">Your Account</h2>
          <nav className="flex flex-col gap-2">
            {navItems.map(({id, label, icon}) => (
              <button
                key={id}
                onClick={() => handleTabChange(id)}
                className={`text-sm font-bold p-4 border-b border-[#2E2E2E] text-black hover:text-[#E16C60] transition flex items-center last:border-none ${
                  activeTab === id ? "!text-[#E16C60]" : ""
                }`}
              >
                <Image src={icon} alt={`${label} icon`} width="24" height="24" className="mr-[12px]"/>
                {label}
              </button>
            ))}
          </nav>
        </div>
      )}
      
      {(!showSidebar || !isMobile) && activeTab && (
        <div className="flex-[2] w-full flex items-start justify-between min-h-screen p-4 mt-[50px]">
          {isMobile && (
            <button
              onClick={() => setShowSidebar(true)} // Show sidebar again
              className="mb-4 p-2 bg-gray-200 text-black rounded"
            >
              ← {activeTab}
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
