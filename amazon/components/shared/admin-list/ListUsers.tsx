import React from 'react';

interface Props {
  className?: string;
}

export const ListUsers: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>

    </div>
  );
};

export default ListUsers;