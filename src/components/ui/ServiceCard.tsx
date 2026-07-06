"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import { Service } from "@/types";
import { HiOutlineArrowUpRight } from "react-icons/hi2";

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <motion.a
      href="#booking"
      variants={fadeUp}
      whileHover="hover"
      initial="rest"
      className="group relative flex flex-col overflow-hidden rounded-[28px] bg-[#EFE6DA] cursor-pointer"
    >
      <div className="relative h-[280px] overflow-hidden">
        <motion.div
          variants={{ rest: { scale: 1 }, hover: { scale: 1.08 } }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0"
        >
          <Image
            src={service.image}
            alt={service.name}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#26221D]/50 via-transparent to-transparent" />
        <span className="absolute top-4 right-4 font-label text-[12px] tracking-wide uppercase bg-[#F7F2EB]/90 text-[#26221D] px-3 py-1.5 rounded-full">
          {service.duration}
        </span>
      </div>

      <div className="flex flex-col gap-2.5 p-6">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-[1.5rem] leading-tight text-[#26221D]">
            {service.name}
          </h3>
          <motion.span
            variants={{ rest: { x: 0, y: 0 }, hover: { x: 3, y: -3 } }}
            transition={{ duration: 0.3 }}
            className="mt-1.5 shrink-0 text-[#8C6A4E]"
          >
            <HiOutlineArrowUpRight size={20} />
          </motion.span>
        </div>
        <p className="font-body text-[14.5px] leading-relaxed text-[#26221D]/60">
          {service.description}
        </p>
        <span className="font-label text-[13px] tracking-wide text-[#8C6A4E] mt-1">
          Starting at {service.startingPrice}
        </span>
      </div>
    </motion.a>
  );
}
