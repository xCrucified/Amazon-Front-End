'use client';

import React from 'react';
import {useParams} from "next/navigation";
import {topics} from "@/features/profile/customerService";
import {Input} from "@/components/ui/input";
import Link from "next/link";
import {categories} from "@/features/profile/customerService";
import {Button} from "@/components/ui/button";
import Image from "next/image";

const HelpCenterArticle = () => {
  const { id } = useParams();
  if(!id) return;
  
  const topic =
    topics.find((t) => t.id.toString() === id.toString());
  
  return (
    <div className='w-full'>
      <div className='flex items-center mt-[48px]'>
        <Link href='/' className='flex items-center text-[16px] text-black'>
          <Image className='mr-[9px]' src='/assets/images/Corner-left-up.svg' alt='icon' width='20' height='20'/>
          Main
          <Image src='/assets/images/caret-right-mini.svg' alt='icon' width='20' height='20'/>
        </Link>
        <Link href='/userpage' className='flex items-center text-[16px] ml-[9px]'>
          Shipping and Delivery
          <Image src='/assets/images/caret-right-mini.svg' alt='icon' width='20' height='20'/>
        </Link>
        
        <Link href='/userpage' className='flex items-center text-[#00000073] text-[16px] ml-[9px]'>
          Where&#39;s My Stuff?
          <Image src='/assets/images/caret-right-mini.svg' alt='icon' width='20' height='20'/>
        </Link>
      </div>
      
      <h2 className='font-bold text-sm text-[32px] mb-6 mt-[32px]'>Help and customer service</h2>
      
      <div className='flex items-start'>
        <div className='flex-1 max-w-[259px] mr-11'>
          <h3 className='border-b border-[#7D7D7D8C] pb-2.5 font-bold mb-4 text-[16px]'>Where My stuff ?</h3>
          <div className='flex items-start flex-col'>
            {
              categories.slice(8).map((item: string, index: number) => {
                return (
                  <Link className='mb-3 font-medium text-[14px]' key={index} href='#'>{item}</Link>
                )
              })
            }
          </div>
        </div>
        
        <div className='flex-[2] max-w-[841px]'>
          <div className='relative'>
            <Input type='text' className='border-[#D9D9D9] border-1 bg-white mb-10 pl-9' placeholder='Find more solutions"'/>
            <Image
              src="/assets/images/search-black.svg"
              alt="icon"
              width={16}
              height={16}
              className='absolute top-1/2 left-3 transform -translate-y-1/2'
            />
          </div>
          
          <div className='mb-12'>
            <h1 className='text-5xl text-bold mb-6'>{topic?.title}</h1>
            <p className='text-[14px] font-normal'>{topic?.desc}</p>
          </div>
          
          <div className='bg-white max-w-[327px] p-6 rounded-2xl border border-black'>
            <h3 className='font-bold text-[23px] mb-4'>Was this information helpful?</h3>
            
            <div className='flex items-center'>
              <Button className='mr-4' variant='secondary'>Yes</Button>
              <Button variant='secondary'>No</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HelpCenterArticle;