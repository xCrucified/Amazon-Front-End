"use client";

import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import {Button} from "@/components/ui/button";
import {Switch} from "@/components/ui/switch"
import {Form, FormField, FormItem, FormLabel, FormControl} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import Image from "next/image";
import ChangePasswordDialog from "@/features/profile/changePasswordDialog";
import {Accordion, AccordionItem, AccordionTrigger, AccordionContent} from "@/components/ui/accordion";
import Link from "next/link";

const UserSecure = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [isChangePasswordOpen, setIsChangePasswordOpen] = useState<boolean>(false);
  const [addPassKey, setAddPassKey] = useState<boolean>(false)
  
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
                          onClick={() => field.onChange("")}
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
                    <div className="relative">
                      <Input {...field} disabled={!isEditing}
                             className={`text-right bg-white font-medium text-[16px] w-fit p-0 !mt-0 shadow-none !opacity-100 ${isEditing ? "border-[3px] border-[#5A6C8D] p-[8px] text-left" : "border-0"}`}/>
                      
                      {isEditing && field.value && (
                        <button
                          type="button"
                          onClick={() => field.onChange("")}
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
              name="phone"
              render={({field}) => (
                <FormItem className="flex w-full items-center justify-between py-[12px] px-[24px] rounded-md bg-white">
                  <FormLabel className="text-right bg-white font-medium text-[16px]">Primary mobile number</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input {...field} disabled={!isEditing}
                             className={`text-right bg-white font-medium text-[16px] w-fit p-0 !mt-0 shadow-none !opacity-100 ${isEditing ? "border-[3px] border-[#5A6C8D] p-[8px] text-left" : "border-0"}`}/>
                      
                      {isEditing && field.value && (
                        <button
                          type="button"
                          onClick={() => field.onChange("")}
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
            
            <div className='flex w-full flex-col items-center justify-between mb-[24px] p-[24px] rounded-md bg-white'>
              <div className='w-full flex items-center justify-between'>
                <div className="flex flex-col items-start">
                  {
                    isEditing && (
                      <p className='max-w-[550px] mb-6 font-normal text-[16px] leading-[18px]'>Sharing this account with
                        someone who wants to sign in with a passkey? They&#39;ll need to set up their own.</p>
                    )
                  }
                  <div className='text-right bg-white font-medium text-[16px] mb-[26px]'>Passkey</div>
                  
                  {
                    !isEditing && (
                      <div className='text-right bg-white text-[13px] '>Sign in the same way you unlock your device by
                        using face, fingerprint or PIN.</div>
                    )
                  }
                </div>
                
                <div className='flex items-center'>
                  <Image src='/assets/images/icon_apple.svg' alt='icon' width='28' height='32'
                         className='object-contain mr-3'/>
                  <div className='flex items-start flex-col'>
                    <div className='text-right bg-white font-medium text-[16px] leading-4 mb-3'>iCloud Keychain</div>
                    <div className='text-right bg-white font-medium text-[13px] leading-3 text-[#0000008C]'>Set up: Jan.
                      18, 2025
                    </div>
                  </div>
                  {isEditing &&
                    <Button className='hover:bg-transparent' variant='ghost'>
                      <Image src='/assets/images/trash.svg' alt='icon' width='24' height='24'/>
                    </Button>
                  }
                </div>
              </div>
              {
                isEditing && (
                  <div className='w-full flex items-center justify-between'>
                    <div className='text-xs font-semibold'>If you want to add a passkey, use a different cloud service
                      account (for example, an Apple ID or Google account).
                    </div>
                    
                    <Button
                      variant='outline'
                      className='rounded-3xl text-[#5A6C8D] font-bold text-[16px] !border-3 !border-[#5A6C8D] mr-[56px]'
                      onClick={() => setAddPassKey(!addPassKey)}
                    >
                      Add a passkey
                    </Button>
                  </div>
                )
              }
              
              {
                addPassKey && (
                  <div className='w-full flex items-start justify-center flex-col mt-6'>
                    <div
                      className='w-full border-[#B8B8B8] border-b border-t p-2.5 text-[13px] pl-0 leading-[15px] mb-2'>More
                      about passkeys:
                    </div>
                    <Accordion.Root type="multiple" defaultValue={["item-1", "item-2", "item-3", "item-4"]}
                                    className='w-full'>
                      <AccordionItem value="item-1" className='w-full'>
                        <AccordionTrigger
                          className='w-full pl-0 flex items-center justify-between text-[16px] leading-[18px] !pb-2 border-[#B8B8B8] border-b font-bold cursor-pointer'>Use
                          passkey on different devices, including a computer</AccordionTrigger>
                        <AccordionContent className='pl-0'>
                          <p className='text-[14px] leading-[16px] font-medium'>After you set up a passkey, it is saved in
                            your cloud service account (example: Apple or Google account). You will be able to use it on
                            all devices associated with that account.</p>
                          <br/>
                          <p className='text-[14px] leading-[16px] font-medium'>You can also sign in with the passkey on
                            devices that are not associated with your cloud service account, but the steps are different.
                            For details, go to <Link href='#' className='text-[#0055FF]'>Apple’s help page</Link> or <Link
                              href='#' className='text-[#0055FF]'>Google&#39;s help page</Link>.</p>
                        </AccordionContent>
                      </AccordionItem>
                      
                      <AccordionItem value="item-2" className='w-full'>
                        <AccordionTrigger
                          className='w-full pl-0 flex items-center justify-between text-[16px] leading-[18px] !pb-2 border-[#B8B8B8] border-b font-bold cursor-pointer'>Sharing
                          passkeys with friends and family</AccordionTrigger>
                        <AccordionContent className='pl-0'>
                          <p className='text-[14px] leading-[16px] font-medium'>If people you share this account with want
                            to sign in with a passkey, they need to set up their own passkey on this page. <br/><br/>If
                            they do not want to set up their own passkey, they can choose to sign in with a passkey from
                            another device. As long as your phone is near their devices, the two devices will be connected
                            through Bluetooth and you will be prompted to approve the sign-in on your phone.</p>
                        </AccordionContent>
                      </AccordionItem>
                      
                      <AccordionItem value="item-3" className='w-full'>
                        <AccordionTrigger
                          className='w-full pl-0 flex items-center justify-between text-[16px] leading-[18px] !pb-2 border-[#B8B8B8] border-b font-bold cursor-pointer'>Use
                          passkeys with 2-step verification.</AccordionTrigger>
                        <AccordionContent className='pl-0'>
                          <p className='text-[14px] leading-[16px] font-medium'>If you have turned on 2-step verification
                            and used a passkey instead of a password to sign in, you will still need to verify a one-time
                            code after signing in with the passkey.</p>
                        </AccordionContent>
                      </AccordionItem>
                      
                      <AccordionItem value="item-4" className='w-full'>
                        <AccordionTrigger
                          className='w-full pl-0 flex items-center justify-between text-[16px] leading-[18px] !pb-2 border-[#B8B8B8] border-b font-bold cursor-pointer'>Privacy
                          considerations</AccordionTrigger>
                        <AccordionContent className='pl-0'>
                          <ul className="list-disc ml-5">
                            <li className='text-[14px] leading-[16px] font-medium mb-4'>Some users may be surprised when a
                              biometric authentication suddenly appears on Amazon and think that it is sending sensitive
                              information to the server. With passkeys, the user’s biometric information is never revealed
                              to the website or the app. Biometric material never leaves the user’s personal device.
                            </li>
                            <li className='text-[14px] leading-[16px] font-medium mb-4'>Passkeys on their own do not allow
                              tracking users or devices between sites. The same passkey is never used with more than one
                              site. Passkey protocols are carefully designed so that no information shared with sites can
                              be used as a tracking vector.
                            </li>
                            <li className='text-[14px] leading-[16px] font-medium'>Passkey managers protect passkeys from
                              unauthorized access and use. Only the user can access and use them.
                            </li>
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion.Root>
                  </div>
                )
              }
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