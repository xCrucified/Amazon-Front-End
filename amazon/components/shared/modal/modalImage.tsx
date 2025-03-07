/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useCallback, useEffect, useState } from "react";
import { Button } from "../../ui/button";
import { Container } from "../container";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utilities/utils";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  images: string[];
  currentIndex: number;
}

export const ModalImage = ({
  isOpen,
  onClose,
  images,
  currentIndex,
}: Props) => {
  const [curr, setCurr] = useState(currentIndex);
  const totalSlides = images.length;

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const next = useCallback(() => {
    setCurr((prev) => (prev + 1 < totalSlides ? prev + 1 : prev));
  }, [totalSlides]);

  const prev = useCallback(() => {
    setCurr((prev) => (prev > 0 ? prev - 1 : prev));
  }, []);

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black opacity-25 h-full w-full"></div>
      <Container className="h-[885px] w-[1447px] mt-[4%] z-[51] fixed inset-0 flex items-center justify-center bg-[#f5f5f5] modal-shadow rounded-xl">
        <Button
          onClick={onClose}
          className="flex justify-between w-[95%] h-[80px] absolute top-0 m-2 bg-inherit hover:bg-inherit ring-0 shadow-none text-black"
        >
          <Label className="text-[22px] font-bold">
            Canon EF 75-300mm f/4-5.6 III Telephoto Zoom Lens for Canon SLR
            Cameras
          </Label>
          <img src="/assets/images/closeImg.svg" alt="Close" />
        </Button>
        <div className="relative w-[90%] flex justify-center items-center">
          <div className="absolute w-full flex justify-between px-5 shaow-none">
            <Button
              onClick={prev}
              className={cn(
                "bg-inherit hover:bg-inherit shadow-none relative top-[285px]",
                curr === 0 && "opacity-50 cursor-not-allowed"
              )}
              disabled={curr === 0}
            >
              <img src="/assets/images/arrow-long-left.svg" alt="Prev" />
            </Button>
            <img
              src={images[curr]}
              alt={`Image ${curr}`}
              className="max-w-full max-h-full rounded-lg"
            />
            <Button
              onClick={next}
              className={cn(
                "bg-inherit hover:bg-inherit shadow-none relative top-[285px]",
                curr === totalSlides - 1 && "opacity-50 cursor-not-allowed"
              )}
              disabled={curr === totalSlides - 1}
            >
              <img src="/assets/images/arrow-long-right.svg" alt="Next" />
            </Button>
          </div>
        </div>
        <div className="absolute bottom-[60px]">
          <div className="flex items-center justify-center gap-2">
            {images.map((_, i) => (
              <div
                key={i}
                className={`transition-all w-2 h-2 bg-black rounded-full  ${
                  curr === i ? "bg-red-600" : "bg-opacity-35"
                }`}
              />
            ))}
          </div>
        </div>
      </Container>
    </>
  );
};
