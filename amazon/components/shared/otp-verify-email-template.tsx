import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  username: string;
  otp: string;
}

const OtpVerifyEmailTemplate: React.FC<Props> = ({ username, otp }) => {
  return (
    <div className="flex flex-col items-center justify-center bg-muted p-[32px]">
      <div className="flex w-[405px] max-w-sm flex-col gap-6">
        <Link
          href="http://localhost:3000/"
          className="items-center self-center mt-12 mb-6"
        >
          <Image
            src={"/assets/images/LogoFull.svg"}
            alt="logo"
            width={206}
            height={64}
          />
        </Link>
        <h2 className="text-center">Dear, {username}, here is your&apos;s OTP</h2>
        <h1 className="flex justify between text-center text-bold">
          {otp[0]}
          {otp[1]}
          {otp[2]}
          {otp[3]}
        </h1>
      </div>
    </div>
  );
};

export default OtpVerifyEmailTemplate;
