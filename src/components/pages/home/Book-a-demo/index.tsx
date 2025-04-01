"use client";
import React, { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { SectionBadge } from "@/components/ui/section-badge";
import { motion } from "framer-motion"; // Corrected the import (assuming framer-motion is being used)
import { Button } from "@/components/ui/button";
import { BackgroundBeams } from "@/components/ui/background-beams";

function BookADemo() {
  // State to track whether the component is mounted on the client-side
  const [isClient, setIsClient] = useState(false);

  // Use useEffect to set the isClient state to true after the component is mounted
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Don't render the motion component until after the component mounts
  if (!isClient) {
    return null; // Or you can return a loading state here
  }

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 1 }}
      className="min-h-screen w-full flex flex-col justify-center items-center gap-10 mt-50 lg:mt-10"
    >
      <SectionBadge title="Demo" />
      <div className="h-[40rem] w-full rounded-md bg-background relative flex flex-col items-center justify-center antialiased">
        <div className="absolute inset-0 flex justify-center items-center">
          {/* Glowing circle */}
          {/* <div className="absolute md:-top-20 min-w-full min-h-full md:min-w-screen md:min-h-screen rounded-full bg-[#7C3AED] opacity-20 blur-3xl animate-pulse"></div> */}
        </div>
        <div className="max-w-2xl mx-auto p-4 space-y-10 z-50">
          <h1 className="relative z-10 text-5xl bg-clip-text text-transparent bg-gradient-to-b from-foreground to-muted-foreground text-center font-sans font-bold">
            Book a Demo
            <br />
            Now
          </h1>
          <p className="text-muted-foreground max-w-lg mx-auto my-2 text-sm font-medium text-center relative z-10">
            Book a free demo and see how GymBelt&apos; AI can handle everything
            for you. From memberships to billing, our app does it all—so you can
            sit back, relax, and watch your profits grow while you focus on what
            matters most.
          </p>
          <Button className="w-full mt-16">Book A Demo</Button>
        </div>
        {/* <BackgroundBeams /> */}
      </div>
    </motion.div>
  );
}

export { BookADemo };
