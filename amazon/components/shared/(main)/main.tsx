import React from 'react';
import { cn } from '@/lib/utils';
import { Container } from '../container';
import { CategoryBar } from '../(cards)/category-bar';

interface Props {
  className?: string;
}



export const Main: React.FC<Props> = ({ className }) => {
  return (
    <Container className={cn('p-6', className)}>
        <CategoryBar id={0} name={'asd'} imageUrl={''} />
    </Container>
  );
};

export default Main;