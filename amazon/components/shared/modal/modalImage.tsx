/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useCallback, useEffect, useState } from "react";
import { Button } from "../../ui/button";
import { Container } from "../container";
import { cn } from "@/lib/utils";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  images: string[];
  currentIndex: number;
}

export const ModalImage = ({ isOpen, onClose, images, currentIndex }: Props) => {
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
      <Container className="h-[739px] w-[1447px] mt-[155px] z-[51] fixed inset-0 flex items-center justify-center bg-[#f5f5f5] modal-shadow rounded-bl-xl rounded-br-xl">
        <div className="relative w-[90%] flex justify-center items-center">
          <Button onClick={onClose}  className="absolute top-0 left-0 m-2 bg-inherit hover:bg-inherit ring-0 shadow-none">
            <img src="/assets/images/closeImg.svg" alt="Close" />
          </Button>

          <img src={images[curr]} alt={`Image ${curr}`} className="max-w-full max-h-full rounded-lg" />

          <div className="absolute bottom-5 w-full flex justify-between px-5">
            <Button
              onClick={prev}
              className={cn("bg-inherit hover:bg-inherit", curr === 0 && "opacity-50 cursor-not-allowed")}
              disabled={curr === 0}
            >
              <img src="/assets/images/arrow-long-left.svg" alt="Prev" />
            </Button>

            <Button
              onClick={next}
              className={cn("bg-inherit hover:bg-inherit", curr === totalSlides - 1 && "opacity-50 cursor-not-allowed")}
              disabled={curr === totalSlides - 1}
            >
              <img src="/assets/images/arrow-long-right.svg" alt="Next" />
            </Button>
          </div>
        </div>
      </Container>
    </>
  );
};