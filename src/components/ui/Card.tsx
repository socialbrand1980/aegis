import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type CardProps = HTMLAttributes<HTMLDivElement>;

export function Card({ className, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "touch-feedback glass p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/30 hover:bg-white/[0.1] md:p-7",
        className
      )}
      {...props}
    />
  );
}
