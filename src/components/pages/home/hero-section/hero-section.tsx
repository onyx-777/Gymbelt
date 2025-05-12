"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { SectionBadge } from "@/components/ui/section-badge";
import Link from "next/link";
import { motion } from "framer-motion";
import clsx from "clsx";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Spotlight } from "@/components/ui/spotlight-new";
import { SplineScene } from "@/components/ui/splite"; // Import the new optimized SplineScene

interface HeroAction {
  text: string;
  href: string;
  icon?: React.ReactNode;
  variant?: "default" | "glow";
}

interface HeroProps {
  badge?: {
    text: string;
    action: {
      text: string;
      href: string;
    };
  };
  title: string;
  description: string;
  actions: HeroAction[];
  image: {
    light: string;
    dark: string;
    alt: string;
  };
}

export function HeroSection({ badge, title, description, actions }: HeroProps) {
  const [mounted, setMounted] = useState(false);

  // Track whether the component is mounted (for SSR)
  useEffect(() => {
    setMounted(true);
  }, []);

  // Skip rendering until mounted
  if (!mounted) {
    return null;
  }

  const isDesktop = typeof window !== "undefined" && window.innerWidth >= 1280;

  return (
    <ScrollArea>
      <section className="w-screen relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Spotlight />
        </div>

        <div className="relative z-10 flex justify-center items-center w-full h-screen mx-auto">
          {/* Left Column: Text Content */}
          <div className="flex-1 flex flex-col w-[45rem] xl:-mr-36 xl:pl-36 px-4 justify-center items-center xl:items-start gap-6 text-left">
            {badge && <SectionBadge title={badge.text} />}

            <h1 className="text-4xl text-center xl:text-left sm:text-6xl md:text-7xl font-semibold leading-tight bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
              {title}
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground max-w-xl">
              {description}
            </p>

            <div className="flex justify-center sm:justify-start flex-wrap gap-2 sm:gap-4 mt-6">
              {actions.map((action, index) => (
                <Button key={index} size="lg" asChild>
                  <Link
                    href={action.href}
                    className={clsx(
                      `flex items-center gap-2 font-medium text-lg text-white`,
                      action.variant === "default" &&
                        "dark:bg-white dark:text-black bg-black"
                    )}
                  >
                    {action.icon}
                    {action.text}
                  </Link>
                </Button>
              ))}
            </div>
          </div>

          {/* Right Column: 3D Scene */}
          {isDesktop && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, ease: "backInOut" }}
              className="flex-1 h-[45rem] hidden z-50 xl:flex relative aspect-square"
            >
              <SplineScene
                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                className="w-full h-full p-0 m-0"
              />

              {/* Bottom Fade Gradient */}
              <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-b from-transparent to-background pointer-events-none z-10" />
            </motion.div>
          )}
        </div>
      </section>
    </ScrollArea>
  );
}
