import type { Metadata } from "next";
import "./globals.css";
import { Nunito } from "next/font/google";
import ReduxProvider from "@/components/shared/providers/redux-provider";
import NextAuthProvider from "@/components/shared/providers/auth-provider";
import LayoutWrapper from "@/components/shared/layout/LayoutWrapper";

const nunito = Nunito({
  subsets: ["latin", "cyrillic"],
  variable: "--font-nunito",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Onyx",
  description: "kuwbasa",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${nunito.variable} bg-[#f5f5f5]`}>
        <NextAuthProvider>
          <ReduxProvider>
            <LayoutWrapper>{children}</LayoutWrapper>
          </ReduxProvider>
        </NextAuthProvider>
      </body>
    </html>
  );
}
