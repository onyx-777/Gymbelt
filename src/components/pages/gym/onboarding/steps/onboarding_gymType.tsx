import React from "react";
import { motion } from "framer-motion";

const OnboardingGymType = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }} // Animation when entering
      animate={{ opacity: 1, y: 0 }} // Animation when mounted
      exit={{ opacity: 0 }} // Animation when unmounting
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="flex flex-col items-center justify-center h-full w-full"
    >
      <h1 className="text-3xl font-bold">What type of gym do you own?</h1>
      <select className="mt-4 px-4 py-2 border rounded-lg w-80">
        <option value="fitness">Fitness Gym</option>
        <option value="yoga">Yoga Studio</option>
        <option value="crossfit">CrossFit</option>
      </select>
    </motion.div>
  );
};

export default OnboardingGymType;
