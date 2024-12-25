import { cn } from "@/lib/utils";
import React from "react";
import { Container } from "./container";

interface Props {
  className?: string;
}

export const Footer: React.FC<Props> = ({ className }) => {
  return (
    <footer className={cn("border border-b", className)}>
      <Container className="py-8">
        <div className={cn("items-center flex gap-4 justify-between")}>
          <p className="text-sm text-gray-400">
            © 2024 Onyx. All rights reserved.
          </p>
          <div className="grid">
            <p className="text-sm text-gray-400">
              Made with ❤️ by{" The Onyx Team"}
            </p>
            <samp className="text-xs text-gray-400 text-center">Amazon team</samp>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
