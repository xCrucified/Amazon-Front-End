import SignupForm from "@/components/shared/signup-form-step-3";
import { Hexagon } from "lucide-react";
import Link from "next/link";

export default function Page() {
  return (
    <div className="bg-muted flex items-center">
      <div className="w-[400px] m-[auto] flex min-h-svh flex-col justify-center gap-6">
        <Link href="/" className="flex pl-2 gap-2 self-start font-medium mt-5">
          <div className="flex h-10 w-24 items-center justify-center rounded-md bg-primary text-primary-foreground">
            <Hexagon  className="size-6 mr-1" />
            <span className="font-bold text-[20px]">ONYX</span>
          </div>
        </Link>
        <SignupForm className="self-center w-full" />
      </div>
    </div>
  );
}
