"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import Button from "@/components/ui/Button";
import { BUSINESS } from "@/lib/constants";

export default function FinalCTA() {
  return (
    <section id="booking" className="relative py-28 sm:py-36 overflow-hidden">
      <Image
        src="/images/cta/final-cta.jpg"
        alt="Relaxed client during a facial treatment"
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-[#26221D]/55" />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={fadeUp}
        className="relative z-10 mx-auto max-w-2xl px-6 flex flex-col items-center text-center gap-6"
      >
        <span className="font-label text-[12px] tracking-[0.3em] uppercase text-[#F7F2EB]/75">
          Your first visit starts here
        </span>
        <h2 className="font-display text-[clamp(2.2rem,5vw,3.6rem)] leading-[1.1] text-[#F7F2EB]">
          Start your journey to skin you feel good in.
        </h2>
        <Button
          href={BUSINESS.phoneHref}
          variant="primary"
          className="!bg-[#F7F2EB] !text-[#26221D] hover:!bg-[#BD8770] hover:!text-[#F7F2EB] mt-2"
        >
          Book Your Consultation
        </Button>
      </motion.div>
    </section>
  );
}
