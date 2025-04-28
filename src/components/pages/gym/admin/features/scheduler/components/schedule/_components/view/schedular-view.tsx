"use client";

import { Separator } from "@/components/ui/separator";
import SchedulerViewFilteration from "./schedular-view-filteration";
import { motion } from "framer-motion";

export default function SchedulerView() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="flex flex-col gap-6"
    >
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Schedule</h2>
        <p className="text-muted-foreground">Manage your schedule here.</p>
      </div>
      <Separator className="-my-2 lg:-my-2" />

      <SchedulerViewFilteration />
    </motion.div>
  );
}
