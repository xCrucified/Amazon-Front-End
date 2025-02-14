'use client';

import React, {type ReactNode, useEffect, useState} from "react";

import {usePathname} from "next/navigation";
import Link from "next/link";
import Image from "next/image";

import { Container } from "@/components/shared/container";

export default function UserPageRootLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  
  const [isMobile, setIsMobile] = useState(false);
  const [showSidebar, setShowSidebar] = useState(true);
  
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      setShowSidebar(mobile);
    };
    
    handleResize();
    window.addEventListener("resize", handleResize);
    
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  
  //const isProfilePages = ["/userpage/your-orders", "/userpage/user-secure", "/userpage/user-addresses "].includes(pathname);
  
  const handleMenuClick = () => {
    if (isMobile) setShowSidebar(false);
  };
  
  return (
    <Container className="flex flex-row items-center justify-center min-h-screen py-2 w-full">
      <div className="w-full flex items-start justify-between min-h-screen p-4">
        {/*( !isProfilePages && (!isMobile || showSidebar))*/}
        <div className="flex-1 max-w-[300px] mr-[64px] p-4 text-white">
              <h2 className="text-3xl font-bold mb-8 text-black">Your Account</h2>
              <nav className="flex flex-col gap-2">
                <Link
                  onClick={handleMenuClick}
                  className='text-sm font-bold p-4 border-b border-[#2E2E2E] text-black hover:text-[#E16C60] transition flex items-center'
                  href="/userpage">
                  <Image className='mr-[16px] transition-all duration-300 ease-in-out group-hover:invert'
                         src='/assets/images/user-mini.svg' alt='icon' width='24' height='24'/>
                  Login & Security
                </Link>
                <Link
                  onClick={handleMenuClick}
                  className='text-sm font-bold p-4 border-b border-[#2E2E2E] text-black hover:text-[#E16C60] transition flex items-center'
                  href="/userpage/your-orders">
                  <Image className='mr-[12px] transition-all duration-300 ease-in-out group-hover:invert'
                         src='/assets/images/orders.svg' alt='icon' width='24' height='24'/>
                  Your order
                </Link>
                <Link
                  onClick={handleMenuClick}
                  className='text-sm font-bold p-4 border-b border-[#2E2E2E] text-black hover:text-[#E16C60] transition flex items-center'
                  href="/userpage/user-addresses">
                  <Image className='mr-[12px] transition-all duration-300 ease-in-out group-hover:invert'
                         src='/assets/images/house-line.svg' alt='icon' width='24' height='24'/>
                  Your Addresses
                </Link>
                <Link
                  className='text-sm font-bold p-4 border-b border-[#2E2E2E] text-black hover:text-[#E16C60] transition flex items-center'
                  href="#">
                  <Image className='mr-[12px] transition-all duration-300 ease-in-out group-hover:invert'
                         src='/assets/images/cardholder.svg' alt='icon' width='24' height='24'/>
                  Your Payments
                </Link>
                <Link
                  className='text-sm font-bold p-4 border-b border-[#2E2E2E] text-black hover:text-[#E16C60] transition flex items-center'
                  href="#">
                  <Image className='mr-[12px] transition-all duration-300 ease-in-out group-hover:invert'
                         src='/assets/images/cards.svg' alt='icon' width='24' height='24'/>
                  Gift cards
                </Link>
                <Link
                  className='text-sm font-bold p-4 border-b border-[#2E2E2E] text-black hover:text-[#E16C60] transition flex items-center'
                  href="#">
                  <Image className='mr-[12px] transition-all duration-300 ease-in-out group-hover:invert'
                         src='/assets/images/envelope-open.svg' alt='icon' width='24' height='24'/>
                  Your Messages
                </Link>
                <Link
                  className='text-sm font-bold p-4 border-b border-[#2E2E2E] text-black hover:text-[#E16C60] transition flex items-center'
                  href="#">
                  <Image className='mr-[12px] transition-all duration-300 ease-in-out group-hover:invert'
                         src='/assets/images/headset.svg' alt='icon' width='24' height='24'/>
                  Customer Service
                </Link>
                <Link
                  className='text-sm font-bold p-4 border-b border-[#2E2E2E] text-black hover:text-[#E16C60] transition flex items-center'
                  href="#">
                  <Image className='mr-[12px] transition-all duration-300 ease-in-out group-hover:invert'
                         src='/assets/images/sign-out-mini.svg' alt='icon' width='24' height='24'/>
                  Exit
                </Link>
              </nav>
            </div>
        
        {/*(isProfilePages && (isMobile || !showSidebar))*/}
        <div className="flex-[2] w-full flex items-start justify-between min-h-screen p-4">{children}</div>
      </div>
    </Container>
  );
}
