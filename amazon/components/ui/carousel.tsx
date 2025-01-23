"use client";

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
    
    <div className="overflow-hidden relative rounded-[40px]">
      
      <div
        className="flex transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="w-full flex-shrink-0">
            <div className="w-[100%]">
              <div className="absolute w-[324px] h-[47px] bg-[#f5f5f5] rounded-[-100px]" id="border-topText"></div>
            </div>
              {slide}
          </div>
        ))}
      </div>

      <div className="absolute bottom-[27px] right-[180px]">
        <div className="flex items-center justify-center gap-2">
          {slides.map((_, i) => (
            <div
              key={i}
              className={`transition-all w-2 h-2 bg-black rounded-full  ${
                curr === i ? "bg-black" : "bg-opacity-50"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
