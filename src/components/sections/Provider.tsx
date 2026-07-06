"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { slideInLeft, slideInRight } from "@/lib/animations";
import { HiOutlineCheckBadge } from "react-icons/hi2";

const CREDENTIALS = [
  "Board-Certified Registered Nurse Injector",
  "10+ years in medical aesthetics",
  "Advanced training in neuromodulators & dermal fillers",
  "Member, American Med Spa Association",
];

export default function Provider() {
  return (
    <section id="provider" className="bg-[#F7F2EB] py-24 sm:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={slideInLeft}
          className="relative aspect-[4/5] rounded-[32px] overflow-hidden order-2 lg:order-1"
        >
          <Image
            src="/images/provider/lead-provider.jpg"
            alt="Danielle, lead provider at Aurelia Aesthetic Studio"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={slideInRight}
          className="flex flex-col gap-6 order-1 lg:order-2"
        >
          <span className="font-label text-[12px] tracking-[0.25em] uppercase text-[#8C6A4E]">
            Meet Your Provider
          </span>
          <h2 className="font-display text-[clamp(2rem,4vw,3.2rem)] leading-[1.08] text-[#26221D]">
            Trained hands. Unrushed conversations.
          </h2>
          <p className="font-body text-[16px] leading-relaxed text-[#26221D]/65 max-w-lg">
            Danielle leads every treatment plan at Aurelia. Her approach favors
            subtlety and precision over dramatic change. She'll tell you
            honestly when less is more.
          </p>

          <div className="flex flex-col gap-3 mt-2">
            {CREDENTIALS.map((c) => (
              <div key={c} className="flex items-start gap-3">
                <HiOutlineCheckBadge className="text-[#8C6A4E] shrink-0 mt-0.5" size={20} />
                <span className="font-body text-[15px] text-[#26221D]/75">{c}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
