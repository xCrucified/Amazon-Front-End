"use client";

import React from 'react';
import {useRouter} from "next/navigation";

const Addresses = () => {
  const router = useRouter();
  return (
    <div>
      <button onClick={() => router.push('/userpage')}>Back</button>
      Addresses
    </div>
  );
};

export default Addresses;