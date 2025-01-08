import SignupForm from "@/components/shared/signup-form";
import { Hexagon } from "lucide-react";

export default function Page() {
  return (
    <div className="bg-muted flex items-center">
      <div className="w-[70%] m-[auto] flex min-h-svh flex-col justify-center gap-6">
        <a href="#" className="flex pl-2 gap-2 self-start font-medium mt-5">
          <div className="flex h-10 w-24 items-center justify-center rounded-md bg-primary text-primary-foreground">
            <Hexagon  className="size-6 mr-1" />
            <span className="font-bold text-[20px]">ONYX</span>
          </div>
        </a>
        <SignupForm className="self-center w-full" />
      </div>
    </div>
  );
}