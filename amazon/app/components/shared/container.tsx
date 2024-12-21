import React from 'react';

interface Props {
  className?: string;
}

export const Container: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>

    </div>
  );
};

export default Container;