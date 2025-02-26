"use client";

import React, {useState} from 'react';
import Pagination from "@/features/profile/pagination";
import {Input} from "@/components/ui/input";
import Image from "next/image";

const data = [
  {
    imgUrl: "/assets/images/order_item.png",
    text: "Retrospec Solana Yoga Mat 1/2\" Thick w/Nylon Strap for Men & Women - Non Slip Excercise Mat for Yoga, Pilates, Stretching, Floor & Fitness Workouts, Wild Spruce\n" + "In Stock",
    style: '1/2 Inch',
    color: 'Wild Spruce',
    price: '36.02'
  },
];

const ITEMS_PER_PAGE = 4;

const Orders = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [tab, setTab] = useState<string>('Orders')
  const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE);
  
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedData = data.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  
  return (
    <div className='w-full'>
      <div className='relative'>
        <Input type='text' className='border-[#D9D9D9] border-1 bg-white mb-7 pl-9'
               placeholder='Search all orders'/>
        <Image
          src="/assets/images/search-black.svg"
          alt="icon"
          width={16}
          height={16}
          className='absolute top-1/2 left-3 transform -translate-y-1/2'
        />
      </div>
      
      <div>
        <h3 className='hidden sm:blocl font-bold text-[19px] mb-[14px]'>Your Orders</h3>
        <div className="flex flex-col border border-[#7D7D7D] rounded-lg p-2.5 mb-1.5 md:mb-3 bg-white h-[329px]">
          <div className='flex items-center mb-6'>
            <div onClick={() => setTab('Orders')} className={`flex-1 p-2.5 text-[#000000A6] text-[13px] md:text-[16px] leading-[13px] md:leading-[18px] cursor-pointer mr-6 font-semibold rounded ${tab === 'Orders' && 'bg-[#F1F4F7]'}`}>Orders
            </div>
            <div onClick={() => setTab('BuyAgain')} className={`flex-1 p-2.5 text-[#000000A6] text-[13px] md:text-[16px] leading-[13px] md:leading-[18px] cursor-pointer mr-6 font-semibold ${tab === 'BuyAgain' && 'bg-[#F1F4F7]'}`}>Buy Again
            </div>
            <div onClick={() => setTab('notShippedYet')} className={`flex-1 p-2.5 text-[#000000A6] text-[13px] md:text-[16px] leading-[13px] md:leading-[18px] cursor-pointer mr-6 font-semibold rounded ${tab === 'notShippedYet' && 'bg-[#F1F4F7]'}`}>Not Yet Shipped
            </div>
            <div onClick={() => setTab('canceled')} className={`flex-1 p-2.5 text-[#000000A6] text-[13px] md:text-[16px] leading-[13px] md:leading-[18px] cursor-pointer font-semibold ${tab === 'canceled' && 'bg-[#F1F4F7]'}`}>Cancelled Orders
            </div>
          </div>
          
          {paginatedData.map((item, index) => {
            return (
              <div key={index} className='gap-6 border-[#C7C7C7] border-b border-t px-4 py-4 flex items-start justify-between'>
                <Image src={item.imgUrl} alt='img' width='120' height='120' className='mr-6 hidden md:block'/>
                <div className='max-w-[560px]'>
                  <div className='font-semibold text-[13px] leading-4 mb-[18px]'>{item.text}</div>
                  <div className='text-[11px] leading-3'><b>Colour Name:</b> {item.color}</div>
                  <div className='text-[11px] leading-3'><b>Style:</b> {item.style}</div>
                </div>
                <div className='font-bold text-lg'>${item.price}</div>
              </div>
            );
          })}
        </div>
      </div>
      
      <div className='flex items-start justify-end'>
        <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage}/>
      </div>
    </div>
  );
};

export default Orders;