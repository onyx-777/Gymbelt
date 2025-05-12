"use client";

import React, { RefObject, useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useOutsideClick } from "@/hooks/use-outside-click";
import Image from "next/image";
import { AllGyms } from "@/types/gym";
import Link from "next/link";
import { Button } from "./button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./tabs";
import { ScrollArea } from "./scroll-area";

interface Props {
  gyms: AllGyms;
}

export default function GymCard({ gyms }: Props) {
  const [active, setActive] = useState<AllGyms[0] | null>(null); // Changed type here to refer to a single gym object or null
  const id = useId();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(null); // Close on Escape key press
      }
    }

    if (active) {
      document.body.style.overflow = "hidden"; // Prevent body scroll when a gym card is active
    } else {
      document.body.style.overflow = "auto"; // Re-enable scroll when no gym card is active
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref as RefObject<HTMLDivElement>, () => setActive(null));

  if (!gyms.length) return <div>No Gyms</div>;

  return (
    <div className="w-fit">
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-fit z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active ? (
          <div className="fixed inset-0 grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.name}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                  ease: "anticipate",
                },
              }}
              className="flex absolute top-2 right-2 lg:hidden z-50 items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.name}-${id}`}
              ref={ref}
              className="w-full max-w-[500px]  h-full md:h-[80vh] md:max-h-[90%] flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
            >
              <motion.div
                layoutId={`image-${active.name}-${id}`}
                className="relative aspect-square h-[21rem]"
              >
                <Image
                  width={1000}
                  height={1000}
                  src={active.logo}
                  alt={active.name}
                  loading="eager"
                  className="w-full h-full lg:h-full sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-center"
                />
              </motion.div>

              <div className="flex flex-col justify-between h-full items-start p-4">
                <div className="flex-col h-full flex justify-start items-start gap-3">
                  <motion.h3
                    layoutId={`title-${active.name}-${id}`}
                    className="font-medium text-neutral-700 dark:text-neutral-200 text-2xl"
                  >
                    {active.name}
                  </motion.h3>
                  <motion.p
                    layoutId={`description-${active.address}-${id}`}
                    className="text-neutral-600 dark:text-neutral-400 text-sm capitalize"
                  >
                    {active.address}
                  </motion.p>
                  <motion.div
                    layoutId={`description-${active.services.map(
                      (service) => service
                    )}-${id}`}
                    className="text-neutral-600 dark:text-neutral-400 text-sm capitalize flex flex-wrap justify-center items-center gap-3"
                  >
                    <Tabs
                      defaultValue="facilities"
                      className="w-full space-x-3"
                    >
                      <TabsList className="grid w-fit grid-cols-2  text-white">
                        <TabsTrigger
                          value="facilities"
                          className="w-full cursor-pointer px-5"
                        >
                          Facilities
                        </TabsTrigger>
                        <TabsTrigger
                          value="services"
                          className="w-full cursor-pointer px-5"
                        >
                          Services
                        </TabsTrigger>
                      </TabsList>
                      <ScrollArea className="h-28">
                        <TabsContent
                          className="flex justify-center items-center gap-3 w-full flex-wrap mt-5 px-3"
                          value="facilities"
                        >
                          {active.facilities.map((facility) => (
                            <p
                              key={facility}
                              className="bg-primary/10 text-primary px-3 py-1 rounded-full w-fit"
                            >
                              {facility}
                            </p>
                          ))}
                        </TabsContent>
                        <TabsContent
                          className="flex justify-center items-center gap-3 w-full flex-wrap mt-5 px-3"
                          value="services"
                        >
                          {active.services.map((service) => (
                            <p
                              key={service}
                              className="bg-primary/10 text-primary px-3 py-1 rounded-full w-fit"
                            >
                              {service}
                            </p>
                          ))}
                        </TabsContent>
                      </ScrollArea>
                    </Tabs>
                  </motion.div>
                </div>
                <Link href={active.id} className="w-full">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <Button className="w-full">Visit</Button>
                  </motion.div>
                </Link>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className="w-full">
        {gyms.map((gym) => (
          <motion.div
            layoutId={`card-${gym.name}-${id}`}
            key={gym.id}
            onClick={() => setActive(gym)}
            className="p-4 w-80 flex flex-col bg-neutral-200 dark:bg-neutral-900 rounded-xl cursor-pointer"
          >
            <div className="flex gap-4 flex-col  w-full">
              <motion.div layoutId={`image-${gym.name}-${id}`}>
                <Image
                  width={100}
                  height={100}
                  src={gym.logo}
                  alt={gym.name}
                  className="h-60 w-full  rounded-lg object-cover object-top"
                />
              </motion.div>
              <div className="flex justify-center items-center flex-col">
                <motion.h3
                  layoutId={`name-${gym.name}-${id}`}
                  className="font-medium text-neutral-800 dark:text-neutral-200 text-center md:text-left text-base"
                >
                  {gym.name}
                </motion.h3>
                <motion.p
                  layoutId={`description-${gym.address}-${id}`}
                  className="text-neutral-600 dark:text-neutral-400 text-center md:text-left text-sm capitalize mt-2"
                >
                  {gym.address}
                </motion.p>
              </div>
            </div>
          </motion.div>
        ))}
      </ul>
    </div>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};
