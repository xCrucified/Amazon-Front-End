import CarouselDisplay from "@/components/shared/carousel-display";
import { Container } from "@/components/shared/container";
import Main from "@/components/shared/(main)/main";
import React from "react";
import Footer from "@/components/shared/(footer)/footer";

export default function Home() {
  return (
    <>
      <Container className="relative p-6">
        <CarouselDisplay />
      </Container>

      <Container className="min-h-[calc(100vh-16px)]">
        <Main />
      </Container>

      <Footer />
    </>
  );
}
