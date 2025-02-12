import React from "react";
import { Button } from "./button";
import { Container } from "../shared/container";

export const Modal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black opacity-50 z-[51]"></div>

      <Container className="h-[739px] w-[1447px] mt-[139px] z-[51] fixed inset-0 flex items-center justify-center bg-[#f5f5f5] shadow-[white] shadow-2xl rounded-xl">
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
