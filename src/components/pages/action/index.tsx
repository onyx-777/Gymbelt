"use client";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Bot, Globe } from "lucide-react";
import Link from "next/link";
import { useModal } from "../gym/admin/features/scheduler/providers/modal-context";
import CustomModal from "../gym/admin/features/scheduler/components/ui/custom-modal";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { TextShimmer } from "@/components/ui/text-shimmer";
import { Confetti } from "@/components/magicui/confetti";

interface ActionOptions {
  heading: string;
  subheading: string;
  link: string;
  icon: React.ReactNode;
}

interface Props {
  userName: string | null;
}

const UserAction = ({ userName }: Props) => {
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

  const { setOpen, setClose } = useModal();

  useEffect(() => {
    setOpen(
      <>
        <Confetti className="absolute inset-0 size-full z-[999] pointer-events-none" />

        <CustomModal customizedModal contentClass="w-80 md:w-fit">
          <div className="flex flex-col gap-1 items-center md:px-0 px-5">
            <div className=" w-full h-fit flex flex-col gap-8 justify-center items-center">
              <h1 className="text-5xl w-full font-semibold text-center">
                Welcome <br />
                <TextShimmer className="font-semibold [--base-color:theme(colors.orange.600)] [--base-gradient-color:theme(colors.orange.200)] dark:[--base-color:theme(colors.orange.700)] dark:[--base-gradient-color:theme(colors.orange.400)]">
                  {userName as string}
                </TextShimmer>
              </h1>
              <h3 className="text-lg text-muted-foreground">
                Glad to have you here — choose how you&apos;d like to get
                started.
              </h3>
              <Button
                className="w-full p-2 text-white bg-neutral-900 dark:bg-white dark:text-black "
                size={"lg"}
                onClick={() => setClose()}
              >
                Let&apos;s go
              </Button>
            </div>
          </div>
        </CustomModal>
      </>
    );
  }, []);
  return (
    <div className="w-screen h-screen flex justify-center items-center">
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
                  className="cursor-pointer max-w-md w-full dark:bg-neutral-950 bg-neutral-100 p-10 rounded-2xl"
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
