import React from "react";
import { cn } from "@/lib/utils";
import { Container } from "@/components/shared/container";

interface Props {
  className?: string;
  params: { id: string };
}

export const ProductPage: React.FC<Props> = ({ className, params }) => {
  return (
    <Container>
      <div className={cn("flex gap-[56px] outline w-full h-full mt-[53px] justify-center items-center p-6", className)}>
        <div className="outline w-[696px]">
            <img src="/assets/images/productImg.png" alt="product" />
        </div>

        <div className="outline w-[740px]">
            {params.id}
        </div>
      </div>


    </Container>
  );
};

export default ProductPage;
