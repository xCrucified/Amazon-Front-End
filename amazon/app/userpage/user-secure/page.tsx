"use client";

import React from 'react';
import {useRouter} from "next/navigation";

const UserSecure = () => {
  const router = useRouter();
  return (
    <div>
      <button onClick={() => router.push('/userpage')}>Back</button>
      UserSecure
    </div>
  );
};

export default UserSecure;