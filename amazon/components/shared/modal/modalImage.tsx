/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect } from "react";
import { Button } from "../../ui/button";
import { Container } from "../container";

export const ModalImage = ({
  isOpen,
  onClose,
  image,
}: {
  isOpen: boolean;
  onClose: () => void;
  image: string;
}) => {
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
            <img src={image} alt="img" />
          </div>
        </div>
      </Container>
    </>
  );
};