'use client';

import React, {type ReactNode} from "react";

import { Container } from "@/components/shared/container";

export default function UserPageRootLayout({ children }: { children: ReactNode }) {
  return (
    <Container className="flex flex-row items-center justify-center py-2 w-full">
      {children}
    </Container>
  );
}
