"use client";

import { useState, useEffect } from "react";
import { useClerk } from "@clerk/nextjs";
import { ArrowRightIcon, MenuIcon, XIcon } from "lucide-react";
import Link from "next/link";
import Wrapper from "../global/wrapper";
import { Button } from "../ui/button";
import Menu from "./menu";
import MobileMenu from "./mobile-menu";
import { ToggleTheme } from "../global/theme-toggle";
import { ThemeToggle } from "../ui/theme-toggle";
import { motion } from "motion/react";
import Image from "next/image";

const Navbar = () => {
  const { user } = useClerk();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [mounted, setMounted] = useState(false); // Track mounting state

  // Run after the component has mounted
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Only render motion.div when mounted
  if (!mounted) return null; // Prevent hydration issues

  return (
    <div className="relative w-full h-full">
      {" "}
      <div className="z-[99] fixed pointer-events-none inset-x-0 h-[88px] backdrop-blur-sm [mask:linear-gradient(to_bottom,#000_20%,transparent_calc(100%-20%))]"></div>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{
          duration: 1,
          delay : 1.5,
          ease: "backOut",
        }}
        className="fixed top-4 inset-x-0 mx-auto max-w-6xl px-2 md:px-12 z-[100] transform th"
        style={{ height: isOpen ? "calc(100% - 24px)" : "88px" }}
      >
        <Wrapper className="backdrop-blur-lg rounded-xl lg:rounded-2xl border border-[rgba(124,124,124,0.2)] h-16 md:px-2 flex items-center justify-start">
          <div className="flex items-center justify-between w-full sticky inset-x-0">
            <div className="flex items-center flex-1 lg:flex-none pl-1">
              <Link
                href="/"
                className="text-lg font-semibold text-foreground bg-white rounded-full w-10 h-10 relative"
              >
                <Image src="/assets/logo.svg" alt="gymBelt-logo" fill />
              </Link>
              <div className="items-center hidden ml-4 lg:flex">
                <Menu />
              </div>
            </div>
            <div className="items-center flex gap-2 lg:gap-4">
              {user ? (
                <Button size="sm" asChild className="hidden sm:flex">
                  <Link href="/app">Dashboard</Link>
                </Button>
              ) : (
                <>
                  <Button
                    size="sm"
                    asChild
                    className="hover:translate-y-0 hover:scale-100"
                  >
                    <Link href="/auth/signin">Login</Link>
                  </Button>
                  <Button size="sm" asChild className="hidden sm:flex">
                    <Link href="/auth/signup">
                      Get Started
                      <ArrowRightIcon className="w-4 h-4 ml-2 hidden lg:block" />
                    </Link>
                  </Button>
                </>
              )}
              <motion.div
                className="lg:hidden"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <ToggleTheme />
              </motion.div>
              <motion.div
                className="hidden lg:block"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <ThemeToggle />
              </motion.div>
              <Button
                size="icon"
                variant="ghost"
                onClick={() => setIsOpen((prev) => !prev)}
                className="lg:hidden p-2 w-8 h-8"
              >
                {isOpen ? (
                  <XIcon className="w-4 h-4 duration-300" />
                ) : (
                  <MenuIcon className="w-3.5 h-3.5 duration-300" />
                )}
              </Button>
            </div>
          </div>
          <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />
        </Wrapper>
      </motion.header>
    </div>
  );
};

export default Navbar;
