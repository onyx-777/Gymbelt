"use client";

import {
  type HTMLAttributes,
  type PropsWithChildren,
  useEffect,
  useRef,
  useState,
} from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import type * as React from "react";
import { ScrollArea, ScrollBar } from "./scroll-area";

interface Tag {
  name: string;
}

interface MultipleSelectProps {
  tags: readonly Tag[];
  onChange: (value: Tag[]) => void;
  defaultValue?: Tag[];
}

export const MultipleSelect: React.FC<MultipleSelectProps> = ({
  tags = [],
  onChange,
  defaultValue = [],
}) => {
  // Update state when defaultValue changes
  const [selected, setSelected] = useState<Tag[]>(defaultValue);

  // Add effect to sync with external changes
  useEffect(() => {
    setSelected(defaultValue);
  }, [defaultValue]);

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef?.current) {
      containerRef.current.scrollTo({
        left: containerRef.current.scrollWidth,
        behavior: "smooth",
      });
    }
    // Only call onChange when selected actually changes
    if (JSON.stringify(selected) !== JSON.stringify(defaultValue)) {
      onChange(selected);
    }
  }, [selected, onChange, defaultValue]);

  const onSelect = (tag: Tag) => {
    // Ensure uniqueness of selected tags
    setSelected((prev) => {
      if (!prev.some((t) => t.name === tag.name)) {
        return [...prev, tag]; // Only add if not already in the selected list
      }
      return prev; // No changes if tag is already selected
    });
  };

  const onDeselect = (tag: Tag) => {
    setSelected((prev) => prev.filter((t) => t.name !== tag.name));
  };

  return (
    <div className="flex justify-center items-center max-w-md w-full h-fit flex-col gap-2">
      <ScrollArea className="w-[22rem] md:w-md whitespace-nowrap rounded-md">
        <motion.div
          layout
          ref={containerRef}
          className="selected mb-2 flex h-fit min-w-fit items-center scroll-smooth rounded-md"
        >
          <motion.div
            layout
            className="flex mt-6  bg-input/30 w-full rounded-full m-auto items-center p-2 h-full justify-start min-w-fit z-50 flex-nowrap"
          >
            <AnimatePresence mode="popLayout">
              {selected.length > 0 ? (
                selected.map((tag) => (
                  <Tag
                    name={`selected-${tag.name}`}
                    key={`selected-${tag.name}`}
                    className="w-fit border-none  bg-transparent shrink-0"
                  >
                    <div className="flex justify-between w-full items-center gap-5 p-1.5 px-5 bg-primary rounded-full text-white">
                      <motion.span
                        layout
                        className="text-nowrap text-sm rounded-full font-medium"
                      >
                        {tag.name}
                      </motion.span>
                      <p
                        className="bg-white/30 hover:bg-white/50 rounded-full p-1"
                        onClick={(e) => {
                          e.stopPropagation();
                          onDeselect(tag);
                        }}
                        aria-label={`Remove ${tag.name}`}
                      >
                        <X size={14} />
                      </p>
                    </div>
                  </Tag>
                ))
              ) : (
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.7 }}
                  exit={{ opacity: 0 }}
                  className="dark:text-white w-full text-center flex justify-center items-center h-full  text-neutral-900 text-sm px-2 py-3"
                >
                  Select tags below
                </motion.span>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
        <ScrollBar orientation="horizontal" className="hidden" />
      </ScrollArea>
      {tags.length > selected.length && (
        <ScrollArea className="max-h-44 flex w-full flex-wrap gap-2 rounded-md">
          <div className="flex h-fit max-h-44 w-full justify-center items-start flex-wrap gap-2 rounded-md">
            <AnimatePresence>
              {tags
                .filter((tag) => !selected.some((s) => s.name === tag.name))
                .map((tag) => (
                  <Tag
                    name={`available-${tag.name}`}
                    onClick={() => onSelect(tag)}
                    key={`available-${tag.name}`}
                    className="bg-primary/10 h-fit font-medium w-fit border-none rounded-full"
                  >
                    <motion.span
                      layout
                      className="text-nowrap text-sm text-theme px-4 h-fit font-medium rounded-full"
                    >
                      {tag.name}
                    </motion.span>
                  </Tag>
                ))}
            </AnimatePresence>
          </div>
        </ScrollArea>
      )}
    </div>
  );
};

type TagProps = PropsWithChildren &
  Pick<HTMLAttributes<HTMLDivElement>, "onClick"> & {
    name?: string;
    className?: string;
  };

export const Tag = ({ children, name, onClick, className }: TagProps) => {
  return (
    <motion.div
      layout
      layoutId={name}
      onClick={onClick}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.15 }}
      className={`cursor-pointer text-primary bg-background rounded-md border px-1 py-2 text-sm ${
        className || ""
      }`}
    >
      {children}
    </motion.div>
  );
};
