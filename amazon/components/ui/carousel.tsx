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
      <div className="absolute bottom-[23.5px] z-40 w-[100%]">
        <Image
          src="/assets/images/Subtract.svg"
          alt="Rectangle"
          width={419}
          height={39}
          className="ml-[133px]"
        />
      </div>
      <div className="absolute z-50 w-[1444px] h-[40px] justify-end flex">
        <Image
          src="/assets/images/banner_top_panel.svg"
          alt="Rectangle"
          width={290}
          height={1}
          className="z-50 absolute"
        />
        <label className="absolute flex text-3xl font-bold z-50">Thriving Together</label>
      </div>
      <div className="absolute z-50 flex w-[1444px] h-[45px] justify-end top-[60px]">
        <Image
          src="/assets/images/banner_bottom-top.svg"
          alt="Rectangle"
          width={351}
          height={0}
          className="z-50 absolute"
        />
        <label className="absolute flex text-3xl font-bold z-50 top-1">Nature And Wellness.</label>
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
