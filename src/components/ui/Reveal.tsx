"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
};

export function Reveal({ children, className, delay = 0, y = 22 }: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);
  const [offset, setOffset] = useState(y);

  useEffect(() => {
    if (typeof window !== "undefined" && window.innerWidth < 768) {
      setOffset(Math.max(12, y - 8));
    }
  }, [y]);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(node);
        }
      },
      { threshold: isMobile ? 0.06 : 0.15, rootMargin: isMobile ? "0px 0px -4% 0px" : "0px 0px -10% 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms`, transform: visible ? "translateY(0px)" : `translateY(${offset}px)` }}
      className={cn(
        "transition-[opacity,transform,filter] duration-700 ease-out will-change-transform",
        visible ? "translate-y-0 opacity-100 blur-0" : "opacity-0 blur-[2px]",
        className
      )}
    >
      {children}
    </div>
  );
}
