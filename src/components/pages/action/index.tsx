"use client";
import React from "react";
import { motion } from "framer-motion";
import { Bot, Globe } from "lucide-react";
import Link from "next/link";
import { ThemeToggle } from "@/components/ui/theme-toggle";

interface ActionOptions {
  heading: string;
  subheading: string;
  link: string;
  icon: React.ReactNode;
}

const UserAction = () => {
  const actionOptions: ActionOptions[] = [
    {
      heading: "Automate Your Gym",
      icon: <Bot size={44} />,
      link: "/onboarding",
      subheading: "Run your gym on autopilot, no hands needed.",
    },
    {
      heading: "Explore Gyms",
      icon: <Globe size={44} />,
      link: "/gyms",
      subheading: "Discover and join the perfect gym near you in seconds.",
    },
  ];

  return (
    <div className="w-screen h-[90vh] flex justify-center items-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <div className="flex flex-col justify-center items-center w-full gap-10">
          <div className="flex flex-col justify-center items-center w-full gap-2">
            <h2 className="text-2xl font-medium">Select an action</h2>
            <p className="text-muted-foreground text-sm">
              What do you wanna do ?
            </p>
            <ThemeToggle />
          </div>
          <div className="flex flex-col justify-center items-center w-full gap-5 px-5">
            {actionOptions.map(({ heading, icon, link, subheading }) => {
              return (
                <Link
                  href={link}
                  className="cursor-pointer max-w-md w-full dark:bg-neutral-900 bg-neutral-100 p-10 rounded-2xl"
                  key={heading}
                >
                  <div className="w-full flex justify-start items-center gap-7">
                    <span>{icon}</span>
                    <div className="flex justify-center flex-col items-start w-full gap-2">
                      <p className="font-medium text-lg">{heading}</p>
                      <p className="text-sm tracking-wide text-muted-foreground">
                        {subheading}
                      </p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default UserAction;
