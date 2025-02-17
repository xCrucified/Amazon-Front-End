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
        
        <div className='flex items-center justify-between mb-[131px]'>
          <Button className='font-bold text-[19px] pt-0' variant='ghost'>Reload Your Balance</Button>
          <Button onClick={() => setIsRedeemGiftCard(true)} className='font-bold text-[19px] pt-0' variant='ghost'>Redeem
            a Gift Card</Button>
        </div>
        
        <div>
          <h3 className='font-bold text-[19px]'>Gift Card Activity</h3>
          <div className="grid grid-cols-4  gap-6 border border-[#7D7D7D] rounded-lg p-2.5 mb-6">
            <div className='bg-white rounded font-bold text-[16px] p-2.5'>Date</div>
            <div className='bg-white rounded font-bold text-[16px] p-2.5'>Description</div>
            <div className='bg-white rounded font-bold text-[16px] p-2.5'>Amount</div>
            <div className='bg-white rounded font-bold text-[16px] p-2.5'>Closing balance</div>
            {cards.length === 0 ? (
              <div className='text-[16px] font-normal'>You have no gift card activity.</div> // Replace with your custom message
            ) : (
              cards.map((item, index) => {
                return (
                  <Fragment key={index} >
                    <div>{item?.date}</div>
                    <div>{item?.description}</div>
                    <div>{item?.amount}</div>
                    <div>{item?.closingBalance}</div>
                  </Fragment>
                );
              })
            )}
          </div>
          
          <p className='text-[11px] font-normal'>
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