"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";

interface CarouselProps {
  children: React.ReactNode[];
  autoSlide?: boolean;
  autoSlideInterval?: number;
}

export default function Carousel({
  children,
  autoSlide = true,
  autoSlideInterval = 3200,
}: CarouselProps) {
  const slides = children;
  const [curr, setCurr] = useState(0);

  const next = useCallback(() => {
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));
  }, [slides.length]);

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, [autoSlide, autoSlideInterval, next]);
  return (
    <>
      <div className="absolute bottom-[23.5px] z-50 w-[100%]">
        <Image
          src="/assets/images/Subtract.svg"
          alt="Rectangle"
          width={419}
          height={39}
          className="ml-[133px]"
        />
      </div>
      <div className="absolute z-50 right-6">
        <Image
          src="/assets/images/banner_top_panel.svg"
          alt="Rectangle"
          width={294}
          height={43}
          className="ml-[133px]"
        />
      </div>
      <div className="absolute z-50 right-6 top-16">
        <Image
          src="/assets/images/banner_bottom-top.svg"
          alt="Rectangle"
          width={351}
          height={1}
          className="ml-[133px]"
        />
      </div>

      <div className="overflow-hidden relative rounded-[40px]">
        <div
          className="flex transition-transform ease-out duration-500"
          style={{ transform: `translateX(-${curr * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="w-full h-full">
              <div>{slide}</div>
            </div>
          ))}
        </div>

        <div className="absolute bottom-[27px] right-[180px]">
          <div className="flex items-center justify-center gap-2">
            {slides.map((_, i) => (
              <div
                key={i}
                className={`transition-all w-2 h-2 bg-black rounded-full  ${
                  curr === i ? "bg-red-600" : "bg-opacity-35"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
