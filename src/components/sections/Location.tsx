"use client";

import { motion } from "framer-motion";
import { slideInLeft, slideInRight } from "@/lib/animations";
import { HiOutlineMapPin, HiOutlinePhone, HiOutlineClock } from "react-icons/hi2";
import { BUSINESS } from "@/lib/constants";
import Button from "@/components/ui/Button";

export default function Location() {
  return (
    <section id="location" className="bg-[#F7F2EB] py-24 sm:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={slideInLeft}
          className="flex flex-col justify-center gap-7 order-2 lg:order-1"
        >
          <span className="font-label text-[12px] tracking-[0.25em] uppercase text-[#8C6A4E]">
            Find Us
          </span>
          <h2 className="font-display text-[clamp(2rem,4vw,3rem)] leading-[1.08] text-[#26221D]">
            Come see the space for yourself.
          </h2>

          <div className="flex flex-col gap-4">
            <div className="flex items-start gap-3">
              <HiOutlineMapPin className="text-[#8C6A4E] mt-1 shrink-0" size={20} />
              <span className="font-body text-[15.5px] text-[#26221D]/75">
                {BUSINESS.address}
              </span>
            </div>
            <div className="flex items-start gap-3">
              <HiOutlinePhone className="text-[#8C6A4E] mt-1 shrink-0" size={20} />
              <a href={BUSINESS.phoneHref} className="font-body text-[15.5px] text-[#26221D]/75">
                {BUSINESS.phone}
              </a>
            </div>
            <div className="flex items-start gap-3">
              <HiOutlineClock className="text-[#8C6A4E] mt-1 shrink-0" size={20} />
              <div className="flex flex-col font-body text-[15.5px] text-[#26221D]/75">
                {BUSINESS.hours.map((h) => (
                  <div key={h.day} className="flex gap-4">
                    <span className="w-36">{h.day}</span>
                    <span>{h.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <Button href={BUSINESS.booking} variant="primary" className="w-fit mt-2">
            Book a Consultation
          </Button>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={slideInRight}
          className="order-1 lg:order-2 rounded-[28px] overflow-hidden min-h-[320px] lg:min-h-full"
        >
          <iframe
            src={BUSINESS.mapEmbedUrl}
            width="100%"
            height="100%"
            style={{ border: 0, minHeight: "320px" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Studio location map"
          />
        </motion.div>
      </div>
    </section>
  );
}
