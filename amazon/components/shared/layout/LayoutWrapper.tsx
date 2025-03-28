"use client";

import { usePathname } from "next/navigation";
import Header from "@/components/shared/header/header";
import UpperHeader from "@/components/shared/header/upper-header";
import { TopBar } from "@/components/shared/header/top-bar";
import { Container } from "@/components/shared/container";
import Footer from "@/components/shared/footer/footer";

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const isAdminRoute = pathname.startsWith("/admin");

  if (isAdminRoute) {
    return <>{children}</>;
  }

  return (
    <>
      <UpperHeader />
      <Header />
      <Container className="flex justify-between items-center">
        <TopBar />
      </Container>
      {children}
      <Footer />
    </>
  );
}
