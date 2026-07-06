"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FAQItemType } from "@/types";
import { HiPlus } from "react-icons/hi2";

export default function FAQItem({ item }: { item: FAQItemType }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-[#26221D]/12">
      <button
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="w-full flex items-center justify-between gap-6 py-6 text-left"
      >
        <span className="font-display text-[1.2rem] sm:text-[1.35rem] text-[#26221D]">
          {item.question}
        </span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.3 }}
          className="shrink-0 text-[#8C6A4E]"
        >
          <HiPlus size={22} />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="font-body text-[15px] leading-relaxed text-[#26221D]/65 pb-6 pr-10">
              {item.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
