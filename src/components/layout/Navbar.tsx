"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineBars3, HiOutlineXMark, HiOutlinePhone } from "react-icons/hi2";
import { BUSINESS, NAV_LINKS } from "@/lib/constants";
import Button from "@/components/ui/Button";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 40);
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock background scroll while the mobile menu is open, and make sure
  // it's always restored (route change, unmount, etc).
  useEffect(() => {
    if (open) {
      const previous = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = previous;
      };
    }
  }, [open]);

  const mobileMenu = (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] flex flex-col bg-[#F7F2EB] overflow-y-auto"
        >
          <div className="flex items-center justify-between px-6 py-6 shrink-0">
            <span className="font-display text-[1.4rem] text-[#26221D]">
              {BUSINESS.name}
            </span>
            <button onClick={() => setOpen(false)} aria-label="Close menu">
              <HiOutlineXMark size={26} className="text-[#26221D]" />
            </button>
          </div>

          <div className="flex flex-col gap-1 px-6 mt-4">
            {NAV_LINKS.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * i, duration: 0.4 }}
                className="font-display text-[2rem] py-3 border-b border-[#26221D]/10 text-[#26221D]"
              >
                {link.label}
              </motion.a>
            ))}
          </div>

          <div className="mt-auto px-6 py-8 shrink-0">
            <a
              href={BUSINESS.phoneHref}
              className="flex items-center gap-2 font-label text-[13px] tracking-wide text-[#26221D]/70 mb-5"
            >
              <HiOutlinePhone size={16} />
              {BUSINESS.phone}
            </a>
            <Button href={BUSINESS.booking} variant="primary" className="w-full">
              Book Consultation
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#F7F2EB]/90 backdrop-blur-md py-3 shadow-[0_1px_0_rgba(38,34,29,0.08)]"
          : "bg-transparent py-6"
      }`}
    >
      <nav className="mx-auto max-w-[1400px] px-6 lg:px-12 flex items-center justify-between">
        <a href="#top" className="font-display text-[1.4rem] tracking-[0.02em] text-[#26221D]">
          {BUSINESS.name}
        </a>

        <div className="hidden lg:flex items-center gap-9">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-label text-[12.5px] tracking-[0.08em] uppercase text-[#26221D]/70 hover:text-[#26221D] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-4">
          <a
            href={BUSINESS.phoneHref}
            className="flex items-center gap-2 font-label text-[12.5px] tracking-wide text-[#26221D]/70 hover:text-[#26221D]"
          >
            <HiOutlinePhone size={16} />
            {BUSINESS.phone}
          </a>
          <Button href={BUSINESS.booking} variant="primary">
            Book Now
          </Button>
        </div>

        <button
          onClick={() => setOpen(true)}
          className="lg:hidden text-[#26221D]"
          aria-label="Open menu"
        >
          <HiOutlineBars3 size={26} />
        </button>
      </nav>

      {mounted && createPortal(mobileMenu, document.body)}
    </header>
  );
}