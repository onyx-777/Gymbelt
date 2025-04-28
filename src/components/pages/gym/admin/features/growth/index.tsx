"use client";
import React from "react";
import { motion } from "framer-motion";
import { Main } from "@/components/pages/gym/admin/components/layout/main";
import { Separator } from "@/components/ui/separator";

const Growth = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <Main>
        <div className="mb-2 flex flex-wrap items-center justify-between space-y-2">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold tracking-tight">Growth</h2>
            <p className="text-muted-foreground">
              Boost your brand&apos;s visibility and reach with our expert
              marketing and promotion strategies.
            </p>
          </div>
          <Separator className="my-3 lg:my-3" />
        </div>
        <div className="-mx-4 flex-1 overflow-auto px-4 py-1 lg:flex-row lg:space-y-0 lg:space-x-12">
          {/* <UsersTable data={userList} columns={columns} /> */}
        </div>
      </Main>
    </motion.div>
  );
};

export default Growth;
