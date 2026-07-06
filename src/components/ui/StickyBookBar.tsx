"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlinePhone, HiOutlineXMark, HiStar } from "react-icons/hi2";
import { BUSINESS } from "@/lib/constants";

const DISMISS_KEY = "aurelia-sticky-book-dismissed";

export default function StickyBookBar() {
  const [pastHero, setPastHero] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [hideForSection, setHideForSection] = useState(false);
  const observerTargets = useRef<Element[]>([]);

  // Restore dismissal for this session so closing it actually sticks.
  useEffect(() => {
    if (sessionStorage.getItem(DISMISS_KEY) === "1") {
      setDismissed(true);
    }
  }, []);

  // Reveal once the person has scrolled roughly past the hero, not a fixed
  // pixel guess. Ties the threshold to the actual viewport height.
  useEffect(() => {
    function onScroll() {
      setPastHero(window.scrollY > window.innerHeight * 0.65);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Hide the bar whenever a section that already has its own prominent
  // booking CTA is on screen (final CTA banner, footer) so we don't stack
  // two "Book" prompts in front of the person at once.
  useEffect(() => {
    const ids = ["booking", "contact"];
    const els = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (els.length === 0) return;
    observerTargets.current = els;

    const observer = new IntersectionObserver(
      (entries) => {
        const anyVisible = entries.some((entry) => entry.isIntersecting);
        setHideForSection(anyVisible);
      },
      { threshold: 0.15 }
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  function handleDismiss() {
    setDismissed(true);
    sessionStorage.setItem(DISMISS_KEY, "1");
  }

  const visible = pastHero && !dismissed && !hideForSection;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-x-0 bottom-0 z-50 sm:hidden"
          style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
        >
          <div className="mx-3 mb-3 rounded-2xl bg-[#26221D]/95 backdrop-blur-md shadow-[0_8px_30px_rgba(0,0,0,0.25)] overflow-hidden">
            <div className="flex items-center gap-3 px-3.5 py-3">
              <a
                href={BUSINESS.phoneHref}
                aria-label="Call the studio"
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#F7F2EB]/20 text-[#F7F2EB] active:scale-95 transition-transform"
              >
                <HiOutlinePhone size={18} />
              </a>

              <div className="flex-1 min-w-0">
                <a
                  href={BUSINESS.booking}
                  className="flex items-center justify-center gap-2 w-full rounded-full bg-[#BD8770] py-3 font-label text-[12.5px] tracking-[0.08em] uppercase text-[#26221D] active:scale-[0.98] transition-transform"
                >
                  Book Consultation
                </a>
              </div>

              <button
                onClick={handleDismiss}
                aria-label="Dismiss booking bar"
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-[#F7F2EB]/50 active:scale-95 transition-transform"
              >
                <HiOutlineXMark size={18} />
              </button>
            </div>

            <div className="flex items-center gap-1.5 px-4 pb-2.5 -mt-1">
              <div className="flex text-[#E4B896]">
                {Array.from({ length: 5 }).map((_, i) => (
                  <HiStar key={i} size={11} />
                ))}
              </div>
              <span className="font-body text-[11.5px] text-[#F7F2EB]/50">
                4.9 rating · {BUSINESS.city}
              </span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}