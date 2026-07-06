import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import ServicesGrid from "@/components/sections/ServicesGrid";
import BeforeAfter from "@/components/sections/BeforeAfter";
import Provider from "@/components/sections/Provider";
import Reviews from "@/components/sections/Reviews";
import Membership from "@/components/sections/Membership";
import FAQ from "@/components/sections/FAQ";
import Location from "@/components/sections/Location";
import FinalCTA from "@/components/sections/FinalCTA";
import StickyBookBar from "@/components/ui/StickyBookBar";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <TrustBar />
      <ServicesGrid />
      <BeforeAfter />
      <Provider />
      <Reviews />
      <Membership />
      <FAQ />
      <Location />
      <FinalCTA />
      <Footer />
      <StickyBookBar />
    </main>
  );
}
