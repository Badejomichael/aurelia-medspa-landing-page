"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeUp } from "@/lib/animations";
import { TRUST_STATS } from "@/lib/data";

export default function TrustBar() {
  return (
    <section className="bg-[#F7F2EB] border-b border-[#26221D]/8">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        variants={staggerContainer}
        className="mx-auto max-w-[1400px] px-6 lg:px-12 py-10 grid grid-cols-2 lg:grid-cols-4 gap-y-8 gap-x-6"
      >
        {TRUST_STATS.map((stat) => (
          <motion.div key={stat.id} variants={fadeUp} className="flex flex-col gap-1">
            <span className="font-display text-[1.9rem] sm:text-[2.2rem] text-[#26221D] leading-none">
              {stat.value}
            </span>
            <span className="font-label text-[11.5px] tracking-[0.08em] uppercase text-[#26221D]/50">
              {stat.label}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
