import React from 'react';

interface Props {
  className?: string;
  children?: React.ReactNode;
}
export const UserForm: React.FC<Props> = ({ className, children }) => {
  return (
    <div className={className}>
        {children}
    </div>
  );
};

export default UserForm;