"use client";
import React from "react";
import { FeaturesSectionWithHoverEffects } from "@/components/blocks/feature-section-with-hover-effects";
import { motion } from "framer-motion"; // Import framer-motion and useInView
import { SectionBadge } from "@/components/ui/section-badge";

function Features() {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }} // Initial state: hidden and positioned off-screen
      // animate={{ y: 0, opacity: 1 }} // Animate on scroll into view
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, delay: 0 }} // Transition properties
      className="min-h-full w-full flex flex-col justify-center items-center gap-10 mt-10 lg:mt-10"
    >
      <div className="max-w-[36rem] text-center flex flex-col justify-center items-center gap-4 md:gap-8">
        <SectionBadge title="Features" />
        <h2 className="text-2xl">What You Get</h2>
        <p className="text-muted-foreground text-sm px-10">
          The ultimate control center—manage every aspect of your gym, from
          memberships to payments, all in one place.
        </p>
      </div>

      <FeaturesSectionWithHoverEffects />
    </motion.div>
  );
}

export { Features };
