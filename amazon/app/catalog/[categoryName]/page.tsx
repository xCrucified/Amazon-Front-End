"use client";

import ProductGroupList from "@/components/shared/cards/product-group-list";
import CatalogProductCard from "@/components/shared/cards/catalog-product-card";
import SortOptions from "@/components/shared/sort-options";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Product } from "@/store/slices/cartSlice";

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

const appleLatestProducts = [
  {
    id: 0,
    name: "Retrospec Solana Yoga Mat",
    imageUrl: "/assets/images/products/mat.svg",
    items: [
      {
        price: 16.33,
      },
    ],
  },
  {
    id: 1,
    name: "Retrospec Solana Yoga Mat",
    imageUrl: "/assets/images/products/mat.svg",
    items: [
      {
        price: 16.33,
      },
    ],
  },
  {
    id: 2,
    name: "Retrospec Solana Yoga Mat",
    imageUrl: "/assets/images/products/mat.svg",
    items: [
      {
        price: 16.33,
      },
    ],
  },
  {
    id: 3,
    name: "Retrospec Solana Yoga Mat",
    imageUrl: "/assets/images/products/mat.svg",
    items: [
      {
        price: 16.33,
      },
    ],
  },
  {
    id: 4,
    name: "Retrospec Solana Yoga Mat",
    imageUrl: "/assets/images/products/mat.svg",
    items: [
      {
        price: 16.33,
      },
    ],
  },
  {
    id: 5,
    name: "Retrospec Solana Yoga Mat",
    imageUrl: "/assets/images/products/mat.svg",
    items: [
      {
        price: 16.33,
      },
    ],
  },
  {
    id: 6,
    name: "Retrospec Solana Yoga Mat",
    imageUrl: "/assets/images/products/mat.svg",
    items: [
      {
        price: 16.33,
      },
    ],
  },
  {
    id: 7,
    name: "Retrospec Solana Yoga Mat",
    imageUrl: "/assets/images/products/mat.svg",
    items: [
      {
        price: 16.33,
      },
    ],
  },
  {
    id: 8,
    name: "Retrospec Solana Yoga Mat",
    imageUrl: "/assets/images/products/mat.svg",
    items: [
      {
        price: 16.33,
      },
    ],
  },
  {
    id: 9,
    name: "Retrospec Solana Yoga Mat",
    imageUrl: "/assets/images/products/mat.svg",
    items: [
      {
        price: 16.33,
      },
    ],
  },
  {
    id: 10,
    name: "Retrospec Solana Yoga Mat",
    imageUrl: "/assets/images/products/mat.svg",
    items: [
      {
        price: 16.33,
      },
    ],
  },
  {
    id: 11,
    name: "Retrospec Solana Yoga Mat",
    imageUrl: "/assets/images/products/mat.svg",
    items: [
      {
        price: 16.33,
      },
    ],
  },
  {
    id: 12,
    name: "Retrospec Solana Yoga Mat",
    imageUrl: "/assets/images/products/mat.svg",
    items: [
      {
        price: 16.33,
      },
    ],
  },
];

