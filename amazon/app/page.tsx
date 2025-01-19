import CarouselDisplay from "@/components/shared/carousel-display";
import { Container } from "@/components/shared/container";
import Footer from "@/components/shared/footer";
import ProductCard from "@/components/shared/product-card";
import { TopBar } from "@/components/shared/top-bar";
import React from "react";

export default function Home() {
  return (
    <>
      <Container className="flex justify-between items-center">
        <TopBar />
      </Container>

      <Container className="px-4 sm:px-6 lg:px-8 outline">
        <CarouselDisplay className="z-0 blur-4" />
      </Container>

      <Container className="min-h-[calc(100vh-16px)] flex items-center justify-center p-2">
        <ProductCard />
      </Container>

      <Footer />
    </>
  );
}
