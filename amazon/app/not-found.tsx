import React from 'react';

import { Container } from "@/components/shared/container";
import Image from "next/image";

const NotFound = () => {
  return(
    <Container className="flex flex-row items-center justify-center py-2 w-full">
      <div className='w-full h-[calc(100vh-240px)] flex items-start justify-center relative'>
        <img src={'/404/404.svg'} alt='not found' className='max-w-[401px] md:max-w-[612px] h-[336px] md:h-[305px] mt-[96px]'/>
        
        <Image src={'/404/Group13.svg'} width='105' height='75' alt='not found' className='w-[120px] lg:w-[120px]  h-[90px] lg:h-[790x] absolute top-[40px] left-[122px] hidden md:flex'/>
        <Image src={'/404/Group14.svg'} width='105' height='75' alt='not found' className='w-[120px] lg:w-[120px]  h-[90px] lg:h-[790x] absolute top-[136px] right-[80px] hidden md:flex'/>
        <Image src={'/404/Group20.svg'} width='105' height='75' alt='not found' className='w-[115px] lg:w-[115px]  h-[94px] lg:h-[94px] absolute top-[50%] right-[0px] md:right-[200px] lg:right-[360px]'/>
        <Image src={'/404/Group10.svg'} width='255' height='228' alt='not found' className='w-[97px] lg:w-[255px]  h-[97px] lg:h-[228px] absolute bottom-0 right-0'/>
        <Image src={'/404/Group11.svg'} width='553' height='450' alt='not found' className='w-[283px] lg:w-[553px]  h-[257px] lg:h-[450px] absolute bottom-[-30px] lg:bottom-0  left-[-30px] lg:left-0'/>
      </div>
    </Container>
  )
};

export default NotFound;