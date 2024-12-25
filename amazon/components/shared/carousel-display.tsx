import React from "react";
import Carousel from "../ui/carousel";
import Image from "next/image";

interface Props {
  className?: string;
}

export const CarouselDisplay: React.FC<Props> = ({}) => {
  return (
    <Carousel>
      <div className="max-h-[320px] max-w-[1280px]">
        <Image
          src="/assets/images/Banner.jpg"
          alt="Slide 1"
          objectFit={"cover"}
          width={1}
          height={1}
          layout="responsive"
        />
      </div>
      <div className="max-h-[320px] min-w-[100%]">
        <Image
          src="/assets/images/banner-ads-examples-aws.webp"
          alt="Slide 2"
          objectFit={"cover"}
          width={1}
          height={1}
          layout="responsive"
        />
      </div>
    </Carousel>
  );
};

export default CarouselDisplay;