export const catalogProducts: Product[] = [
  {
    id: 123,
    title:
      "Amazon Fire TV Stick HD (newest model), free and live TV, Alexa Voice Remote, smart home controls, HD streaming",
    brand: "TV Stick",
    top1Rated: false,
    rating: 4,
    reviewsCount: 907,
    features: "Eco fees might apply",
    price: 39.99,
    oldPrice: 49.99,
    priceFeatures: "Eco fees might apply",
    image: "/assets/images/products/tv-stick.png",
    isGift: false,
    inStock: 20,
    selected: 0,
    properties: [],
  },
  {
    id: 1545235,
    title: "Apple AirTag 4 Pack",
    brand: "Apple",
    top1Rated: true,
    rating: 5,
    reviewsCount: 132882,
    features: "5K+ bought in past month",
    price: 98.98,
    oldPrice: 129,
    priceFeatures: "",
    image: "/assets/images/products/airtag.png",
    isGift: false,
    inStock: 20,
    selected: 0,
    properties: [],
  },
  {
    id: 634632,
    title:
      "Apple AirPods Pro 2 Wireless Earbuds, Bluetooth Headphones, Active Noise Cancellation, Transparency, Personalized Spatial Audio, High-Fidelity Sound, H2 Chip, USB-C Charging",
    brand: "Apple",
    top1Rated: false,
    rating: 5,
    reviewsCount: 24499,
    features: "5K+ bought in past month",
    price: 279.98,
    oldPrice: 329,
    priceFeatures: "Eco fees might apply",
    image: "/assets/images/products/airpods.png",
    isGift: false,
    inStock: 20,
    selected: 0,
    properties: [],
  },
  {
    id: 19592035,
    title:
      "Lexar 128GB Micro SD Card, microSDXC UHS-I Flash Memory Card with Adapter - Up to 100MB/s, A1, U3, Class10, V30, High Speed TF Card",
    brand: "SC Card",
    top1Rated: false,
    rating: 4,
    reviewsCount: 21384,
    features: "5K+ bought in past month",
    price: 18.29,
    oldPrice: 29.99,
    priceFeatures: "",
    image: "/assets/images/products/sc-card.png",
    isGift: false,
    inStock: 20,
    selected: 0,
    properties: [],
  },
  {
    id: 52356624,
    title:
      "Amazon Basics 48 Pack AA High-Performance Alkaline Batteries, 10-Year Shelf Life, Easy to Open Value Pack",
    brand: "Batteries",
    top1Rated: false,
    rating: 4,
    reviewsCount: 790656,
    features: "10K+ bought in past month",
    price: 21.31,
    oldPrice: 0.44,
    priceFeatures: "Save more with Subscribe & Save",
    image: "/assets/images/products/batteries.png",
    isGift: false,
    inStock: 20,
    selected: 0,
    properties: [],
  },
  {
    id: 5235266,
    title:
      "iPhone Charger Apple Charger,[Apple MFi Certified]2 Pack Apple Type C Wall Charger Block with 2 Pack [6FT&10FT] Long USB C to Lightning Cable for iPhone 14/13/12/12 Pro Max/11/Xs Max/XR/X,AirPods Pro",
    brand: "Charger Block",
    top1Rated: false,
    rating: 4,
    reviewsCount: 21524,
    features: "5K+ bought in past month",
    price: 22.99,
    oldPrice: null,
    priceFeatures: "",
    image: "/assets/images/products/iphone-charger.png",
    isGift: false,
    inStock: 20,
    selected: 0,
    properties: [],
  },
  {
    id: 9322035,
    title:
      "Wireless Earbuds, Bluetooth Headphones 5.4 HiFi Stereo, Wireless Earphones with ENC Noise Cancelling Mic, IP7 Waterproof in Ear Wireless Headphones, LED Digital Display Ear Buds, Touch Control, Black",
    brand: "Headphones",
    top1Rated: false,
    rating: 4,
    reviewsCount: 46535,
    features: "5K+ bought in past month",
    price: 31.99,
    oldPrice: 149.99,
    priceFeatures: "Save 5% on any 2",
    image: "/assets/images/products/earbuds.png",
    isGift: false,
    inStock: 20,
    selected: 0,
    properties: [],
  },
  {
    id: 9592935,
    title:
      "Skylight Digital Picture Frame - WiFi Enabled with Load from Phone Capability, Touch Screen Digital Photo Frame Display - Customizable Gift for Friends and Family - 10 Inch Black",
    brand: "Display",
    top1Rated: false,
    rating: 4,
    reviewsCount: 21384,
    features: "5K+ bought in past month",
    price: 179.0,
    oldPrice: 199.99,
    priceFeatures: "",
    image: "/assets/images/products/digital-picture.png",
    isGift: false,
    inStock: 20,
    selected: 0,
    properties: [],
  },
  {
    id: 952935,
    title:
      "Skylight Digital Picture Frame - WiFi Enabled with Load from Phone Capability, Touch Screen Digital Photo Frame Display - Customizable Gift for Friends and Family - 10 Inch Black",
    brand: "JBL",
    top1Rated: false,
    rating: 5,
    reviewsCount: 39897,
    features: "5K+ bought in past month",
    price: 44.98,
    oldPrice: 69.98,
    priceFeatures: "",
    image: "/assets/images/products/jbl-go.png",
    isGift: false,
    inStock: 20,
    selected: 0,
    properties: [],
  },
  {
    id: 415634,
    title:
      "TP-Link Tapo Smart Pan/Tilt Indoor Security Camera, 360° Motion Tracking, 1080p Full HD WiFi Camera for Pet/Baby, Night Vision, 2-Way Audio, 128 GB Local Storage, Works w/Alexa & Google (Tapo C200)",
    brand: "Tapo",
    top1Rated: false,
    rating: 4,
    reviewsCount: 43338,
    features: "4K+ bought in past month",
    price: 29.98,
    oldPrice: 34.99,
    priceFeatures: "",
    image: "/assets/images/products/tapo.png",
    isGift: false,
    inStock: 20,
    selected: 0,
    properties: [],
  },
  {
    id: 4124124,
    title:
      "TP-Link Tapo 2K Pan/Tilt Indoor Security WiFi Camera, Baby & Pet Camera w/ 360° Motion Tracking, 2-Way Audio, Night Vision, Cloud & Local Storage (Up to 256 GB), Works w/ Alexa & Google (Tapo C210)",
    brand: "Tapo",
    top1Rated: false,
    rating: 4,
    reviewsCount: 43338,
    features: "3K+ bought in past month",
    price: 49.99,
    oldPrice: null,
    priceFeatures: "",
    image: "/assets/images/products/tapo-phone.png",
    isGift: false,
    inStock: 20,
    selected: 0,
    properties: [],
  },
  {
    id: 13123,
    title:
      "DJI Osmo Pocket 3 Creator Combo, Vlog Camera with 1'' CMOS & 4K/120fps Video, 3-Axis Stabilization, Face/Object Tracking, Fast Focusing, Mic Included for Clear Sound, Small Digital Camera",
    brand: "DJI",
    top1Rated: false,
    rating: 4,
    reviewsCount: 3793,
    features: "500+ bought in past month",
    price: 929.0,
    oldPrice: null,
    priceFeatures: "",
    image: "/assets/images/products/dji.png",
    isGift: false,
    inStock: 20,
    selected: 0,
    properties: [],
  },
];

