import { cn } from "@/lib/utils";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../../ui/card";

interface Props {
  className?: string;
}

export const ProductCard: React.FC<Props> = ({ className, ...props }) => {
  return (
    <>
      <div className="flex flex-wrap gap-3">
        <Card className={cn("w-[410px] h-[480px]", className)} {...props}>
          <CardHeader>
            <CardTitle>Accordion</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div>
              <p className="text-sm text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                aliquam, purus sit amet luctus venenatis, elit magna.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default ProductCard;
