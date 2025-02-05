import React from 'react';

interface Props {
  className?: string;
}

export const ProductGroupList: React.FC<Props> = ({ className }) => {

  //axios or fetch here!!
  
  return (
    <div className={className}>

    </div>
  );
};

export default ProductGroupList;