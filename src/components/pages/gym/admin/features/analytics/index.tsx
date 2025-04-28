"use client";
import { Main } from "../../components/layout/main";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Separator } from "@/components/ui/separator";

interface Props {
  gymName: string;
}

export default function Analytics({ gymName }: Props) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <Main>
        <div className="mb-2 flex flex-wrap items-center justify-between space-y-2">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold tracking-tight">Analytics</h2>
            <p className="text-muted-foreground">
              In-depth analytics to help you understand and improve your
              {gymName ? gymName : <>gym&apos;s</>} performance.
            </p>
          </div>
          <Separator className="my-4 lg:my-6" />
        </div>
        <div className="-mx-4 flex-1 overflow-auto px-4 py-1 lg:flex-row lg:space-y-0 lg:space-x-12">
          {/* <UsersTable data={userList} columns={columns} /> */}
        </div>
      </Main>
    </motion.div>
  );
}
