'use client';
import React, {type ReactNode} from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-row items-center justify-center py-2 w-full">
      {children}
    </div>
  );
}
