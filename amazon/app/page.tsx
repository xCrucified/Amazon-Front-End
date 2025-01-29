import CarouselDisplay from "@/components/shared/carousel-display";
import { Container } from "@/components/shared/container";
import Main from "@/components/shared/(main)/main";
import { TopBar } from "@/components/shared/(header)/top-bar";
import React from "react";
import Footer from "@/components/shared/(footer)/footer";

export default function Home() {
  return (
    <>
      <Container className="flex justify-between items-center">
        <TopBar />
      </Container>

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
