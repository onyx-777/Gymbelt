"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import useStore from "@/context/gym-registration/gym-setup-context";

const AnimatedLogo = () => {
  const { step } = useStore();

  return (
    <>
      {step > 0 && (
        <div className="w-fit absolute top-20 left-10">
          <motion.div
            initial={{ opacity: 0, scale: 0, y: -100 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="relative w-14 aspect-square mb-5"
          >
            <Image
              src="/assets/logo.png"
              alt="gymbelt"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      )}
    </>
  );
};

export default AnimatedLogo;
