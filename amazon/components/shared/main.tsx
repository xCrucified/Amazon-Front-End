import React from 'react';
import ProductCard from './product-card';

interface Props {
  className?: string;
}

export const Main: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
        <ProductCard />
    </div>
  );
};

export default Main;