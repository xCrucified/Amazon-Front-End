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
    // <div className="z-[51] fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
    //   <div className="bg-white p-6 rounded-lg shadow-lg">
    //     <h2 className="text-lg font-bold"></h2>
    //     <p>Это контент модального окна.</p>
    //     <Button
    //       onClick={onClose}
    //       className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
    //     >
    //       Закрыть
    //     </Button>
    //   </div>
    // </div>
    <Container className="z-[51] h-[740px] w-[1445px] absolute inset-[0] top-[150px] bg-white flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-lg font-bold"></h2>
        <p>Это контент модального окна.</p>
        <Button
          onClick={onClose}
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
        >
          Закрыть
        </Button>
      </div>
    </Container>
  );
};
