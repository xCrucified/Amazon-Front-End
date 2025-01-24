import { LoginForm } from "@/components/shared/login-form";
import Logo from "@/components/ui/logo";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center bg-muted p-[32px]">
      <div className="flex w-[405px] max-w-sm flex-col gap-6">
        <Link href="/" className="items-center self-center">
          <Logo />
        </Link>
        <LoginForm /> 
      </div>
    </div>
  );
}
