"use client";

import SectionHeading from "@/components/ui/SectionHeading";
import BeforeAfterSlider from "@/components/ui/BeforeAfterSlider";
import { BEFORE_AFTER } from "@/lib/data";

export default function BeforeAfter() {
  return (
    <section id="results" className="bg-[#EFE6DA] py-24 sm:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <SectionHeading
          eyebrow="Real Results"
          title="Drag to see the difference."
          description="A small sample of what's possible. Actual outcomes vary by skin and treatment plan, and every result here reflects a real course of care."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mt-14">
          {BEFORE_AFTER.map((pair) => (
            <BeforeAfterSlider key={pair.id} pair={pair} />
          ))}
        </div>
      </div>
    </section>
  );
}
