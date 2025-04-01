"use client";
import React from "react";
import { motion } from "motion/react";

const About = () => {
  return (
    <motion.div
      className="text-xl font-semibold"
      initial={{ y: -100 }}
      animate={{ y: 20 }}
      transition={{
        duration: 0.3,
        ease: "backOut",
      }}
    >
      hello
    </motion.div>
  );
};

export default About;
