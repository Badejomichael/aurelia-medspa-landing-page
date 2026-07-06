"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  onClick?: () => void;
}

export default function Button({
  children,
  href,
  variant = "primary",
  className = "",
  onClick,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 px-7 py-3.5 text-[13px] tracking-[0.08em] uppercase font-label font-medium rounded-full transition-colors duration-300";

  const variants: Record<string, string> = {
    primary: "bg-[#26221D] text-[#F7F2EB] hover:bg-[#BD8770]",
    secondary:
      "bg-transparent text-[#26221D] border border-[#26221D]/30 hover:border-[#26221D]",
    ghost:
      "bg-[#F7F2EB]/90 text-[#26221D] border border-[#26221D]/15 hover:bg-[#F7F2EB]",
  };

  const Comp = motion.a;

  return (
    <Comp
      href={href}
      onClick={onClick}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className={`${base} ${variants[variant]} ${className}`}
    >
      {children}
    </Comp>
  );
}
