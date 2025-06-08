"use client";

import { useState, useEffect } from "react"; // Import useEffect
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import { SectionBadge } from "@/components/ui/section-badge";
import Link from "next/link";
import { motion } from "framer-motion";
import clsx from "clsx";
import { MacbookScroll } from "@/components/ui/macbook-scroll";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import Image from "next/image";

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

  const user = true;

  return (
    <>
      {/* <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
        fill="white"
      /> */}

      <motion.div
        // initial={{ y: -100 }}
        // animate={{ y: 0 }}
        // transition={{
        //   duration: 1,
        //   delay: 1,
        //   ease: "backOut",
        // }}
        className="h-full w-full max-w-7xl mt-6  px-3 z-[999]"
      >
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center flex-1 lg:flex-none pl-1">
            <Link
              href="/"
              className="text-lg font-semibold text-foreground bg-white rounded-full w-10 h-10 relative"
            >
              <Image src="/assets/logo.svg" alt="gymBelt-logo" fill />
            </Link>
          </div>
          <div className="items-center flex gap-2 lg:gap-4">
            {user ? (
              <InteractiveHoverButton>
                <Link href="/sign-in" className="text-sm">
                  Dashboard
                </Link>
              </InteractiveHoverButton>
            ) : (
              <>
                <Button
                  size="sm"
                  asChild
                  className="hover:translate-y-0 hover:scale-100 dark:bg-white dark:text-black bg-black text-white"
                >
                  <Link href="/sign-in">Login</Link>
                </Button>
                <InteractiveHoverButton className="hidden md:block">
                  <Link href="/sign-in" className="text-sm">
                    Get Started
                  </Link>
                </InteractiveHoverButton>
              </>
            )}
            <ThemeToggle />
            {/* <Button
                size="icon"
                variant="ghost"
                onClick={() => {
                  setIsOpen((prev) => !prev);
                  console.log("x clicked");
                }}
                className="lg:hidden p-2 w-8 h-8"
              > */}
            {/* {isOpen ? (
                  <XIcon className="w-4 h-4 duration-300" />
                ) : (
                  <MenuIcon className="w-3.5 h-3.5 duration-300" />
                )} */}
            {/* </Button> */}
          </div>
        </div>
      </motion.div>

      <section
        className={cn(
          "max-w-screen w-full overflow-x-hidden text-foreground relative mt-2 px-4"
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
            "absolute inset-0 -top-36 w-full z-0 h-[50%]",
            "[background-size:40px_40px]",
            "[background-image:linear-gradient(to_right,#9e9e9e_0px,transparent_1px),linear-gradient(to_bottom,#d8d7d7_0.5px,transparent_1px)]",
            "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_2px),linear-gradient(to_bottom,#262626_1px,transparent_2px)]",
            "[mask-image:radial-gradient(circle,rgba(0,0,0,1)_0%,rgba(0,0,0,0)_50%)]",
            "[mask-repeat:no-repeat]",
            "[mask-position:center]",
            "[mask-size:cover]",
            "[--tw-mask-composite:intersect]" // This line is harmless and keeps it future-proof
          )}
        />

        {/* Content Wrapper */}
        <div className="relative z-10 mx-auto flex max-w-container flex-col gap-12 pt-16 sm:gap-24">
          <div className="flex  flex-col items-center text-center gap-10">
            {/* Badge */}
            {badge && (
              // <Badge
              //   variant="outline"
              //   className="bg-background/30 animate-appear gap-2 z-50"
              // >
              //   <span className="text-muted-foreground">{badge.text}</span>
              //   <Link href={badge.action.href} className="flex items-center gap-1">
              //     {badge.action.text}
              //     <ArrowRightIcon className="h-3 w-3" />
              //   </a>
              // </Badge>
              <SectionBadge title="All-in-One Gym Solution" />
            )}
            {/* Title */}
            <h1 className="relative z-10 max-w-7xl inline-block bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-4xl font-semibold leading-tight text-transparent drop-shadow-2xl sm:text-6xl sm:leading-tight md:leading-tight animate-appear">
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
                  <Link
                    href={action.href}
                    className={clsx(
                      `flex items-center gap-2 font-medium text-lg`,
                      action.variant === "default" &&
                        "dark:bg-white dark:text-black bg-black text-white"
                    )}
                  >
                    {action.icon}
                    {action.text}
                  </Link>
                </Button>
              ))}
            </div>
            <div className="max-w-screen">
              <MacbookScroll src={imageSrc} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
