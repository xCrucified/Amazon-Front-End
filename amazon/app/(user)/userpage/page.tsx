import UserForm from '@/components/shared/user-page';
import React from 'react';

interface Props {
  className?: string;
}

export const UserPage: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
        <UserForm>
          
        </UserForm>
    </div>
  );
};

export default UserPage;