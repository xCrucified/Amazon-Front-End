import CarouselDisplay from "@/components/shared/carousel-display";
import { Container } from "@/components/shared/container";
import Footer from "@/components/shared/footer";
import { Title } from "@/components/shared/title";
import React from "react";

export default function Home() {
  return (
    <>
      <Container>
        <CarouselDisplay className={'z-0 blur-4'} />
      </Container>
      <Container
        className={"min-h-[calc(100vh-16px)] flex items-center justify-center"}
      >
        <Title text="Main" size="lg" className="font-extrabold" />
      </Container>

      {/* <TopBar/> */}

      <Footer />
    </>
  );
}
