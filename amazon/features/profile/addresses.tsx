"use client";

import React, {useState} from 'react';
import Image from "next/image";
import {Button} from "@/components/ui/button";
import AddAddressDialog from "@/features/profile/addAddressDialog";

const cards = [
  {
    id: 1,
    fullName: 'Home',
    phoneNumber: '0951302300',
    country: 'Ukraine',
    city: 'Ivano-Frankivsk',
    street: 'Shevchenka',
    apt: '48',
    province: '',
    postalCode: ''
  },
] as const;

const Addresses = () => {
  const [isAddressCreateOpen, setIsAddressCreateOpen] = useState<boolean>(false)
  
  return (
    <>
      <div className='bg-[#F0F0F0] p-[30px] md:p-[40px] w-full max-w-[100%] lg:max-w-[812px] md:max-w-fit rounded-xl'>
        <h2 className='mb-[18px] md:mb-[24px] font-bold text-[17px] md:text-2xl'>Your addresses</h2>
        
        <div className='flex items-start'>
          {
            cards.map((item) => {
              return (
                <div key={item.id} className='p-[12px] md:p-[16px] rounded-lg bg-white mr-[24px] min-w-[129px] md:min-w-[172px] h-[110px] md:h-[145px] flex flex-col justify-end border-[#8E9DBC] border-[3px]'>
                  <div className='font-medium text-[12px] md:text-[16px] mb-[4px]'>{item?.fullName}</div>
                  <div className='text-[#545454] font-normal text-[10.5px] md:text-[14px] mb-[4px]'>
                    {item?.country}, {item?.city}.<br/>{item?.street},{item?.apt}
                  </div>
                  
                  <div className='flex items-center justify-between'>
                    <Button
                      variant='ghost'
                      className='p-0 m-0 text-[#37569E] h-fit text-[12px] md:text-[16px] hover:bg-transparent'
                    >Edit</Button>
                    
                    <Button
                      variant='ghost'
                      className='p-0 m-0 text-[#37569E] h-fit text-[12px] md:text-[16px] hover:bg-transparent'
                    >Remove</Button>
                  </div>
                </div>
              )
            })
          }
          
          <Button
            onClick={() => setIsAddressCreateOpen(true)}
            variant='ghost'
            className='m-0 flex flex-col items-end p-[12px] md:p-[16px] rounded-lg bg-white mr-[24px] min-w-[129px] md:min-w-[172px] h-[70px] md:h-[112px]'
          >
            <Image className='mb-[16px]' src='/assets/images/plus.svg' alt='icon' width='24' height='24'/>
            
            <p className='text-[12px] md:text-[16px] font-medium w-full text-left'>Add Address</p>
          </Button>
        </div>
      </div>
      
      {
        isAddressCreateOpen && <AddAddressDialog setIsOpen={setIsAddressCreateOpen}/>
      }
    </>
  )
}

export default Addresses;