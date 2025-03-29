"use client";

import ProductGroupList from "@/components/shared/cards/product-group-list";
import CatalogProductCard from "@/components/shared/cards/catalog-product-card";
import SortOptions from "@/components/shared/sort-options";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Product, ProductImage } from "@/lib/interfaces";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { setSortBy } from "@/store/slices/catalogFiltersSlice";
import CatalogFilter, { Subcategory } from "@/components/shared/catalog-filter";
import { Toaster } from "react-hot-toast";

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

export const Page = () => {
  const dispatch = useDispatch();

  const [page, setPage] = useState(1);
  const category = useSelector((state: RootState) => state.filter.category);
  const subcategory = useSelector((state: RootState) => state.filter.subcategory);
  const priceRange = useSelector((state: RootState) => state.filter.priceRange);
  const inStock = useSelector((state: RootState) => state.filter.inStock);
  const search = useSelector((state: RootState) => state.filter.search);
  const minRating = useSelector((state: RootState) => state.filter.minRating);
  const sortBy = useSelector((state: RootState) => state.filter.sortBy);

  const [subcategories, setSubcategories] = useState<Subcategory[]>([]);
  useEffect(() => {
    const fetchSubcategories = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/Subcategory/category-${category}/subcategories`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setSubcategories(data);
      } catch (e) {
        console.error(e);
      }
    };

    if (category) {
      fetchSubcategories();
    }
  }, []);

  const [catalogProducts, setCatalogProducts] = useState<Product[]>([]);
  const sortedProducts = [...(catalogProducts as Product[])].sort((a, b) => {
    if (sortBy === "priceAsc") {
      return a.price - b.price;
    }
    if (sortBy === "priceDesc") {
      return b.price - a.price;
    }
    if (sortBy === "ratingDesc") {
      const avgRatingA =
        a.reviews?.reduce((sum, review) => sum + review.rate, 0)! / a.reviews?.length!;
      const avgRatingB =
        b.reviews?.reduce((sum, review) => sum + review.rate, 0)! / b.reviews?.length!;
      return avgRatingB - avgRatingA;
    }
    if (sortBy === "bestSellers") {
      return b.reviews.length - a.reviews.length;
    }
    return 0;
  });

  const [itemsPerPage, setItemsPerPage] = useState(12);
  const [totalPages, setTotalPages] = useState();
  const [totalItems, setTotalItems] = useState();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/Product/filtered?page=${page}&pageSize=${itemsPerPage}`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              maxPrice: priceRange?.[1] || null,
              inStock,
              categoryId: category,
              subcategoryId: subcategory,
              search,
              minRating,
            }),
          }
        );

        if (!response.ok) throw new Error("Failed to load products");

        const data = await response.json();
        setCatalogProducts(data.products);
        setTotalPages(data.totalPages);
        setTotalItems(data.totalItems);
      } catch (e) {
        console.error(e);
      }
    };

    fetchProducts();
  }, [itemsPerPage, page, category, subcategory, priceRange, inStock, search, minRating]);

  return (
    <section className="w-[1492px] mx-auto flex justify-center">
      <CatalogFilter className="w-[fit-content] mr-auto" categoryName={category!} />
      <section className="flex flex-col gap-6 w-full p-6 pl-0">
        {itemsPerPage === 12 && (
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
            className={cn(
              "w-full flex items-center",
              itemsPerPage === 16 ? "justify-end" : "justify-between"
            )}
          >
            {itemsPerPage === 12 && (
              <label className="text-[16px] leading-[18px] text-[#3f3f46]">
                {(page - 1) * itemsPerPage + 1}-
                {Math.min(page * itemsPerPage, catalogProducts.length)} of {catalogProducts.length}{" "}
                results for <span className="font-bold">Electronics</span>
              </label>
            )}
            <SortOptions onSortChange={(e) => dispatch(setSortBy(e))} />
          </div>
          <div className="grid grid-cols-4 gap-6">
            {sortedProducts.map((p, index) => (
              <CatalogProductCard
                key={index}
                product={p}
                subcategory={subcategories.find((s) => s.id === p.subcategoryId)?.name!}
              />
            ))}
          </div>
          {itemsPerPage === 12 && (
            <button
              type="button"
              className="bg-[#f0f0f0] border-2 border-[#5a6c8d] text-[16x] leading-[18px] rounded-lg text-center py-4"
              onClick={() => {
                setItemsPerPage(16);
                setPage(1);
              }}
            >
              See all results
            </button>
          )}
          {totalPages && (
            <div className="flex justify-center gap-4">
              <button
                type="button"
                onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
                disabled={page === 1}
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
                {Array.from({ length: totalPages }, (_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setPage(idx + 1)}
                    className={`py-2 px-4 cursor-pointer ${
                      page === idx + 1
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
                onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
                disabled={page >= totalPages}
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
                Showing {(page - 1) * itemsPerPage + 1}-{Math.min(itemsPerPage * page, totalItems!)}{" "}
                of {totalItems} results
              </label>
            </div>
          )}
        </section>
      </section>
      <Toaster
        position="bottom-right"
        toastOptions={{
          success: {
            className: "bg-[#353b46] px-4 py-2 rounded-lg shadow-lg",
          },
          error: {
            className: "bg-red-600 text-white text-sm font-medium px-4 py-2 rounded-lg shadow-lg",
          },
        }}
      />
    </section>
  );
};

export default Page;
