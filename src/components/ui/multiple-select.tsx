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
      <motion.div
        layout
        ref={containerRef}
        className="selected no-scrollbar flex h-12 w-full items-center overflow-x-auto scroll-smooth rounded-md border p-2"
      >
        <motion.div
          layout
          className="flex items-center justify-start w-full gap-2 z-50"
        >
          <AnimatePresence mode="popLayout">
            {selected.length > 0 ? (
              selected.map((tag) => (
                <Tag
                  name={`selected-${tag.name}`}
                  key={`selected-${tag.name}`}
                  className="bg-theme rounded-full"
                >
                  <div className="flex items-center gap-2 bg-theme text-white">
                    <motion.span layout className="text-nowrap">
                      {tag.name}
                    </motion.span>
                    <p
                      className="hover:bg-white/20 rounded-full p-1"
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
                className="text-primary text-sm px-2"
              >
                Select tags below
              </motion.span>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>

      {tags.length > selected.length && (
        <div className="flex w-full flex-wrap gap-2 rounded-md border border-solid p-2 overflow-y-auto max-h-[200px]">
          <AnimatePresence>
            {tags
              .filter((tag) => !selected.some((s) => s.name === tag.name))
              .map((tag) => (
                <Tag
                  name={`available-${tag.name}`}
                  onClick={() => onSelect(tag)}
                  key={`available-${tag.name}`}
                >
                  <motion.span layout className="text-nowrap">
                    {tag.name}
                  </motion.span>
                </Tag>
              ))}
          </AnimatePresence>
        </div>
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
      className={`cursor-pointer text-primary bg-background rounded-md border px-4 py-2 text-sm ${
        className || ""
      }`}
    >
      {children}
    </motion.div>
  );
};
