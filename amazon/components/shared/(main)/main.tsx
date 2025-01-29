import React from 'react';
// import ProductCard from '../(Cards)/product-card';
import { cn } from '@/lib/utils';
import { Container } from '../container';
import UpperCard from '../(Cards)/upper-card';

interface Props {
  className?: string;
}

export const Main: React.FC<Props> = ({ className }) => {
  return (
    <Container className={cn('p-6', className)}>
        {/* <ProductCard /> */}
        <UpperCard />
    </Container>
  );
};

export default Main;