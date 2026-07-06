"use client";

import SectionHeading from "@/components/ui/SectionHeading";
import FAQItem from "@/components/ui/FAQItem";
import { FAQ_ITEMS } from "@/lib/data";

export default function FAQ() {
  return (
    <section id="faq" className="bg-[#F7F2EB] py-24 sm:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-14">
        <SectionHeading
          eyebrow="Good to Know"
          title="Questions people ask before their first visit."
        />

        <div className="flex flex-col">
          {FAQ_ITEMS.map((item) => (
            <FAQItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
