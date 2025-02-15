import React from "react";
import { cn } from "@/lib/utils";
import { Container } from "@/components/shared/container";
import { Label } from "@/components/ui/label";

interface Props {
  className?: string;
  params: { id: string };
}

export const ProductPage: React.FC<Props> = ({ className, params }) => {
  return (
    <Container>
      <div className={cn("flex gap-[56px] outline w-full h-full mt-[53px] justify-center items-center p-6", className)}>
        <div className="w-[696px] rounded-md">
            <img src="/assets/images/productImg.png" alt="product" />
        </div>

        <div className="outline w-[740px] h-full flex justify-start">
            <Label className="text-[23px] font-bold w-[594px]">Canon EF 75-300mm f/4-5.6 III Telephoto Zoom Lens for Canon SLR Cameras</Label>
        </div>
      </div>


    </Container>
  );
};

export default ProductPage;
