import Link from "next/link";
import Image from "next/image";
import FooterAuth from "@/components/shared/footer-auth";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col items-center justify-center bg-muted">
      <div className="flex w-[405px] flex-col gap-6">
        <Link href="/" className="items-center self-center mt-12 mb-6">
          <Image
            src={"/assets/images/LogoFull.svg"}
            alt="logo"
            width={206}
            height={64}
          />
        </Link>
        {children}
        <FooterAuth />
      </div>
    </div>
  );
}