export const Page: React.FC<Props> = ({ subcategoryName }) => {
  const [showAll, setShowAll] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOption, setSortOption] = useState<string>("");

  const sortedProducts = [...catalogProducts].sort((a, b) => {
    if (sortOption === "priceAsc") {
      return a.price - b.price;
    }
    if (sortOption === "priceDesc") {
      return b.price - a.price;
    }
    if (sortOption === "ratingDesc") {
      return b.rating! - a.rating!;
    }
    if (sortOption === "bestSellers") {
      return b.reviewsCount! - a.reviewsCount!;
    }
    return 0;
  });

  const itemsPerPage = showAll ? 16 : 12;
  const totalPages = Math.ceil(sortedProducts.length / itemsPerPage);
  const paginatedProducts = sortedProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

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
    <section className="flex flex-col gap-6 w-full p-6 pl-0">
      {!showAll && (
        <>
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
          <section className="grid grid-cols-4 gap-6">
            {productsTabs.slice(3, 18).map((tab, index) => (
              <div
                key={index}
                className="bg-[#f0f0f0] flex justify-between rounded-lg cursor-pointer"
              >
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
          <img src="/assets/images/products/baner-ad.png" className="w-full" alt="banner ad" />
          <ProductGroupList
            className="border-y-2 border-y-[#c4c4c4] pt-6 pb-1 flex flex-col gap-6 overflow-hidden max-w-[1192px]"
            title={"Get the latest Apple products"}
            titleClassName="font-bold text-[19px] leading-[21px]"
            items={appleLatestProducts}
            itemsPerPage={4}
            categoryId={1}
          />
        </>
      )}
      <section className="flex flex-col gap-6">
        <div
          className={cn("w-full flex items-center", showAll ? "justify-end" : "justify-between")}
        >
          {!showAll && (
            <label className="text-[16px] leading-[18px] text-[#3f3f46]">
              {(currentPage - 1) * itemsPerPage + 1}-
              {Math.min(currentPage * itemsPerPage, catalogProducts.length)} of{" "}
              {catalogProducts.length} results for <span className="font-bold">Electronics</span>
            </label>
          )}
          <SortOptions onSortChange={setSortOption} />
        </div>
        <div className="grid grid-cols-4 gap-6">
          {paginatedProducts.map((p, index) => (
            <CatalogProductCard key={index} product={p} />
          ))}
        </div>
        {!showAll && (
          <button
            type="button"
            className="bg-[#f0f0f0] border-2 border-[#5a6c8d] text-[16x] leading-[18px] rounded-lg text-center py-4"
            onClick={() => {
              setShowAll(true);
              setCurrentPage(1);
            }}
          >
            See all results
          </button>
        )}
        <div className="flex justify-center gap-4">
          <button
            type="button"
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="text-[#5a6c8d] py-2 px-4 cursor-pointer flex gap-2 items-center"
          >
            <img
              src="/assets/images/products/caret-left.svg"
              alt="arrow left"
              className="w-5 h-5"
            />
            Previous
          </button>
          <div className="flex">
            {Array.from({ length: totalPages }).map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setCurrentPage(idx + 1)}
                className={`py-2 px-4 cursor-pointer ${
                  currentPage === idx + 1
                    ? "border-b border-[#353b46] text-[#353b46]"
                    : "text-[#5a6c8d]"
                }`}
              >
                {idx + 1}
              </button>
            ))}
          </div>
          <button
            type="button"
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="text-[#5a6c8d] py-2 px-4 cursor-pointer flex gap-2 items-center"
          >
            Next
            <img
              src="/assets/images/products/caret-right.svg"
              alt="arrow right"
              className="w-5 h-5"
            />
          </button>
          <label className="text-[14px] leading-[16px] text-[#3f3f46] py-3 font-bold">
            Showing {(currentPage - 1) * itemsPerPage + 1}-
            {Math.min(currentPage * itemsPerPage, catalogProducts.length)} of{" "}
            {catalogProducts.length} results
          </label>
        </div>
      </section>
    </section>
  );
};

export default Page;
