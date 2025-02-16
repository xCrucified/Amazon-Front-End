"use client";

import React from 'react';
import {useRouter} from "next/navigation";

const Orders = () => {
  const router = useRouter();
  return (
    <div>
      <button onClick={() => router.push('/userpage')}>Back</button>
      Your orders!!!</div>
  );
};

export default Orders;