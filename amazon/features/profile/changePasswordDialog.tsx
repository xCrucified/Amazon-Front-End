import React from 'react';
import {useForm} from "react-hook-form";
import {Input} from "@/components/ui/input";
import { Form, FormField, FormItem, FormLabel, FormControl } from "@/components/ui/form";
import {Button} from "@/components/ui/button";
import Image from "next/image";

type ChangePasswordModalProps = {
  setIsOpen: (open: boolean) => void;
};

const ChangePasswordDialog = ({setIsOpen}: ChangePasswordModalProps) => {
  const form = useForm({
    defaultValues: {
      password: "",
      newPassword: "",
      repeatPassword: ""
    },
  });
  
  const onSubmit = (data: unknown) => {
    console.log("change password form Data:", data);
  };
  
  return (
    <div className="fixed left-0 top-0 h-screen flex items-center justify-center bg-black bg-opacity-50 w-full">
      <div className="w-full max-w-[380px] md:max-w-[405px] bg-white rounded-xl shadow-lg px-4 md:px-8 py-8 relative">
        <Button variant='ghost' className='absolute top-5 right-5 p-0 w-[20px] h-[20px]' onClick={() => setIsOpen(false)}>
          <Image src='/assets/images/close.svg' alt='icon' width='20' height='20' />
        </Button>
        
        <h2 className="text-[23px] font-bold text-gray-900 text-center mb-[32px]">Change Password</h2>
        
        <Form {...form}>
          <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="password"
              render={({field}) => (
                <FormItem className="flex w-full items-start flex-col min-w-[340px] mb-[16px]">
                  <FormLabel className="text-right bg-white font-medium text-[14px]">Current Password:</FormLabel>
                  <FormControl>
                    <Input style={{backgroundColor: '#E8E8E8'}} {...field} type='password' className='bg-[#E8E8E8]'/>
                  </FormControl>
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="newPassword"
              render={({field}) => (
                <FormItem className="flex w-full items-start flex-col min-w-[340px] mb-[16px]">
                  <FormLabel className="text-right bg-white font-medium text-[14px]">Current Password:</FormLabel>
                  <FormControl>
                    <Input style={{backgroundColor: '#E8E8E8'}} type='password' {...field} className='bg-[#E8E8E8]'/>
                  </FormControl>
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="repeatPassword"
              render={({field}) => (
                <FormItem className="flex w-full items-start flex-col min-w-[340px] mb-[32px]">
                  <FormLabel className="text-right bg-white font-medium text-[14px]">Current Password:</FormLabel>
                  <FormControl>
                    <Input style={{backgroundColor: '#E8E8E8'}} type='password' {...field} className='bg-[#E8E8E8]'/>
                  </FormControl>
                </FormItem>
              )}
            />
            
            <Button
              className='font-bold text-[16px] text-white bg-[#5A6C8D] w-full !my-[32px]'
            >
              Save Changes
            </Button>
            
            <div className='flex items-center bg-[#F1F4F7] rounded-lg p-[16px] !m-0'>
              <Image className='mr-[10px]' src='/assets/images/info.svg' alt='info icon' width='46' height='46'/>
              
              <div className='text-[14px] font-normal'>
                Lost or stolen device? Unusual activity?<br/>
                <span className='text-[#37569E] text-[14px] font-normal cursor-pointer'>Secure your account</span> instead
              </div>
            </div>
          </form>
        </Form>
      </div>
    </div>
  )
}

export default ChangePasswordDialog;