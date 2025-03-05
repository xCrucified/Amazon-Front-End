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
}

export const ModalImage = ({
  isOpen,
  onClose,
  images,
}: Props) => {
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

  const [curr, setCurr] = useState(0);
  const totalSlides = Math.ceil(images.length / 1);

  const next = useCallback(() => {
    setCurr((prev) => (prev + 1 < totalSlides ? prev + 1 : prev));
  }, [totalSlides]);

  const prev = useCallback(() => {
    setCurr((prev) => (prev > 0 ? prev - 1 : prev));
  }, []);

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black opacity-25 h-[100%] overflow-hidden flex justify-end self-end"></div>
      <Container className="h-[739px] w-[1447px] mt-[155px] z-[51] fixed inset-0 flex items-center justify-center bg-[#f5f5f5] modal-shadow rounded-bl-xl rounded-br-xl">
        <div className="grid grid-cols-3 gap-7 place-content-center w-[90%]">
          <Button
            onClick={onClose}
            className="absolute top-0 left-0 m-2 bg-inherit hover:bg-inherit ring-0 shadow-none"
          >
            <img src="/assets/images/closeImg.svg" alt="X"></img>
          </Button>
          <div>
            <img src={images[0]} alt="img" />
          </div>
          <div className="absolute bottom-[27px] right-[180px]">
            <Container className="w-[100%] bottom-5 relative flex justify-between items-center">
              <Button
                onClick={prev}
                className={cn(
                  "bg-inherit ring-0 hover:bg-inherit shadow-none",
                  curr === 0 ? "opacity-50 cursor-not-allowed" : ""
                )}
                disabled={curr === 0}
              >
                <img
                  src="/assets/images/arrow-long-left.svg"
                  alt="arrow-left"
                  style={{ filter: curr === 0 ? "grayscale(100%)" : "none" }}
                />
              </Button>
              <Button
                onClick={next}
                className={cn(
                  "bg-inherit ring-0 hover:bg-inherit shadow-none",
                  curr + 1 >= images.length ? "opacity-50 cursor-not-allowed" : ""
                )}
                disabled={curr + 1 >= images.length}
              >
                <img
                  src="/assets/images/arrow-long-right.svg"
                  alt="arrow-right"
                  style={{
                    filter:
                      curr + 1 >= images.length ? "grayscale(100%)" : "none",
                  }}
                />
              </Button>
            </Container>
          </div>
        </div>
      </Container>
    </>
  );
};
