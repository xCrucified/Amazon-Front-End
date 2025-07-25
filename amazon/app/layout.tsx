 
import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/shared/header/header";
import UpperHeader from "@/components/shared/header/upper-header";
import { Nunito } from "next/font/google";
import { TopBar } from "@/components/shared/header/top-bar";
import { Container } from "@/components/shared/container";
import Footer from "@/components/shared/footer/footer";
import ReduxProvider from "@/components/shared/providers/redux-provider";
import NextAuthProvider from "@/components/shared/providers/auth-provider";

const nunito = Nunito({
  subsets: ["latin", "cyrillic"],
  variable: "--font-nunito",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
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
            <div>
              <UpperHeader />
              <Header />
              <Container className="flex justify-between items-center">
                <TopBar />
              </Container>
              {children}
              <Footer />
            </div>
          </ReduxProvider>
        </NextAuthProvider>
      </body>
    </html>
  );
}
