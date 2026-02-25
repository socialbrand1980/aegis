import { InputHTMLAttributes, TextareaHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type SharedProps = {
  label: string;
  className?: string;
};

type InputFieldProps = SharedProps &
  InputHTMLAttributes<HTMLInputElement> & {
    as?: "input";
  };

type TextareaFieldProps = SharedProps &
  TextareaHTMLAttributes<HTMLTextAreaElement> & {
    as: "textarea";
  };

export function Input(props: InputFieldProps | TextareaFieldProps) {
  const commonClass =
    "mt-2 w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-slate-300/70 outline-none transition focus:border-aegis-glow/70 focus:ring-2 focus:ring-aegis-glow/30";

  if (props.as === "textarea") {
    const { label, className, as, ...textareaProps } = props;
    return (
      <label className={cn("block text-sm font-medium text-slate-200", className)}>
        {label}
        <textarea className={commonClass} {...textareaProps} />
      </label>
    );
  }

  const { label, className, ...inputProps } = props;
  return (
    <label className={cn("block text-sm font-medium text-slate-200", className)}>
      {label}
      <input className={commonClass} {...inputProps} />
    </label>
  );
}
