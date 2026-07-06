"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { BeforeAfterPair } from "@/types";
import { PiDropSimpleBold } from "react-icons/pi";

export default function BeforeAfterSlider({ pair }: { pair: BeforeAfterPair }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dragging, setDragging] = useState(false);
  const x = useMotionValue(50); // percentage 0-100
  const clipPath = useTransform(x, (v) => `inset(0 ${100 - v}% 0 0)`);

  function updateFromClientX(clientX: number) {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    x.set(Math.min(100, Math.max(0, pct)));
  }

  function handlePointerDown(e: React.PointerEvent) {
    setDragging(true);
    (e.target as Element).setPointerCapture(e.pointerId);
    updateFromClientX(e.clientX);
  }

  function handlePointerMove(e: React.PointerEvent) {
    if (!dragging) return;
    updateFromClientX(e.clientX);
  }

  function handlePointerUp() {
    setDragging(false);
  }

  function nudge(delta: number) {
    animate(x, Math.min(100, Math.max(0, x.get() + delta)), {
      duration: 0.3,
      ease: [0.22, 1, 0.36, 1],
    });
  }

  return (
    <div className="flex flex-col gap-4">
      <div
        ref={containerRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp}
        className="relative aspect-[4/5] sm:aspect-[3/4] w-full select-none overflow-hidden rounded-[28px] cursor-ew-resize touch-none bg-[#EFE6DA]"
        role="slider"
        aria-label={`Before and after comparison for ${pair.label}`}
        aria-valuenow={Math.round(x.get())}
        aria-valuemin={0}
        aria-valuemax={100}
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "ArrowLeft") nudge(-8);
          if (e.key === "ArrowRight") nudge(8);
        }}
      >
        {/* After image - full base layer */}
        <Image
          src={pair.after}
          alt={`${pair.label} — after`}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover pointer-events-none"
          draggable={false}
        />

        {/* Before image - clipped */}
        <motion.div
          style={{ clipPath }}
          className="absolute inset-0 pointer-events-none"
        >
          <Image
            src={pair.before}
            alt={`${pair.label} — before`}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
            draggable={false}
          />
        </motion.div>

        {/* labels */}
        <span className="absolute top-4 left-4 font-label text-[11px] tracking-[0.15em] uppercase bg-[#26221D]/70 text-[#F7F2EB] px-3 py-1.5 rounded-full pointer-events-none">
          Before
        </span>
        <span className="absolute top-4 right-4 font-label text-[11px] tracking-[0.15em] uppercase bg-[#8C6A4E]/85 text-[#F7F2EB] px-3 py-1.5 rounded-full pointer-events-none">
          After
        </span>

        {/* divider line + handle */}
        <motion.div
          style={{ left: useTransform(x, (v) => `${v}%`) }}
          className="absolute top-0 bottom-0 w-[2px] bg-[#F7F2EB] pointer-events-none"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-11 w-11 rounded-full bg-[#F7F2EB] shadow-lg flex items-center justify-center text-[#8C6A4E] ring-1 ring-[#A9834F]/50">
            <PiDropSimpleBold size={18} />
          </div>
        </motion.div>
      </div>

      <div className="flex items-center justify-between px-1">
        <p className="font-display text-[1.15rem] text-[#26221D]">{pair.label}</p>
        <p className="font-label text-[12px] uppercase tracking-wide text-[#26221D]/50">
          {pair.treatment}
        </p>
      </div>
    </div>
  );
}
