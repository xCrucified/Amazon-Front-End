import React from 'react';

interface Props {
  className?: string;
}

export const LowerCard: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
        <h4>Today’s Deals</h4>
    </div>
  );
};

export default LowerCard;