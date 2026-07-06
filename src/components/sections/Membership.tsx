"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer, slideInLeft } from "@/lib/animations";
import { MEMBERSHIP_TIERS } from "@/lib/data";
import Button from "@/components/ui/Button";
import { HiOutlineCheck } from "react-icons/hi2";
import { BUSINESS } from "@/lib/constants";

export default function Membership() {
  return (
    <section id="membership" className="bg-[#EFE6DA] py-24 sm:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-14 lg:gap-16 items-start">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={slideInLeft}
            className="flex flex-col gap-6 lg:sticky lg:top-28"
          >
            <span className="font-label text-[12px] tracking-[0.25em] uppercase text-[#8C6A4E]">
              The Self-Care Club
            </span>
            <h2 className="font-display text-[clamp(2rem,4vw,3rem)] leading-[1.08] text-[#26221D]">
              Consistency is what actually changes skin.
            </h2>
            <p className="font-body text-[16px] leading-relaxed text-[#26221D]/65 max-w-md">
              Our membership makes ongoing care simple and affordable. Pick a
              tier, use it monthly, and cancel or change anytime.
            </p>
            <div className="relative aspect-[4/3] rounded-[28px] overflow-hidden mt-4">
              <Image
                src="/images/membership/self-care.jpg"
                alt="At-home self care routine"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-3 gap-5"
          >
            {MEMBERSHIP_TIERS.map((tier) => (
              <motion.div
                key={tier.id}
                variants={fadeUp}
                className={`flex flex-col gap-6 rounded-[28px] p-7 ${
                  tier.highlighted
                    ? "bg-[#26221D] text-[#F7F2EB] sm:scale-[1.04] shadow-xl"
                    : "bg-[#F7F2EB] text-[#26221D] border border-[#26221D]/8"
                }`}
              >
                <div>
                  <h3 className="font-display text-[1.4rem]">{tier.name}</h3>
                  <div className="flex items-baseline gap-1 mt-2">
                    <span className="font-display text-[2.2rem]">{tier.price}</span>
                    <span
                      className={`font-body text-[13px] ${
                        tier.highlighted ? "text-[#F7F2EB]/60" : "text-[#26221D]/50"
                      }`}
                    >
                      {tier.period}
                    </span>
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  {tier.features.map((f) => (
                    <div key={f} className="flex items-start gap-2.5">
                      <HiOutlineCheck
                        className={`shrink-0 mt-0.5 ${
                          tier.highlighted ? "text-[#E4B896]" : "text-[#8C6A4E]"
                        }`}
                        size={17}
                      />
                      <span
                        className={`font-body text-[14px] leading-relaxed ${
                          tier.highlighted ? "text-[#F7F2EB]/85" : "text-[#26221D]/70"
                        }`}
                      >
                        {f}
                      </span>
                    </div>
                  ))}
                </div>

                <Button
                  href={BUSINESS.booking}
                  variant={tier.highlighted ? "ghost" : "secondary"}
                  className={`mt-auto w-full ${
                    tier.highlighted
                      ? "!bg-[#F7F2EB] !text-[#26221D] !border-none"
                      : ""
                  }`}
                >
                  Choose {tier.name}
                </Button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
