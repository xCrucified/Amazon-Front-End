import React from "react";
import Review from "./review";

interface Props {
  className?: string;
}

export const ReviewGroupList: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <Review
        id={1}
        user={"BOB"}
        images={[
          "/assets/images/litakTest.svg",
          "/assets/images/litakTest.svg",
          "/assets/images/litakTest.svg",
          "/assets/images/litakTest.svg",
          "/assets/images/litakTest.svg",
        ]}
        rate={4}
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam earum deleniti quo temporibus facere obcaecati sunt accusantium sint! Quo iure obcaecati vel dicta aperiam, est repudiandae nostrum impedit fuga placeat!"
      />
    </div>
  );
};

export default ReviewGroupList;
