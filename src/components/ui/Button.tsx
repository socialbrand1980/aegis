import Link from "next/link";
import { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type BaseProps = {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
};

type ButtonProps = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: string;
  };

function buttonClass({ variant = "primary", size = "md", className }: BaseProps) {
  return cn(
    "touch-feedback group inline-flex items-center justify-center rounded-full font-semibold tracking-tight transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-aegis-glow/70",
    size === "sm" && "h-9 px-4 text-sm",
    size === "md" && "h-11 px-6 text-sm md:text-base",
    size === "lg" && "h-12 px-7 text-base",
    variant === "primary" &&
      "bg-gradient-to-r from-aegis-accent to-blue-500 text-white shadow-[0_10px_35px_-15px_rgba(59,130,246,0.9)] hover:-translate-y-0.5 hover:shadow-[0_14px_38px_-14px_rgba(59,130,246,0.9)]",
    variant === "secondary" &&
      "border border-white/25 bg-white/[0.06] text-white backdrop-blur-xl hover:-translate-y-0.5 hover:bg-white/[0.14]",
    variant === "ghost" && "text-slate-200 hover:bg-white/10 hover:text-white",
    className
  );
}

export function Button(props: ButtonProps) {
  const { href, variant, size, className, children, ...rest } = props;

  if (href) {
    return (
      <Link href={href} className={buttonClass({ variant, size, className })}>
        {children}
      </Link>
    );
  }

  return (
    <button className={buttonClass({ variant, size, className })} {...rest}>
      {children}
    </button>
  );
}
