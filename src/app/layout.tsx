import type { Metadata } from "next";
import { Fraunces, Manrope, Space_Grotesk } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  style: ["normal", "italic"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-label",
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aurelia Aesthetic Studio | Medical Spa in Richmond, VA",
  description:
    "Neuromodulators, fillers, laser, and skin renewal delivered with quiet confidence and considered care. Book your consultation with Aurelia Aesthetic Studio.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/images/logo.png" />
      </head>
      <body
        className={`${fraunces.variable} ${manrope.variable} ${spaceGrotesk.variable} bg-[#F7F2EB] text-[#26221D] antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
