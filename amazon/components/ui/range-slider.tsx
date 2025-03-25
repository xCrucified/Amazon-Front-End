"use client";

import React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";
import { cn } from "@/lib/utils";

type SliderProps = {
  className?: string;
  min: number;
  max: number;
  step: number;
  formatLabel?: (value: number) => string;
  value?: number[] | readonly number[];
  onValueChange?: (values: number[]) => void;
};

const RangeSlider = React.forwardRef(
  (
    { className, min, max, step, formatLabel, value, onValueChange, ...props }: SliderProps,
    ref
  ) => {
    const initialValue = Array.isArray(value) ? value : [min, max];
    const [localValues, setLocalValues] = React.useState(initialValue);

    React.useEffect(() => {
      // Update localValues when the external value prop changes
      setLocalValues(Array.isArray(value) ? value : [min, max]);
    }, [min, max, value]);

    const handleValueChange = (newValues: number[]) => {
      setLocalValues(newValues);
      if (onValueChange) {
        onValueChange(newValues);
      }
    };

    return (
      <SliderPrimitive.Root
        ref={ref as React.RefObject<HTMLDivElement>}
        min={min}
        max={max}
        step={step}
        value={localValues}
        onValueChange={handleValueChange}
        className={cn("relative flex w-full touch-none select-none mb-6 items-center", className)}
        {...props}
      >
        <SliderPrimitive.Track className="relative h-[6px] w-full grow overflow-hidden rounded-full bg-[#ececec]">
          <SliderPrimitive.Range className="absolute h-full bg-[#353b46]" />
        </SliderPrimitive.Track>
        {localValues.map((_, index) => (
          <React.Fragment key={index}>
            {/* Removed label div to eliminate numbers */}
            <SliderPrimitive.Thumb className="block h-4 w-4 rounded-full bg-[#353b46] transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50" />
          </React.Fragment>
        ))}
      </SliderPrimitive.Root>
    );
  }
);

RangeSlider.displayName = SliderPrimitive.Root.displayName;

export { RangeSlider };
