import {
  Service,
  Review,
  FAQItemType,
  BeforeAfterPair,
  TrustStat,
  MembershipTier,
} from "@/types";

export const TRUST_STATS: TrustStat[] = [
  { id: "t1", value: "12+", label: "Years in Practice" },
  { id: "t2", value: "4.9", label: "Average Rating, 300+ Reviews" },
  { id: "t3", value: "6,200+", label: "Treatments Performed" },
  { id: "t4", value: "RN / NP", label: "Licensed & Insured Providers" },
];

export const SERVICES: Service[] = [
  {
    id: "injectables",
    name: "Neuromodulators",
    description:
      "Precise, natural-looking softening of fine lines across the forehead, brow, and eyes.",
    startingPrice: "$12/unit",
    duration: "20 min",
    image: "/images/services/injectables.jpg",
  },
  {
    id: "fillers",
    name: "Dermal Fillers",
    description:
      "Restore volume and definition to lips, cheeks, and jawline with hyaluronic-acid fillers.",
    startingPrice: "$650",
    duration: "45 min",
    image: "/images/services/fillers.jpg",
  },
  {
    id: "laser",
    name: "Laser Hair Removal",
    description:
      "Long-term hair reduction using medical-grade lasers, calibrated to your skin type.",
    startingPrice: "$85 / session",
    duration: "30 min",
    image: "/images/services/laser.jpg",
  },
  {
    id: "facials",
    name: "Signature Facials",
    description:
      "Custom facials built around your skin's needs e.g hydration, brightening, or calming.",
    startingPrice: "$150",
    duration: "50 min",
    image: "/images/services/facials.jpg",
  },
  {
    id: "renewal",
    name: "Skin Renewal",
    description:
      "Microneedling and radiofrequency treatments that rebuild collagen from within.",
    startingPrice: "$375",
    duration: "60 min",
    image: "/images/services/skin-renewal.jpg",
  },
];

export const BEFORE_AFTER: BeforeAfterPair[] = [
  {
    id: "ba1",
    before: "/images/before-after/pair1-before.jpg",
    after: "/images/before-after/pair1-after.jpg",
    label: "Skin Renewal Series",
    treatment: "3 sessions · microneedling + RF",
  },
  {
    id: "ba2",
    before: "/images/before-after/pair2-before.jpg",
    after: "/images/before-after/pair2-after.jpg",
    label: "Clarifying Facial Series",
    treatment: "6 weeks · signature facials",
  },
];

export const REVIEWS: Review[] = [
  {
    id: "r1",
    quote:
      "I've never felt rushed here. My provider explained every step and the results looked like me, just rested.",
    name: "M. Alvarez",
    treatment: "Neuromodulator + Filler",
    rating: 5,
  },
  {
    id: "r2",
    quote:
      "The skin renewal series changed my confidence more than any product ever has. Worth every visit.",
    name: "J. Chen",
    treatment: "Skin Renewal Series",
    rating: 5,
  },
  {
    id: "r3",
    quote:
      "Clean, calm space and a team that actually listens before recommending anything.",
    name: "R. Douglas",
    treatment: "Signature Facial",
    rating: 5,
  },
];

export const FAQ_ITEMS: FAQItemType[] = [
  {
    id: "f1",
    question: "Will there be any downtime?",
    answer:
      "Most treatments, including neuromodulators and fillers, have little to no downtime. You can return to normal activities the same day. Laser and skin renewal treatments may cause mild redness for 24–48 hours.",
  },
  {
    id: "f2",
    question: "Does it hurt?",
    answer:
      "Discomfort is minimal for most services and is managed with topical numbing where needed. We always walk you through sensation expectations before we begin.",
  },
  {
    id: "f3",
    question: "What happens at my first visit?",
    answer:
      "We start with an unhurried consultation to understand your goals and skin history, followed by a personalized plan. Treatment only happens once you're comfortable moving forward.",
  },
  {
    id: "f4",
    question: "Are your providers licensed?",
    answer:
      "Yes. Every injectable and medical treatment is performed or directly supervised by a licensed RN or NP with advanced aesthetic training.",
  },
  {
    id: "f5",
    question: "How soon will I see results?",
    answer:
      "Neuromodulators typically show results in 3–7 days. Fillers are visible immediately, with final settling over two weeks. Skin renewal builds gradually over a course of sessions.",
  },
];

export const MEMBERSHIP_TIERS: MembershipTier[] = [
  {
    id: "essential",
    name: "Essential",
    price: "$99",
    period: "/month",
    features: [
      "1 signature facial monthly",
      "10% off all injectables",
      "Members-only booking window",
    ],
  },
  {
    id: "renewal",
    name: "Renewal",
    price: "$189",
    period: "/month",
    highlighted: true,
    features: [
      "1 facial + 1 laser session monthly",
      "15% off injectables & fillers",
      "Quarterly skin consultation",
      "Priority booking",
    ],
  },
  {
    id: "unlimited",
    name: "Unlimited Glow",
    price: "$319",
    period: "/month",
    features: [
      "Unlimited monthly facials",
      "20% off all treatments",
      "Complimentary quarterly renewal add-on",
      "Dedicated provider matching",
    ],
  },
];
