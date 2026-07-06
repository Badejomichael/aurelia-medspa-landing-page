"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  light = false,
}: SectionHeadingProps) {
  const alignment = align === "center" ? "items-center text-center mx-auto" : "items-start text-left";

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={fadeUp}
      className={`flex flex-col ${alignment} max-w-2xl gap-4`}
    >
      <span
        className={`font-label text-[12px] tracking-[0.25em] uppercase ${
          light ? "text-[#F7F2EB]/70" : "text-[#8C6A4E]"
        }`}
      >
        {eyebrow}
      </span>
      <h2
        className={`font-display text-[clamp(2rem,4.5vw,3.4rem)] leading-[1.08] font-normal ${
          light ? "text-[#F7F2EB]" : "text-[#26221D]"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`font-body text-[16px] leading-relaxed ${
            light ? "text-[#F7F2EB]/75" : "text-[#26221D]/65"
          }`}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}
