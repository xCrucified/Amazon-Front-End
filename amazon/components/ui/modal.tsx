"use client";
import React, { useEffect } from "react";
import { Button } from "./button";
import { Container } from "../shared/container";

export const Modal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
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
      <div className="fixed inset-0 bg-black opacity-25 h-[960px] overflow-hidden pr-[15px] flex justify-end self-end"></div>

      <Container className="h-[739px] w-[1447px] mt-[139px] z-[51] fixed inset-0 flex items-center justify-center bg-[#f5f5f5] modal-shadow rounded-bl-xl rounded-br-xl">
        <div className="relative w-[100%] h-[100%]">
          <h2 className="text-lg font-bold">Caption</h2>
          <p>Content.</p>
          <Button
            onClick={onClose}
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
          >
            Close
          </Button>
        </div>
      </Container>
    </>
  );
};
