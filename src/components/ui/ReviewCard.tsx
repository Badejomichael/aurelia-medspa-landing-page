"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import { Review } from "@/types";
import { HiStar } from "react-icons/hi2";
import { RiDoubleQuotesL } from "react-icons/ri";

export default function ReviewCard({ review }: { review: Review }) {
  return (
    <motion.div
      variants={fadeUp}
      className="flex flex-col justify-between gap-6 rounded-[28px] bg-[#F7F2EB] border border-[#26221D]/8 p-8 h-full"
    >
      <RiDoubleQuotesL className="text-[#D8C0AC]" size={32} />
      <p className="font-display text-[1.35rem] leading-snug text-[#26221D] italic">
        “{review.quote}”
      </p>
      <div className="flex items-center justify-between pt-4 border-t border-[#26221D]/10">
        <div>
          <p className="font-label text-[13px] tracking-wide text-[#26221D]">
            {review.name}
          </p>
          <p className="font-body text-[12.5px] text-[#26221D]/50">
            {review.treatment}
          </p>
        </div>
        <div className="flex gap-0.5 text-[#BD8770]">
          {Array.from({ length: review.rating }).map((_, i) => (
            <HiStar key={i} size={14} />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
