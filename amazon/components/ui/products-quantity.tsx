import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "./button";

interface Props {
  className?: string;
}

const items = [1, 2, 3, 4, 5, 6];

export const Quantity: React.FC<Props> = ({ className }) => {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <div className={cn("w-full h-full", className)}>
      <div className="flex gap-3">
        {items.map((item) => (
          <Button
            key={item}
            onClick={() => setSelected(item)}
            className={cn(
              "w-8 h-8 text-gray-600 aspect-square rounded-full bg-white border-2 border-gray-300",
              selected === item
                ? "border-blue-950 shadow-md shadow-blue-900"
                : "hover:bg-gray-100"
            )}
          >
            {item}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Quantity;
