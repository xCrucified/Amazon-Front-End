import React from "react";
import Carousel from "../ui/carousel";
import Image from "next/image";

interface Props {
  className?: string;
}

export const CarouselDisplay: React.FC<Props> = ({}) => {
  return (
    <Carousel>
      <div className="flex h-[488px] w-[1492px]">
        <Image
          src="/assets/images/427412.png"
          alt="Slide 1"
          objectFit={"cover"}
          width={1488}
          height={488}
        />
      </div>
      <div className="flex h-[488px] w-[1492px]">
        <Image
          src="/assets/images/427412.png"
          alt="Slide 2"
          objectFit={"cover"}
          width={1488}
          height={488}
        />
      </div>
    </Carousel>
  );
};

export default CarouselDisplay;
