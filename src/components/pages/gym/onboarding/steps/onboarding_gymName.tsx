import React from "react";
import { motion } from "framer-motion";

const OnboardingGymName = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }} // Animation when entering
      animate={{ opacity: 1, y: 0 }} // Animation when mounted
      exit={{ opacity: 0 }} // Animation when unmounting
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="flex flex-col items-center justify-center h-full"
    >
      <h1 className="text-3xl font-bold">What&apos;s your gym&apos;s name?</h1>
      <input
        type="text"
        placeholder="Enter your gym name"
        className="mt-4 px-4 py-2 border rounded-lg w-80"
      />
    </motion.div>
  );
};

export default OnboardingGymName;
