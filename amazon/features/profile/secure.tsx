"use client";

import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import {Button} from "@/components/ui/button";
import {Switch} from "@/components/ui/switch"
import {Form, FormField, FormItem, FormLabel, FormControl} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import Image from "next/image";
import ChangePasswordDialog from "@/features/profile/changePasswordDialog";

const UserSecure = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [isChangePasswordOpen, setIsChangePasswordOpen] = useState<boolean>(false);
  
  const form = useForm({
    defaultValues: {
      name: "Kolya Userevich",
      email: "user@gmail.com",
      phone: "+380951302300",
      passkey: {},
      password: "*********",
      verification: true,
    },
  });
  
  const onSubmit = (data: unknown) => {
    console.log("Form Data:", data);
  };
  
  const handleEditClick = () => {
    if (isEditing) {
      form.handleSubmit(onSubmit)();
    }
    setIsEditing(!isEditing);
  };
  
  return (
    <>
      <div className='w-full'>
        {
          isEditing && (
            <div className='mb-[24px] text-lg'>If you want to change the name associated with your Onyx customer account,
              you<br/>may do so below. Be sure to click the <b>Save Changes</b> button when you are done.</div>
          )
        }
        <Form {...form}>
          <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="name"
              render={({field}) => (
                <FormItem className="flex w-full items-center justify-between py-[12px] px-[24px] rounded-md bg-white">
                  <FormLabel
                    className="text-right bg-white font-medium text-[16px]">{isEditing ? 'New Name' : 'Name'}</FormLabel>
                  <FormControl>
                    <div className={`relative`}>
                      <Input {...field} disabled={!isEditing}
                             className={`text-right bg-white font-medium text-[16px] w-fit p-0 !mt-0 shadow-none !opacity-100 ${isEditing ? "border-[3px] border-[#5A6C8D] p-[8px] text-left min-w-[341px]" : "border-0"}`}/>
                      
                      {isEditing && field.value && (
                        <button
                          type="button"
                          onClick={() => field.onChange("")} // Clear input value
                          className="absolute right-4 top-1/2 -translate-y-1/2"
                        >
                          <Image src='/assets/images/Close_input.svg' alt='icon' width='16' height='16'/>
                        </button>
                      )}
                    </div>
                  </FormControl>
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="email"
              render={({field}) => (
                <FormItem className="flex w-full items-center justify-between py-[12px] px-[24px] rounded-md bg-white">
                  {
                    isEditing
                      ? <>
                        <div className="flex flex-col items-start">
                          <div className='text-left bg-white font-medium text-[16px] mb-[16px]'>Enter the new email
                            address
                            you would like to associate with your account<br/>below. We will send a One Time Password
                            (OTP)
                            to that address. Name
                          </div>
                          <div className='text-left bg-white text-[16px] '>Current email address:</div>
                        </div>
                      </>
                      : <FormLabel className="text-right bg-white font-medium text-[16px]">Email</FormLabel>
                    
                  }
                  <FormControl>
                    <Input {...field} disabled={!isEditing}
                           className={`text-right bg-white font-medium text-[16px] w-fit p-0 !mt-0 shadow-none !opacity-100 ${isEditing ? "border-[3px] border-[#5A6C8D] p-[8px] text-left" : "border-0"}`}/>
                  </FormControl>
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="phone"
              render={({field}) => (
                <FormItem className="flex w-full items-center justify-between py-[12px] px-[24px] rounded-md bg-white">
                  <FormLabel className="text-right bg-white font-medium text-[16px]">Primary mobile number</FormLabel>
                  <FormControl>
                    <Input {...field} disabled={!isEditing}
                           className={`text-right bg-white font-medium text-[16px] w-fit p-0 !mt-0 shadow-none !opacity-100 ${isEditing ? "border-[3px] border-[#5A6C8D] p-[8px] text-left" : "border-0"}`}/>
                  </FormControl>
                </FormItem>
              )}
            />
            
            <div className='flex w-full items-center justify-between mb-[24px] p-[24px] rounded-md bg-white'>
              <div className="flex flex-col items-start">
                <div className='text-right bg-white font-medium text-[16px] mb-[26px]'>Passkey</div>
                <div className='text-right bg-white text-[13px] '>Sign in the same way you unlock your device by using
                  face,
                  fingerprint or PIN.
                </div>
              </div>
              <input className='text-right bg-white font-medium text-[16px]' type="text" defaultValue='iCloud Keychain'
                     disabled/>
            </div>
            
            <div className='flex w-full items-center justify-between mb-[24px] p-[24px] rounded-md bg-white'>
              <div className="text-right bg-white font-medium text-[16px]">Password</div>
              <div className="flex flex-col items-end">
                <div className='text-right bg-white font-medium text-[16px] mb-[16px]'>*********</div>
                
                <Button
                  variant='ghost'
                  className='pr-0 font-normal hover:bg-white text-[13px] text-[#5A6C8D]'
                  onClick={() => setIsChangePasswordOpen(true)}
                >
                  Change password
                </Button>
              </div>
            </div>
            
            <div className='flex w-full items-center justify-between mb-[24px] p-[24px] rounded-md bg-white'>
              <div className="flex flex-col items-start">
                <div className='text-right bg-white font-medium text-[16px] mb-[26px]'>2-step verification</div>
                <div className='text-right bg-white text-[13px] '>+90 321 321 0000</div>
              </div>
              <Switch id="necessary" defaultChecked aria-label="Necessary"/>
            </div>
            
            <Button variant="ghost"
                    className={`font-bold text-lg ${isEditing ? 'text-[#E16C60] hover:text-[#E16C60' : 'text-black'}`}
                    onClick={handleEditClick}>
              {isEditing ? "Save Changes" : "Edit"}
            </Button>
          </form>
        </Form>
      </div>
      {
        isChangePasswordOpen && <ChangePasswordDialog setIsOpen={setIsChangePasswordOpen}/>
      }
    </>
  );
};

export default UserSecure;