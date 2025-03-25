"use client";

import { Product } from "@/store/slices/cartSlice";
import { useState } from "react";

interface Props {
  subcategoryName: string | undefined;
}

const productsTabs = [
  {
    label: "Laptops",
    img: "/assets/images/products/laptop.png",
  },
  {
    label: "Tablets",
    img: "/assets/images/products/ipad.png",
  },
  {
    label: "Cameras",
    img: "/assets/images/products/camera.png",
  },
  {
    label: "Computers & Monitors",
    img: "/assets/images/products/computer.png",
  },
  {
    label: "Cellphones & Accessories",
    img: "/assets/images/products/phone.png",
  },
  {
    label: "Tvs & Home Theatre",
    img: "/assets/images/products/tv.png",
  },
  {
    label: "Headphones & Speakers",
    img: "/assets/images/products/headphones.png",
  },
  {
    label: "Onyx Devices",
    img: "/assets/images/products/onyx-devices.png",
  },
  {
    label: "Office Supplies",
    img: "/assets/images/products/office-supplies.png",
  },
  {
    label: "Smartwatches",
    img: "/assets/images/products/smartwatches.png",
  },
  {
    label: "Video Games",
    img: "/assets/images/products/video-games.png",
  },
  {
    label: "Smart Homes",
    img: "/assets/images/products/smart-homes.png",
  },
  {
    label: "Routers",
    img: "/assets/images/products/routers.png",
  },
  {
    label: "Premium Audio",
    img: "/assets/images/products/premium-audio.png",
  },
  {
    label: "Musical Instruments",
    img: "/assets/images/products/musical-instruments.png",
  },
  {
    label: "Security",
    img: "/assets/images/products/security.png",
  },
  {
    label: "Handpicked Electronics",
    img: "/assets/images/products/handpicked-electronics.png",
  },
  {
    label: "Deal",
    img: "/assets/images/products/deal.png",
  },
  {
    label: "Subscriptions",
    img: "/assets/images/logo.svg",
  },
];

export const Page: React.FC<Props> = ({ subcategoryName }) => {
  const [products, setProducts] = useState<Product[]>([]);

  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     try {
  //       const response = await fetch("/api/subcategories/byName", {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify({
  //           subcategoryName,
  //         }),
  //       });
  //       if (!response.ok) {
  //         throw new Error("Failed to load categories");
  //       }
  //       setProducts(await response.json());
  //     } catch (e) {
  //       console.error(e);
  //     }
  //   };

  //   if (subcategoryName) {
  //     fetchProducts();
  //   }
  // }, [subcategoryName]);

  return (
    <section className="flex flex-col w-full p-6 pl-0">
      <section className="grid grid-cols-3 gap-6 h-[500px]">
        {productsTabs.slice(0, 3).map((tab, index) => (
          <div
            key={index}
            className="bg-[#f0f0f0] flex flex-col justify-between p-8 rounded-lg cursor-pointer"
          >
            <img
              src={tab.img}
              className="w-[300px] h-[300px] m-auto mt-0"
              alt={tab.label.toLowerCase()}
            />
            <div className="flex justify-between items-center leading-[21px] text-[19px] font-bold">
              {tab.label}
              <div className="flex">
                <img src="/assets/images/line.svg" className="mr-[-2px]" alt="arrow right" />
                <img src="/assets/images/arrow-right-catalog.svg" alt="arrow right" />
              </div>
            </div>
          </div>
        ))}
      </section>
      <section className="grid grid-cols-4 gap-6 pt-6">
        {productsTabs.slice(3, 18).map((tab, index) => (
          <div key={index} className="bg-[#f0f0f0] flex justify-between rounded-lg cursor-pointer">
            <span className="w-full pl-4 flex justify-between items-center leading-[18px] text-[16px]">
              {tab.label}
            </span>
            <img
              src={tab.img}
              className="w-[121px] h-[132px] mr-auto"
              alt={tab.label.toLowerCase()}
            />
          </div>
        ))}
        <div className="bg-[#f0f0f0] flex justify-between rounded-lg cursor-pointer">
          <span className="w-full pl-4 flex justify-between items-center leading-[18px] text-[16px]">
            {productsTabs[18].label}
          </span>
          <img
            src={productsTabs[18].img}
            className="w-[121px] h-[132px] mr-auto p-6"
            alt={productsTabs[18].label.toLowerCase()}
          />
        </div>
      </section>
    </section>
  );
};

export default Page;
