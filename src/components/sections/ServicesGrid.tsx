"use client";

import { motion } from "framer-motion";
import { staggerContainer } from "@/lib/animations";
import { SERVICES } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";
import ServiceCard from "@/components/ui/ServiceCard";

export default function ServicesGrid() {
  return (
    <section id="services" className="bg-[#F7F2EB] py-24 sm:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <SectionHeading
            eyebrow="What We Offer"
            title="Treatments built around your skin, not a menu."
            description="At Aurelia, every plan starts with a real conversation. Below is where most people begin. We'll help you narrow it down at your consultation."
          />
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {SERVICES.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
