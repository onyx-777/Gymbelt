"use client";

import { Pricing } from "@/components/blocks/pricing";
import { SectionBadge } from "@/components/ui/section-badge";
import { motion } from "motion/react";

const demoPlans = [
  {
    name: "STARTER",
    price: "50",
    yearlyPrice: "40",
    period: "per month",
    features: [
      "Up to 10 projects",
      "Basic analytics",
      "48-hour support response time",
      "Limited API access",
      "Community support",
    ],
    description: "Perfect for individuals and small projects",
    buttonText: "Start Free Trial",
    href: "/sign-up",
    isPopular: false,
  },
  {
    name: "PROFESSIONAL",
    price: "99",
    yearlyPrice: "79",
    period: "per month",
    features: [
      "Unlimited projects",
      "Advanced analytics",
      "24-hour support response time",
      "Full API access",
      "Priority support",
      "Team collaboration",
      "Custom integrations",
    ],
    description: "Ideal for growing teams and businesses",
    buttonText: "Get Started",
    href: "/sign-up",
    isPopular: true,
  },
  {
    name: "ENTERPRISE",
    price: "299",
    yearlyPrice: "239",
    period: "per month",
    features: [
      "Everything in Professional",
      "Custom solutions",
      "Dedicated account manager",
      "1-hour support response time",
      "SSO Authentication",
      "Advanced security",
      "Custom contracts",
      "SLA agreement",
    ],
    description: "For large organizations with specific needs",
    buttonText: "Contact Sales",
    href: "/contact",
    isPopular: false,
  },
];

function PricingSection() {
  return (
    <motion.div
      className="min-h-screen w-full flex flex-col justify-center items-center gap-10 mt-50 lg:mt-10"
      initial={{ y: 100, opacity: 0 }} // Initial state: hidden and positioned off-screen
      //   animate={{ y: 0, opacity : 1 }} // Animate on scroll into view
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 1 }} // Transition properties
    >
      <SectionBadge title="Pricing" />

      <Pricing
        plans={demoPlans}
        title="Simple, Transparent Pricing"
        description="Choose the plan that works for you\nAll plans include access to our platform, lead generation tools, and dedicated support."
      />
    </motion.div>
  );
}

export { PricingSection };
