import { cn } from "@/lib/utils";

interface InputOTPProps {
  className: string;
}

export default function InputOTP({ className }: InputOTPProps) {
  return (
    <div className={cn("", className)}>
      Enter
      <label>awd</label>
    </div>
  );
}
