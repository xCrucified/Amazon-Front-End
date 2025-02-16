import React from 'react';
import {Input} from "@/components/ui/input";
import Link from "next/link";
import Image from "next/image";

export const categories = [
  "Electronics Accessories & Supplies",
  "Camera & Photo",
  "Vehicle Electronics",
  "Cell Phones & Accessories",
  "Computers & Accessories",
  "eBook Readers & Accessories",
  "GPS & Navigation",
  "Headphones, Earbuds & Accessories",
  "Audio & Home Theatre",
  "Household Batteries",
  "Office Electronics",
  "Portable Audio & Video",
  "Electronics Power Accessories"
];

export const topics = [
  {
    id: 1,
    title: "Find a missing package that shows as 'Delivered'",
    desc: "Most packages arrive on time, but sometimes tracking may show as 'delivered' even when you haven't received it. Check your surroundings, ask neighbors, or contact the carrier for more details. If you still can't find your package, you may need to file a claim or request a replacement."
  },
  {
    id: 2,
    title: "Late Deliveries",
    desc: "While most orders arrive by the estimated delivery date, delays can happen due to weather, high demand, or carrier issues. If your order is late, check the tracking details for updates. If the delay is significant, you may be eligible for a refund or compensation."
  },
  {
    id: 3,
    title: "Track your package",
    desc: "You can find tracking information in your order details. If your order contains multiple items, they may have separate delivery dates and tracking numbers. Use the tracking link to monitor your package's journey in real time."
  },
  {
    id: 4,
    title: "Check status of a refund",
    desc: "If you've returned an item or requested a refund, you can check the status in Your Orders. Refunds typically take a few days to process, depending on your payment method. If there’s an issue, you may need to contact customer support."
  },
  {
    id: 5,
    title: "Find a missing item from your package",
    desc: "Sometimes, items in a single order are shipped separately. Check your order details to see if your missing item has a different expected delivery date. If it's still missing, contact customer support for a resolution."
  },
  {
    id: 6,
    title: "Cancel Items or Orders",
    desc: "You can cancel orders that haven't entered the shipping process yet. Go to Your Orders, select the item, and click 'Cancel.' If an order has already shipped, you may need to request a return instead."
  },
  {
    id: 7,
    title: "Order with Free Shipping by Onyx",
    desc: "As a new customer, you can receive free shipping on eligible items with your first order, with no minimum purchase required. Check the product details to see if it qualifies for free shipping before placing your order."
  },
  {
    id: 8,
    title: "Sign Up for the Amazon Prime Free Trial",
    desc: "If you haven’t been an Onyx Prime member in the last 12 months, you can sign up for a free trial. Prime members get access to fast shipping, exclusive deals, streaming services, and more."
  },
  {
    id: 9,
    title: "Redeem a Gift Card",
    desc: "When you redeem an Amazon.com Gift Card or gift voucher, the funds are added to your account and will automatically apply to your next eligible order. Check your gift card balance under Your Account to see available funds."
  },
  {
    id: 10,
    title: "Add & Manage Payment Methods",
    desc: "You can add, update, or remove payment methods by going to Your Payments in Your Account. Supported payment options include credit/debit cards, digital wallets, and bank transfers."
  },
  {
    id: 11,
    title: "Order with 1-click",
    desc: "Buy Now allows for quick purchasing by using your saved shipping and payment details. You can review and change these settings before placing your order, ensuring a smooth and fast checkout process."
  },
  {
    id: 12,
    title: "Ads in Prime Video",
    desc: "Starting soon, Prime Video movies and TV shows will include limited advertisements. These ads help support content creation while keeping subscription costs lower. For more details, visit the Prime Video help section."
  }
];

const CustomerService = () => {
  return(
    <div className='w-full'>
      <h2 className='font-bold text-sm text-[19px] mb-6'>Search our help library</h2>
      <div className='relative'>
        <Input type='text' className='border-[#D9D9D9] border-1 bg-white mb-10 pl-9' placeholder='Type something like, "question about a charge"'/>
        <Image
          src="/assets/images/search-black.svg"
          alt="icon"
          width={16}
          height={16}
          className='absolute top-1/2 left-3 transform -translate-y-1/2'
        />
      </div>
      
      <div className='flex items-start'>
        <div className='flex-1 max-w-[259px] mr-9'>
          <h3 className='border-b border-[#7D7D7D8C] pb-2.5 font-bold mb-4 text-[16px]'>All help topics</h3>
          <div className='flex items-start flex-col'>
            {
              categories.map((item, index) => {
                return (
                  <Link className='mb-3 font-medium text-[14px]' key={index} href='#'>{item}</Link>
                )
              })
            }
          </div>
        </div>
        <div className='flex-[2] grid grid-cols-2 gap-5'>
          {
            topics.map((item) => {
              return (
                <Link href={`/userpage/help-center/${item.id}`} key={item.id} className='bg-white rounded-[8px] p-4'>
                  <h3 className='text-[16px] mb-[10px] font-bold'>{item.title}</h3>
                  <div className='line-clamp-2'>{item.desc}</div>
                </Link>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default CustomerService;