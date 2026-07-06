"use client";

import { motion } from "framer-motion";
import { heroTextStagger, heroWord, fadeIn } from "@/lib/animations";
import Button from "@/components/ui/Button";
import { BUSINESS } from "@/lib/constants";
import { HiOutlineChevronDown } from "react-icons/hi2";

export default function Hero() {
  return (
    <section id="top" className="relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-[#26221D]">
      <video
        autoPlay
        muted
        loop
        playsInline
        poster="/images/hero-poster.jpg"
        className="absolute inset-0 h-full w-full object-cover opacity-90"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-gradient-to-b from-[#26221D]/55 via-[#26221D]/25 to-[#26221D]/70" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#26221D]/40 via-transparent to-transparent" />

      <div className="relative z-10 h-full mx-auto max-w-[1400px] px-6 lg:px-12 flex flex-col justify-end pb-24 pt-32 md:mt-15">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="mb-6"
        >
          <span className="font-label text-[12.5px] tracking-[0.3em] uppercase text-[#F7F2EB]/70">
            {BUSINESS.city}'s
          </span>
        </motion.div>

        <motion.h1
          initial="hidden"
          animate="visible"
          variants={heroTextStagger}
          className="font-display text-[clamp(2.6rem,7vw,5.6rem)] leading-[1.02] text-[#F7F2EB] max-w-4xl uppercase"
        >
          <motion.span variants={heroWord} className="block">
            Medical Aesthetics &amp;
          </motion.span>
          <motion.span variants={heroWord} className="block italic font-normal normal-case text-[#E4B896]">
            Skin Renewal Studio
          </motion.span>
        </motion.h1>

        <motion.p
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { delay: 0.9, duration: 0.7 } },
          }}
          className="font-body text-[16px] sm:text-[17px] text-[#F7F2EB]/75 max-w-md mt-6"
        >
          Aurelia is a Richmond-based med spa offering injectables, laser,
          and advanced skin treatments delivered by licensed providers
          who take the time to listen.
        </motion.p>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { delay: 1.05, duration: 0.7 } },
          }}
          className="flex flex-wrap items-center gap-4 mt-10"
        >
          <Button href={BUSINESS.booking} variant="primary" className="!bg-[#F7F2EB] !text-[#26221D] hover:!bg-[#BD8770] hover:!text-[#F7F2EB]">
            Book a Consultation
          </Button>
          <Button href="#services" variant="ghost" className="!bg-transparent !border-[#F7F2EB]/30 !text-[#F7F2EB] hover:!bg-[#F7F2EB]/10">
            View Services
          </Button>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-6 right-6 lg:right-12 z-10 text-[#F7F2EB]/60"
      >
        <HiOutlineChevronDown size={24} />
      </motion.div>
    </section>
  );
}
