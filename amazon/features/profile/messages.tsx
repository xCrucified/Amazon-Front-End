"use client";

import React, {useState} from 'react';
import Pagination from "@/features/profile/pagination";
import {Button} from "@/components/ui/button";
import Image from "next/image";

const data = [
  { date: "2024-02-10", text: "You have set up a passkey for Onyx 1" },
  { date: "2024-02-11", text: "You have set up a passkey for Onyx 2" },
  { date: "2024-02-12", text: "You have set up a passkey for Onyx 3" },
  { date: "2024-02-13", text: "You have set up a passkey for Onyx 4" },
  { date: "2024-02-14", text: "You have set up a passkey for Onyx 5" },
  { date: "2024-02-15", text: "You have set up a passkey for Onyx 6" },
  { date: "2024-02-16", text: "You have set up a passkey for Onyx 7" },
  { date: "2024-02-17", text: "You have set up a passkey for Onyx 8" },
  { date: "2024-02-18", text: "You have set up a passkey for Onyx 9" },
];

const ITEMS_PER_PAGE = 4;

const YourMessages = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [tab, setTab] = useState<string>('All Messages')
  const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE);
  
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedData = data.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  
  return (
    <div className='w-full'>
      <div className='border-[#37569E] border-2 rounded-xl flex items-center p-4 bg-[#EFF4FE] mb-6'>
        <Image src='/assets/images/info-full.svg' alt='icon' width='40' height='40' className='object-contain mr-4'/>
        <div>
          <h3 className='font-bold text-[16px] mb-1'>This page is going to be deprecated. If you want to view your messages with seller, please click here:</h3>
          <p className='text-[#37569E]'>Buyer/Seller Messages</p>
        </div>
      </div>
      <div>
        <h3 className='font-bold text-[19px] mb-[14px]'>Message centre</h3>
        <div className="flex flex-col border border-[#7D7D7D] rounded-lg p-2.5 mb-3 bg-white h-[329px]">
          <div className='flex items-center mb-6'>
            <div onClick={() => setTab('All Messages')} className={`flex-1 p-2.5 text-[#000000A6] text-[16px] cursor-pointer mr-6 font-semibold rounded ${tab === 'All Messages' && 'bg-[#F1F4F7]'}`}>All Messages</div>
            <div onClick={() => setTab('Buyer/Seller')} className={`flex-1 p-2.5 text-[#000000A6] text-[16px] cursor-pointer font-semibold ${tab === 'Buyer/Seller' && 'bg-[#F1F4F7]'}`}>Buyer/Seller Messages</div>
          </div>
          {paginatedData.map((item, index) => {
            return (
              <div key={index} className='gap-6 border-[#C7C7C7] border-b px-4 py-4 flex items-center justify-between'>
                <div className='font-semibold text-xs'>{item?.text}</div>
                <div className='text-right text-[#000000A6] font-semibold text-xs'>{item?.date}</div>
              </div>
            );
          })}
        </div>
      </div>
      
      <div className='flex items-center justify-between'>
        <Button variant='ghost' className='text-[#5A6C8D] p-0'>Sent Messages</Button>
        <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage}/>
      </div>
    </div>
  );
};

export default YourMessages;