import React from 'react';
import {useForm} from "react-hook-form";
import {Input} from "@/components/ui/input";
import { Form, FormField, FormItem, FormLabel, FormControl } from "@/components/ui/form";
import {Button} from "@/components/ui/button";
import Image from "next/image";

type RedeemGiftModalProps = {
  setIsOpen: (open: boolean) => void;
};

const RedeemGiftCardDialog = ({setIsOpen}: RedeemGiftModalProps) => {
  const form = useForm({
    defaultValues: {
      code: "",
    },
  });
  
  const onSubmit = (data: unknown) => {
    console.log("gift card code Data:", data);
  };
  
  return (
    <div className="fixed left-0 top-0 h-screen flex items-center justify-center bg-black bg-opacity-50 w-full">
      <div className="w-full max-w-[405px] bg-white rounded-xl shadow-lg px-8 py-8 relative">
        <Button variant='ghost' className='absolute top-5 right-5 p-0 w-[20px] h-[20px]' onClick={() => setIsOpen(false)}>
          <Image src='/assets/images/close.svg' alt='icon' width='20' height='20' />
        </Button>
        
        <h2 className="text-[23px] font-bold text-gray-900 text-center mb-[32px]">Redeem a gift card</h2>
        
        <Form {...form}>
          <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="code"
              render={({field}) => (
                <FormItem className="flex w-full items-start flex-col min-w-[340px] mb-[16px]">
                  <FormLabel className="text-right bg-white font-medium text-[14px]">Enter claim code (dashes not
                    required)</FormLabel>
                  <FormControl>
                    <Input {...field} type='text' className='bg-[#E8E8E8]'/>
                  </FormControl>
                </FormItem>
              )}
            />
            
            <p className='text-[#37569E] text-[13px] font-normal cursor-pointer'>How do I find the claim code?</p>
            
            <div className="absolute top-1/2 right-[-330px] max-w-[307px] bg-white transform -translate-y-1/2 p-3
                  after:content-[''] after:absolute after:-left-2 after:top-1/2 after:w-5 after:h-5
                  after:bg-white after:rotate-45 after:-translate-y-1/2 after:-z-10 !z-20 rounded-lg">
              <p className='text-[11px] mb-[8px]'>Once applied to your Onyx account, the entire gift card amount will be added to
                your gift card
                balance.</p>
              <p className='text-[11px] mb-[8px]'>Your gift card balance, including Onyx Reload, does not expire and can’t be
                transferred to other
                accounts, used to buy other gift cards, or, as except as required by law, redeemed for cash.</p>
              <p className='text-[11px]'>If you recently paid for part of a purchase using a Gift Card, and that item
                has not yet shipped, then
                any new funds added to your Gift Card balance up to the full purchase amount will be applied to that
                order once it’s shipped. Review terms and conditions.</p>
            </div>
            
            <Button
              className='font-bold text-[16px] text-white bg-[#5A6C8D] w-full !my-[32px]'
            >
              Apply to your balance
            </Button>
            
            <div className='flex items-center bg-[#F1F4F7] rounded-lg p-[16px] !m-0'>
              <Image className='mr-[10px]' src='/assets/images/info.svg' alt='info icon' width='46' height='46'/>
              
              <div className='text-[13px] font-normal'>
                If you are having issues redeeming your<br/>gift card, visit our <span
                className='text-[#37569E] text-[13px] font-normal cursor-pointer'>Gift Card Redemption Issues</span>help
                page.
                Read about other<br/> <span className='text-[#37569E] text-[13px] font-normal cursor-pointer'>common gift card issues</span> or <span
                className='text-[#37569E] text-[13px] font-normal cursor-pointer'>contact us.</span>
              </div>
            </div>
          </form>
        </Form>
      </div>
    </div>
  )
}

export default RedeemGiftCardDialog;