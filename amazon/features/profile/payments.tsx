"use client";

import React, {useState} from 'react';
import Image from "next/image";
import {Button} from "@/components/ui/button";
import AddCardDialog from "@/features/profile/addCardDialog";

const cards = [
  {
    id: 1,
    name: 'Monzo',
    cardNumber: 1111222233334444,
    cardName: 'visa',
    expired: '03/25',
    CVV: 344
  },
  {
    id: 2,
    name: 'Mono',
    cardNumber: 1111222233334444,
    cardName: 'mastercard',
    expired: '11/26',
    CVV: 344
  }
] as const;

const YourPayments = () => {
  const [isCardCreateOpen, setIsCardCreateOpen] = useState<boolean>(false)
  
  return (
    <>
      <div className='bg-[#F0F0F0] p-[30px] lg:p-[40px] md:p-[30px] w-full max-w-[100%] lg:max-w-[812px] md:max-w-fit'>
        <h2 className='mb-[24px] font-bold text-2xl'>Wallet</h2>
        <p className='mb-[24px] text-lg hidden md:block'>Onyx accepts major credit and debit cards.</p>
        
        <div className='flex items-start flex-col lg:flex-row md:flex-col'>
          <div className='flex items-start'>
            {
              cards.map((item) => {
                return (
                  <div key={item.id} className='p-[13.5px] md:p-[16px] rounded-lg bg-white mr-[24px] min-w-[143px] md:min-w-[172px] h-[170px] md:h-[190px]'>
                    <Image className='object-contain mb-[13.5px] md:mb-4 w-[40px] md:w-[48px] h-[40px] md:h-[48px]'
                           src={item?.cardName === 'visa' ? '/assets/images/visa-logo.svg' : '/assets/images/Mastercard.svg'}
                           alt='icon' width='48' height='48'/>
                    <div className='font-medium text-[13px] md:text-[16px] mb-[4px]'>{item?.name}</div>
                    <div
                      className='text-[#545454] font-normal text-[12px] md:text-[14px] mb-[4px]'>XXXX {item?.cardNumber.toString().slice(12)}</div>
                    <div className='text-[#545454] font-normal text-[12px] md:text-[14px] mb-[13px]'>Exp: {item?.expired}</div>
                    
                    <div className='flex items-center justify-between'>
                      <Button
                        variant='ghost'
                        className='p-0 m-0 text-[#37569E] h-fit text-[13.5px] md:text-[16px] hover:bg-transparent'
                      >Edit</Button>
                      
                      <Button
                        variant='ghost'
                        className='p-0 m-0 text-[#37569E] h-fit text-[13.5px] md:text-[16px] hover:bg-transparent'
                      >Remove</Button>
                    </div>
                  </div>
                )
              })
            }
          </div>
          
          <Button
            onClick={() => setIsCardCreateOpen(true)}
            variant='ghost'
            className='m-0 flex flex-col items-end p-[16px] rounded-lg bg-white mr-[24px] min-w-[143px] md:min-w-[172px] h-[94px] md:h-[112px] mt-[13px] lg:mt-0 md:mt-[13px]'
          >
            <Image className='mb-0 md:mb-[16px]' src='/assets/images/caret-right-mini.svg' alt='icon' width='24' height='24'/>
            
            <p className='text-[13px] md:text-[16px] font-medium w-full text-left'>Add a credit or<br/>debit card</p>
          </Button>
        </div>
      </div>
      
      {
        isCardCreateOpen && <AddCardDialog setIsOpen={setIsCardCreateOpen}/>
      }
    </>
  )
}

export default YourPayments;