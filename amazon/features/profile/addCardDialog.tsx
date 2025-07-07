"use client";

import React from 'react';
import {useForm} from "react-hook-form";
import {Input} from "@/components/ui/input";
import { Form, FormField, FormItem, FormLabel, FormControl } from "@/components/ui/form";
import {Button} from "@/components/ui/button";
import Image from "next/image";

type AddCardModalProps = {
  setIsOpen: (open: boolean) => void;
};

const AddCardDialog = ({setIsOpen}: AddCardModalProps) => {
  const form = useForm({
    defaultValues: {
      name: '',
      cardNumber: 0,
      cardName: '',
      expired: '',
      CVV: 0
    },
  });
  
  const onSubmit = (data: unknown) => {
    console.log("change password form Data:", data);
  };
  
  return (
    <div className="fixed left-0 top-0 h-screen flex items-center justify-center bg-black bg-opacity-50 w-full">
      <div className="w-full max-w-[361px] md:max-w-[405px] bg-white rounded-xl shadow-lg px-4 md:px-8 py-6 md:py-8 relative">
        <Button variant='ghost' className='absolute top-5 right-5 p-0 w-[20px] h-[20px]' onClick={() => setIsOpen(false)}>
          <Image src='/assets/images/close.svg' alt='icon' width='20' height='20' />
        </Button>
        
        <h2 className="text-[23px] font-bold text-gray-900 text-center mb-[32px]">Add New Card</h2>
        
        <Form {...form}>
          <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="name"
              render={({field}) => (
                <FormItem className="flex w-full items-start flex-col min-w-[329px] md:min-w-[340px] mb-[16px]">
                  <FormLabel className="text-right bg-white font-medium text-[14px]">Name</FormLabel>
                  <FormControl>
                    <Input style={{backgroundColor: '#E8E8E8'}} {...field} type='text' className='bg-[#E8E8E8]'/>
                  </FormControl>
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="cardNumber"
              render={({field}) => (
                <FormItem className="flex w-full items-start flex-col min-w-[329px] md:min-w-[340px] mb-[16px]">
                  <FormLabel className="text-right bg-white font-medium text-[14px]">Card Number</FormLabel>
                  <FormControl>
                    <Input style={{backgroundColor: '#E8E8E8'}} type='number' {...field} className='bg-[#E8E8E8]'/>
                  </FormControl>
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="cardName"
              render={({field}) => (
                <FormItem className="flex w-full items-start flex-col min-w-[329px] md:min-w-[340px] mb-[32px]">
                  <FormLabel className="text-right bg-white font-medium text-[14px]">Cart Name</FormLabel>
                  <FormControl>
                    <Input style={{backgroundColor: '#E8E8E8'}} type='text' {...field} className='bg-[#E8E8E8]'/>
                  </FormControl>
                </FormItem>
              )}
            />
            
            <div className='flex items-center justify-between'>
              <FormField
                control={form.control}
                name="expired"
                render={({field}) => (
                  <FormItem className="flex items-start flex-col w-[50%] mr-4">
                    <FormLabel className="text-right bg-white font-medium text-[14px]">DD/Year</FormLabel>
                    <FormControl>
                      <Input style={{backgroundColor: '#E8E8E8'}} type='text' {...field} className='bg-[#E8E8E8]'/>
                    </FormControl>
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="CVV"
                render={({field}) => (
                  <FormItem className="flex items-start flex-col w-[50%]">
                    <FormLabel className="text-right bg-white font-medium text-[14px]">CVV</FormLabel>
                    <FormControl>
                      <Input style={{backgroundColor: '#E8E8E8'}} type='number' {...field} className='bg-[#E8E8E8]'/>
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
            
            <Button
              className='font-bold text-[16px] text-white bg-[#5A6C8D] w-full !mt-[32px]'
            >
              Add Card
            </Button>
          </form>
        </Form>
      </div>
    </div>
  )
}

export default AddCardDialog;