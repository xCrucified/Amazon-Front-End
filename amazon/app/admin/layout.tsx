'use client';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-row items-center justify-center w-full">
      {children}
    </div>
  );
}
