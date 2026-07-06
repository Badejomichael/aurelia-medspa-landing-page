"use client";

import { useState } from "react";
import { HiOutlineMapPin, HiOutlinePhone, HiOutlineEnvelope } from "react-icons/hi2";
import { FaInstagram, FaFacebookF } from "react-icons/fa6";
import { BUSINESS, NAV_LINKS } from "@/lib/constants";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  }

  return (
    <footer id="contact" className="bg-[#26221D] text-[#F7F2EB] pt-20 pb-8">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16">
          {/* Brand + socials */}
          <div className="flex flex-col gap-5">
            <span className="font-display text-[1.7rem]">{BUSINESS.name}</span>
            <p className="font-body text-[14px] leading-relaxed text-[#F7F2EB]/60 max-w-[240px]">
              {BUSINESS.tagline}
            </p>
            <div className="flex gap-3 mt-2">
              <a
                href={BUSINESS.social.instagram}
                aria-label="Instagram"
                className="h-10 w-10 flex items-center justify-center rounded-full border border-[#F7F2EB]/20 hover:border-[#F7F2EB]/50 transition-colors"
              >
                <FaInstagram size={16} />
              </a>
              <a
                href={BUSINESS.social.facebook}
                aria-label="Facebook"
                className="h-10 w-10 flex items-center justify-center rounded-full border border-[#F7F2EB]/20 hover:border-[#F7F2EB]/50 transition-colors"
              >
                <FaFacebookF size={16} />
              </a>
            </div>
          </div>

          {/* Nav */}
          <div className="flex flex-col gap-4">
            <span className="font-label text-[12px] tracking-[0.2em] uppercase text-[#F7F2EB]/45">
              Navigate
            </span>
            <div className="flex flex-col gap-2.5">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="font-body text-[14.5px] text-[#F7F2EB]/75 hover:text-[#F7F2EB] transition-colors w-fit"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact + hours */}
          <div className="flex flex-col gap-4">
            <span className="font-label text-[12px] tracking-[0.2em] uppercase text-[#F7F2EB]/45">
              Visit
            </span>
            <div className="flex flex-col gap-3 font-body text-[14.5px] text-[#F7F2EB]/75">
              <a href="#location" className="flex items-start gap-2.5 hover:text-[#F7F2EB]">
                <HiOutlineMapPin size={18} className="mt-0.5 shrink-0" />
                {BUSINESS.address}
              </a>
              <a href={BUSINESS.phoneHref} className="flex items-center gap-2.5 hover:text-[#F7F2EB]">
                <HiOutlinePhone size={18} className="shrink-0" />
                {BUSINESS.phone}
              </a>
              <a href={`mailto:${BUSINESS.email}`} className="flex items-center gap-2.5 hover:text-[#F7F2EB]">
                <HiOutlineEnvelope size={18} className="shrink-0" />
                {BUSINESS.email}
              </a>
            </div>
            <div className="flex flex-col gap-1 mt-2 font-body text-[13.5px] text-[#F7F2EB]/50">
              {BUSINESS.hours.map((h) => (
                <div key={h.day} className="flex justify-between gap-6">
                  <span>{h.day}</span>
                  <span>{h.time}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Email signup */}
          <div className="flex flex-col gap-4">
            <span className="font-label text-[12px] tracking-[0.2em] uppercase text-[#F7F2EB]/45">
              Stay in the loop
            </span>
            <p className="font-body text-[14px] text-[#F7F2EB]/60">
              Seasonal offers and skin-care notes, a couple of times a month.
            </p>
            {submitted ? (
              <p className="font-body text-[14px] text-[#BD8770]">
                You're on the list — welcome.
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="flex gap-2">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  className="flex-1 min-w-0 bg-transparent border border-[#F7F2EB]/25 rounded-full px-4 py-2.5 text-[14px] font-body text-[#F7F2EB] placeholder:text-[#F7F2EB]/40 focus:outline-none focus:border-[#F7F2EB]/60"
                />
                <button
                  type="submit"
                  className="font-label text-[12px] uppercase tracking-wide bg-[#F7F2EB] text-[#26221D] px-5 rounded-full shrink-0"
                >
                  Join
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="hairline opacity-30" />

          <p className="font-body pt-8 text-center text-[13px] text-[#F7F2EB]/40">
            © {new Date().getFullYear()} {BUSINESS.fullName}. All rights reserved.
          </p>
      </div>
    </footer>
  );
}
