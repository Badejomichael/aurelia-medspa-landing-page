"use client";

import { motion } from "framer-motion";
import { staggerContainer } from "@/lib/animations";
import { REVIEWS } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";
import ReviewCard from "@/components/ui/ReviewCard";

export default function Reviews() {
  return (
    <section className="bg-[#26221D] py-24 sm:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <SectionHeading
          eyebrow="Client Reviews"
          title="What it's actually like to sit in our chair."
          light
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14"
        >
          {REVIEWS.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
