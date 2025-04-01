"use client";
import { HowItWorksSteps } from "@/components/blocks/how-it-works-section";
import { SectionBadge } from "@/components/ui/section-badge";
import {motion} from 'motion/react'

const WorkSteps = [
  {
    step: "Step 1",
    title: "Learn the Basics",
    content: "Start your Web3 journey by learning the basics of blockchain.",
    image:
      "https://images.unsplash.com/photo-1723958929247-ef054b525153?q=80&w=2070&auto=format&fit=crop",
  },
  {
    step: "Step 2",
    title: "Deep Dive",
    content:
      "Dive deep into blockchain fundamentals and smart contract development.",
    image:
      "https://images.unsplash.com/photo-1723931464622-b7df7c71e380?q=80&w=2070&auto=format&fit=crop",
  },
  {
    step: "Step 3",
    title: "Build Projects",
    content:
      "Graduate with hands-on Web3 experience through building decentralized applications.",
    image:
      "https://images.unsplash.com/photo-1725961476494-efa87ae3106a?q=80&w=2070&auto=format&fit=crop",
  },
];

export function HowItWorksSection() {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }} // Initial state: hidden and positioned off-screen
      //   animate={{ y: 0, opacity : 1 }} // Animate on scroll into view
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 1 }} // Transition properties
      className="min-h-screen w-full flex flex-col justify-center items-center gap-10 mt-50 lg:mt-10"
    >
      <SectionBadge title="How it Works" />
      <HowItWorksSteps
        features={WorkSteps}
        title="Your Journey Starts Here"
        autoPlayInterval={4000}
        imageHeight="h-[500px]"
      />
    </motion.div>
  );
}
