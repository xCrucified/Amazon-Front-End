"use client";

import React from 'react';
import {useForm} from "react-hook-form";
import {Input} from "@/components/ui/input";
import {Form, FormField, FormItem, FormLabel, FormControl} from "@/components/ui/form";
import {Button} from "@/components/ui/button";
import Image from "next/image";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";

type AddCardModalProps = {
  setIsOpen: (open: boolean) => void;
};

const countries = [
  { id: 1, name: "Ukraine" },
  { id: 2, name: "Poland" },
]


const AddAddressDialog = ({setIsOpen}: AddCardModalProps) => {
  const form = useForm({
    defaultValues: {
      fullName: '',
      phoneNumber: '',
      country: '',
      city: '',
      street: '',
      apt: '',
      province: '',
      postalCode: ''
    },
  });
  
  const onSubmit = (data: unknown) => {
    console.log("change password form Data:", data);
  };
  
  return (
    <div className="fixed left-0 top-0 h-screen flex items-center justify-center bg-black bg-opacity-50 w-full">
      <div className="w-full max-w-[405px] bg-white rounded-xl shadow-lg px-8 py-8 relative max-h-[calc(100vh-30px)] overflow-y-scroll scrollbar">
        <Button variant='ghost' className='absolute top-5 right-5 p-0 w-[20px] h-[20px]'
                onClick={() => setIsOpen(false)}>
          <Image src='/assets/images/close.svg' alt='icon' width='20' height='20'/>
        </Button>
        
        <h2 className="text-[23px] font-bold text-gray-900 text-center mb-[32px]">Add a new address</h2>
        
        <Form {...form}>
          <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
            <div className="text-left bg-white font-medium text-[14px]">Country/Region</div>
            <Select>
              <SelectTrigger className="border-2 !mt-2">
                <SelectValue placeholder={countries[0].name}/>
              </SelectTrigger>
              <SelectContent>
                {countries.map((item) => (
                  <SelectItem key={item.id} value={item.name}>
                    {item.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            
            <FormField
              control={form.control}
              name="fullName"
              render={({field}) => (
                <FormItem className="flex w-full items-start flex-col min-w-[340px] mb-[16px]">
                  <FormLabel className="text-right bg-white font-medium text-[14px]">Full name</FormLabel>
                  <FormControl>
                    <Input {...field} type='text' className='bg-[#E8E8E8]' placeholder='First and last name'/>
                  </FormControl>
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="phoneNumber"
              render={({field}) => (
                <FormItem className="flex w-full items-start flex-col min-w-[340px] mb-[16px]">
                  <FormLabel className="text-right bg-white font-medium text-[14px]">Phone number</FormLabel>
                  <FormControl>
                    <Input type='text' {...field} className='bg-[#E8E8E8]'/>
                  </FormControl>
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="street"
              render={({field}) => (
                <FormItem className="flex w-full items-start flex-col min-w-[340px] mb-[32px]">
                  <FormLabel className="text-right bg-white font-medium text-[14px]">address</FormLabel>
                  <FormControl>
                    <Input placeholder='Street address or P.O. Box' type='text' {...field} className='bg-[#E8E8E8]'/>
                  </FormControl>
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="apt"
              render={({field}) => (
                <FormItem className="flex items-start flex-col min-w-[340px] mb-[32px]">
                  <FormControl>
                    <Input placeholder='Apt, Suite, Unit, Building' type='text' {...field} className='bg-[#E8E8E8]'/>
                  </FormControl>
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="city"
              render={({field}) => (
                <FormItem className="flex items-start flex-col min-w-[340px] mb-[32px]">
                  <FormLabel className="text-right bg-white font-medium text-[14px]">City</FormLabel>
                  <FormControl>
                    <Input type='text' {...field} className='bg-[#E8E8E8]'/>
                  </FormControl>
                </FormItem>
              )}
            />
            
            <div className="text-left bg-white font-medium text-[14px]">Province/Territory</div>
            <Select>
              <SelectTrigger className="border-2 !mt-2">
                <SelectValue/>
              </SelectTrigger>
              <SelectContent>
                {countries.map((item) => (
                  <SelectItem key={item.id} value={item.name}>
                    {item.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            
            <FormField
              control={form.control}
              name="postalCode"
              render={({field}) => (
                <FormItem className="flex items-start flex-col min-w-[340px]">
                  <FormLabel className="text-right bg-white font-medium text-[14px]">Postal code</FormLabel>
                  <FormControl>
                    <Input type='text' {...field} className='bg-[#E8E8E8]'/>
                  </FormControl>
                </FormItem>
              )}
            />
            
            <Button className='font-bold text-[16px] text-white bg-[#5A6C8D] w-full !mt-[32px]'>
              Add Card
            </Button>
          </form>
        </Form>
      </div>
    </div>
  )
}

export default AddAddressDialog;