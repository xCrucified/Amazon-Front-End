"use client";

import React, { useEffect, useState } from "react";

interface LoaderProps {
  text?: string;
}

const Loader: React.FC<LoaderProps> = ({ text }) => {
  const [visibleText, setText] = useState<string | undefined>(text);

  if (visibleText) {
    useEffect(() => {
      setTimeout(() => {        
        if (visibleText.length < text!.length + 3) {
          setText(visibleText + ".");
        } else {
          setText(text);
        }
      }, 1000);
    }, [visibleText]);
  }

  return (
    <div className="w-[fit-content] flex flex-col justify-center items-center">
      <div className="h-14 w-14 rounded-full border-4 border-[#E8E8E8] border-t-[#7D7D7D8C] animate-spin duration-1000 "></div>
      <div className="text-[#7d7d7d8c] mt-4 text-2xl">{visibleText}</div>
    </div>
  );
};

export default Loader;
