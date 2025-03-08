/* eslint-disable @next/next/no-img-element */
import { Container } from "@/components/shared/container";
import { Label } from "@/components/ui/label";
import React, { useEffect, useState } from "react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  className?: string;
}

export const CreateSectionForm: React.FC<Props> = ({
  isOpen,
  onClose,
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
  const [text, setText] = useState("");

  const clearCaption = () => {
    setText("");
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleCreateSection = () => {
    console.log("YO!!!");
  };

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black opacity-25 h-full w-ful z-50"></div>
      <Container
        className={
          "h-[425px] self-center w-[405px] z-[52] fixed inset-0 flex justify-center bg-[#f5f5f5] rounded-xl"
        }
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 m-2 bg-inherit hover:bg-inherit ring-0 shadow-none w-[18px] h-[18px]"
        >
          <img src="/assets/images/closeImg.svg" alt="X"></img>
        </button>

        <div className="flex flex-col w-full h-full p-8 gap-[26px]">
          <Label className="text-[23px]">Create a new list or registry</Label>

          <div className="flex flex-col gap-[16px]">
            <div className="flex flex-col gap-[12px]">
              <p>List name (required)</p>
              <div className="flex items-center border-[3px] bg-white border-[#5A6C8D] rounded-lg px-3">
                <p className="text-[14px] w-[170px] border-r-2 border-[#5A6C8D] mr-1">
                  Shopping List 1
                </p>
                <input
                  className="w-full focus:outline-none"
                  type="text"
                  value={text}
                  onChange={handleInputChange}
                />
                <button onClick={clearCaption} className="w-[40px] h-[40px]">
                  <img
                    src="/assets/images/iconClose.svg"
                    alt="close"
                    className="w-[25px] h-[25px]"
                  />
                </button>
              </div>
              <p className="text-[14px]">
                Use lists to save items for later. All lists are private unless
                you share them with others.
              </p>
            </div>
          </div>

          <div className="flex w-[342px] h-[66px] bg-[#e6ecf4] rounded-xl">
            <div className="grid place-items-center w-[20%] p-2">
              <img
                className=""
                src="/assets/images/products/coupon.svg"
                alt="coupon"
              />
            </div>
            <div className="flex flex-col justify-center w-[80%]">
              <p>Celebrating an occasion?</p>
              <a href="" className="text-blue-800">
                Create a Registry or Gift List
              </a>
            </div>
          </div>
          <div className="flex w-full h-[36px]">
            <button
              onClick={handleCreateSection}
              className="w-full h-full rounded-xl text-white text-[24px] font-bold bg-[#5b6c8c]"
            >
              Create
            </button>
          </div>
        </div>
      </Container>
    </>
  );
};

export default CreateSectionForm;
