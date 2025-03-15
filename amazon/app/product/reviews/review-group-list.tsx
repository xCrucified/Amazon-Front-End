import React from "react";
import Review from "./review";
import { cn } from "@/lib/utilities/utils";

interface Props {
  reviews: any[];
  className?: string;
}

export const ReviewGroupList: React.FC<Props> = ({ className, reviews }) => {
  return (
    <div className={cn("", className)}>
      {reviews.map((review) => (
        <Review key={review.id} {...review} />
      ))}
    </div>
  );
};

export default ReviewGroupList;
