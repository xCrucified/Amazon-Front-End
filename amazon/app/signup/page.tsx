import SignupForm from "@/components/shared/signup-form";
import { GalleryVerticalEnd } from "lucide-react";

export default function Page() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-muted">
      <a href="#" className="flex w-[1000px] pl-2 items-center gap-2 self-center font-medium">
        <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary text-primary-foreground">
          <GalleryVerticalEnd className="size-8" />
        </div>
        <span className="font-bold text-[40px]">Onyx</span>
      </a>
      <SignupForm />
    </div>
  );
}
