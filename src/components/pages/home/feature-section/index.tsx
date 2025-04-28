"use client";
import React from "react";
import { FeaturesSectionWithHoverEffects } from "@/components/blocks/feature-section-with-hover-effects";
import { motion } from "framer-motion"; // Import framer-motion and useInView
import { SectionBadge } from "@/components/ui/section-badge";

function Features() {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }} // Initial state: hidden and positioned off-screen
      //   animate={{ y: 0, opacity : 1 }} // Animate on scroll into view
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, delay: 1 }} // Transition properties
      className="min-h-full w-full flex flex-col justify-center items-center gap-10 mt-50 lg:mt-10"
    >
      <SectionBadge title="Features" />
      <FeaturesSectionWithHoverEffects />
    </motion.div>
  );
}

export { Features };
