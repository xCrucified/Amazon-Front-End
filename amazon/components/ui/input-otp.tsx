import { cn } from "@/lib/utils";
import React, { useState, useEffect, useRef } from "react";

interface OTPInputProps {
  className?: string;
  length?: number;
  onChange: (otp: string) => void;
}

const InputOTP: React.FC<OTPInputProps> = ({ className, length = 5, onChange }) => {
  const [otp, setOtp] = useState<string[]>(new Array(length).fill(""));
  const inputRefs = useRef<(HTMLInputElement | null)[]>(new Array(length).fill(null));

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const value = e.target.value;

    if (/^[0-9]?$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      onChange(newOtp.join(""));

      if (value && index < length - 1) {
        inputRefs.current[index + 1]?.focus();
      }
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  useEffect(() => {
    const handlePaste = (e: ClipboardEvent) => {
      const pastedData = e.clipboardData?.getData("text");
      if (pastedData && /^[0-9]{5}$/.test(pastedData)) {
        const newOtp = pastedData.split("");
        setOtp(newOtp);
        onChange(newOtp.join(""));
      }
    };

    document.addEventListener("paste", handlePaste);
    return () => {
      document.removeEventListener("paste", handlePaste);
    };
  }, [onChange]);

  return (
    <div className="flex gap-[15.5px]">
      {otp.map((digit, index) => (
        <input
          key={index}
          type="text"
          value={digit}
          onChange={(e) => handleChange(e, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          ref={(el) => {
            inputRefs.current[index] = el;
          }}
          maxLength={1}
          className={cn("w-[56px] h-[56px] text-center bg-gray-200 rounded-lg", className)}
        />
      ))}
    </div>
  );
};

export default InputOTP;
