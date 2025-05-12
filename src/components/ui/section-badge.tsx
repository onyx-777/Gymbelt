import React from "react";
import { motion } from "motion/react";

interface Props {
  title: string;
}

export const SectionBadge = ({ title }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "backInOut" }}
      className="relative inline-flex h-8 overflow-hidden rounded-full p-[1.5px] focus:outline-none select-none"
    >
      {/* <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#1d4ed8_0%,#a5b4fc_50%,#1d4ed8_20%)]" /> */}
      <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-blue-600/15  px-4 py-1 text-sm font-medium text-blue-600 backdrop-blur-3xl">
        {title}
      </span>
    </motion.div>
    // <div className="px-4 py-1 rounded-full bg-primary/20 cursor-pointer select-none">
    //     <div className="bg-[linear-gradient(110deg,#6d28d9,45%,#c4b5fd,55%,#6d28d9)] bg-[length:250%_100%] bg-clip-text animate-background-shine text-transparent font-medium text-sm">
    //         {title}
    //     </div>
    // </div>
  );
};
