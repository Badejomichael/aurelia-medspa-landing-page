export interface Service {
  id: string;
  name: string;
  description: string;
  startingPrice: string;
  image: string;
  duration: string;
}

export interface Review {
  id: string;
  quote: string;
  name: string;
  treatment: string;
  rating: number;
}

export interface FAQItemType {
  id: string;
  question: string;
  answer: string;
}

export interface BeforeAfterPair {
  id: string;
  before: string;
  after: string;
  label: string;
  treatment: string;
}

export interface TrustStat {
  id: string;
  value: string;
  label: string;
}

export interface MembershipTier {
  id: string;
  name: string;
  price: string;
  period: string;
  features: string[];
  highlighted?: boolean;
}
