"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useOutsideClick } from "@/hooks/use-outside-click";
import Image from "next/image";

interface Props {
  gymLogo: string;
}

type CardType = {
  title: string;
  route: string;
  ctaButton: string;
  secondCtaButton: string;
};

const cards: CardType[] = [
  {
    title: "Dashboard",
    route: "https://www.chc.gymbelt.com/dashboard",
    ctaButton: "Edit",
    secondCtaButton: "Visit",
  },
  {
    title: "Settings",
    route: "https://www.chc.gymbelt.com/settings",
    ctaButton: "Edit",
    secondCtaButton: "Visit",
  },
  {
    title: "Analytics",
    route: "https://www.chc.gymbelt.com/analytics",
    ctaButton: "Edit",
    secondCtaButton: "Visit",
  },
];

export default function ExpandableWebCards({ gymLogo }: Props) {
  const [active, setActive] = useState<CardType | boolean | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref as React.RefObject<HTMLDivElement>, () =>
    setActive(null)
  );

  return (
    <>
      {/* Overlay */}
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>

      {/* Active Card Modal */}
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0 grid place-items-center z-[100]">
            <motion.button
              key={`close-${active.title}-${id}`}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.05 } }}
              className="flex cursor-pointer absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>

            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[500px] h-full sm:h-fit sm:max-h-[90%] flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
            >
              {/* Preview image */}
              <motion.div
                layoutId={`image-${active.title}-${id}`}
                className="w-full h-96 flex items-center justify-center bg-gray-100 dark:bg-neutral-800"
              >
                <Image
                  src={gymLogo}
                  alt="Gym Logo"
                  width={100}
                  height={100}
                  className="object-contain rounded-full"
                />
              </motion.div>

              {/* Details */}
              <div className="p-6 flex flex-col gap-2">
                <motion.h3
                  layoutId={`title-${active.title}-${id}`}
                  className="text-xl font-bold text-neutral-700 dark:text-neutral-200"
                >
                  {active.title}
                </motion.h3>
                <p className="text-sm text-gray-500 break-words">
                  {active.route}
                </p>

                <div className="flex flex-wrap gap-4 mt-4">
                  <motion.button
                    layoutId={`edit-button-${active.title}-${id}`}
                    className="px-4 py-2 cursor-pointer text-sm rounded-full font-bold bg-gray-100 hover:bg-primary hover:text-white text-black"
                  >
                    {active.ctaButton}
                  </motion.button>

                  <motion.a
                    layoutId={`visit-button-${active.title}-${id}`}
                    href={active.route}
                    target="_blank"
                    className="px-4 py-2 cursor-pointer text-sm rounded-full font-bold bg-primary text-white"
                  >
                    {active.secondCtaButton}
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>

      {/* Card List */}
      <ul className="max-w-2xl mx-auto w-full flex flex-col gap-4 mt-6">
        {cards.map((card) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={`card-${card.title}-${id}`}
            onClick={() => setActive(card)}
            className="p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 hover:bg-neutral-50 dark:hover:bg-neutral-900 rounded-xl cursor-pointer"
          >
            <div className="flex items-start sm:items-center gap-4 w-full sm:w-auto">
              <Image
                src={gymLogo}
                alt="Gym Logo"
                className="object-cover rounded-full"
                width={40}
                height={40}
              />
              <div className="flex flex-col max-w-full">
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className="text-base font-semibold text-neutral-800 dark:text-neutral-200"
                >
                  {card.title}
                </motion.h3>
                <p
                  className="text-sm text-gray-500 truncate max-w-[250px] sm:max-w-xs"
                  title={card.route}
                >
                  {card.route}
                </p>
              </div>
            </div>

            <motion.button
              layoutId={`preview-button-${card.title}-${id}`}
              className="px-4 hidden sm:block py-2 cursor-pointer text-sm rounded-full font-bold bg-gray-100 hover:bg-primary hover:text-white text-black self-start sm:self-center"
            >
              Preview
            </motion.button>
          </motion.div>
        ))}
      </ul>
    </>
  );
}

// Close icon component
export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.05 } }}
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
