"use client";

import React, {Fragment, useState} from 'react';
import {Button} from "@/components/ui/button";
import RedeemGiftCardDialog from "@/features/profile/redeemGiftCard";

const cards = [
  {
    date: '11-12-2025',
    description: 'For pretty',
    amount: '45',
    closingBalance: '21-12-2098'
  },
  {
    date: '11-08-2025',
    description: 'For me',
    amount: '5',
    closingBalance: '21-12-2038'
  }
]

const GiftCards = () => {
  const [isRedeemGiftCard, setIsRedeemGiftCard] = useState<boolean>(false)
  
  return (
    <>
      <div className='w-full'>
        <div className='flex items-center justify-between bg-white p-6 mb-6 rounded-lg'>
          <div>Your Gift Card Balance:</div>
          <div className='text-[#179D00] font-bold text-[23px]'>0.00</div>
        </div>
        
        <div className='flex items-center justify-between mb-[90px] lg:mb-[131px]'>
          <Button className='font-bold text-[12px] md:text-[19px] pt-0 pl-0' variant='ghost'>Reload Your Balance</Button>
          <Button onClick={() => setIsRedeemGiftCard(true)} className='font-bold text-[12px] md:text-[19px] pt-0 pr-0' variant='ghost'>Redeem
            a Gift Card</Button>
        </div>
        
        <div>
          <h3 className='font-bold text-[19px] leading-[21px] mb-[14px]'>Gift Card Activity</h3>
          <div className="grid grid-cols-4  gap-6 border border-[#7D7D7D] rounded-lg p-2.5 mb-6">
            <div className='bg-white rounded font-bold text-[13px] lg:text-[16px] p-2 md:p-2.5 h-fit lg:h-[unset]'>Date</div>
            <div className='bg-white rounded font-bold text-[13px] lg:text-[16px] p-2 md:p-2.5 h-fit lg:h-[unset]'>Description</div>
            <div className='bg-white rounded font-bold text-[13px] lg:text-[16px] p-2 md:p-2.5 h-fit lg:h-[unset]'>Amount</div>
            <div className='bg-white rounded font-bold text-[13px] lg:text-[16px] p-2 md:p-2.5 h-fit lg:h-[unset]'>Closing balance</div>
            {cards.length === 0 ? (
              <div className='text-[14px] md:text-[16px] font-normal'>You have no gift card activity.</div> // Replace with your custom message
            ) : (
              cards.map((item, index) => {
                return (
                  <Fragment key={index}>
                    <div className='text-[13px] lg:text-[16px] leading-4 '>{item?.date}</div>
                    <div className='text-[13px] lg:text-[16px] leading-4 '>{item?.description}</div>
                    <div className='text-[13px] lg:text-[16px] leading-4 '>{item?.amount}</div>
                    <div className='text-[13px] lg:text-[16px] leading-4 '>{item?.closingBalance}</div>
                  </Fragment>
                );
              })
            )}
          </div>
          
          <p className='text-[11px] leading-[13px] font-normal'>
            Your balance will never expire. We&#39;ll automatically apply your balance to eligible orders when you
            checkout. If you would rather not use your balance, you can deselect it in the Payment Selection step
            of<br/>checkout. Limitations: Your Gift Card Balance cannot be transferred to other accounts or used to
            purchase other gift cards. See the <span className='text-[#37569E] cursor-pointer'>Onyx.com Gift Card terms and conditions.</span>
          </p>
        </div>
      </div>
      
      {
        isRedeemGiftCard && <RedeemGiftCardDialog setIsOpen={setIsRedeemGiftCard}/>
      }
    </>
  );
};

export default GiftCards;