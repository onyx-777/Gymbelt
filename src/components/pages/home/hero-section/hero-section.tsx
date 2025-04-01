"use client";

import { useState, useEffect } from "react"; // Import useEffect
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRightIcon } from "lucide-react";
import { Mockup, MockupFrame } from "@/components/ui/mockup";
import Image from "next/image";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { SectionBadge } from "@/components/ui/section-badge";

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

export function HeroSection({
  badge,
  title,
  description,
  actions,
  image,
}: HeroProps) {
  const { resolvedTheme } = useTheme(); // Use resolvedTheme to determine the current theme
  const [mounted, setMounted] = useState(false);

  // UseEffect to ensure client-side rendering
  useEffect(() => {
    setMounted(true);
  }, []);

  // Don't render anything until mounted to avoid hydration issues
  if (!mounted) {
    return null; // Prevent rendering until the component is mounted on the client side
  }

  const imageSrc = resolvedTheme === "light" ? image.light : image.dark;

  return (
    <section
      className={cn(
        "bg-background text-foreground relative py-12 sm:py-24 md:py-32 px-4"
      )}
    >
      {/* Grid Background */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 2,
          ease: "easeInOut",
        }}
        className={cn(
          "absolute inset-0 z-0 h-[70%]",
          "[background-size:60px_60px]",
          "[background-image:linear-gradient(to_right,#9e9e9e_0px,transparent_1px),linear-gradient(to_bottom,#d8d7d7_0.5px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
        )}
      />

      {/* Content Wrapper */}
      <div className="relative z-10 mx-auto flex max-w-container flex-col gap-12 pt-16 sm:gap-24">
        <div className="flex flex-col items-center gap-6 text-center sm:gap-12">
          {/* Badge */}
          {badge && (
            // <Badge
            //   variant="outline"
            //   className="bg-background/30 animate-appear gap-2 z-50"
            // >
            //   <span className="text-muted-foreground">{badge.text}</span>
            //   <a href={badge.action.href} className="flex items-center gap-1">
            //     {badge.action.text}
            //     <ArrowRightIcon className="h-3 w-3" />
            //   </a>
            // </Badge>
            <SectionBadge title="All-in-One Gym Solution" />
          )}

          {/* Title */}
          <h1 className="relative z-10 max-w-7xl inline-block bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-4xl font-semibold leading-tight text-transparent drop-shadow-2xl sm:text-6xl sm:leading-tight md:text-8xl md:leading-tight animate-appear">
            {title}
          </h1>

          {/* Description */}
          <p className="text-md relative z-10 max-w-[550px] font-medium text-muted-foreground sm:text-xl animate-appear opacity-100 sm:opacity-100">
            {description}
          </p>

          {/* Actions */}
          <div className="relative z-10 flex justify-center gap-4 mt-6">
            {actions.map((action, index) => (
              <Button key={index} size="lg" asChild>
                <a href={action.href} className="flex items-center gap-2 font-medium text-lg">
                  {action.icon}
                  {action.text}
                </a>
              </Button>
            ))}
          </div>

          {/* Image with Glowing Circle Effect */}
          <div className="relative pt-12">
            {/* Glowing circle effect behind the image */}
            <div className="absolute inset-0 flex justify-center items-center">
              {/* Glowing circle */}
              <div className="absolute md:-top-20 min-w-full min-h-full md:min-w-screen md:min-h-screen rounded-full bg-[#7C3AED] opacity-70 blur-3xl animate-pulse"></div>
            </div>

            <MockupFrame
              className="animate-appear opacity-100 delay-700"
              size="small"
            >
              <Mockup type="responsive">
                <Image
                  src={imageSrc}
                  alt={image.alt}
                  width={1248}
                  height={765}
                  priority
                />
              </Mockup>
            </MockupFrame>
          </div>
        </div>
      </div>
    </section>
  );
}
