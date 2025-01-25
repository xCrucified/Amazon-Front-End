import FooterAuth from "@/components/shared/footer-auth";
import ConfirmationAuthForm from "@/components/shared/confirmation-auth-form";
import Image from "next/image";
import Link from "next/link";

export default function ConfirmationAuthPage() {
  return (
    <div className="flex flex-col items-center justify-center bg-muted p-[32px]">
      <div className="flex w-[405px] max-w-sm flex-col gap-6">
        <Link href="/" className="items-center self-center mt-12 mb-6">
          <Image src={"/assets/images/LogoFull.svg"} alt="logo" width={206} height={64} />
        </Link>
        <ConfirmationAuthForm /> 
        <FooterAuth />
      </div>
    </div>
  );
}
