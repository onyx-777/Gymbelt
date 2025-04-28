"use client";
import { Main } from "../../components/layout/main";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Separator } from "@/components/ui/separator";
import { UsersDialogs } from "../members/components/users-dialogs";
import { UsersPrimaryButtons } from "../members/components/users-primary-buttons";
import { UsersTable } from "../members/components/users-table";
import UsersProvider from "../members/context/users-context";
import { userListSchema } from "../members/data/schema";
import { users } from "../members/data/users";
import { columns } from "../members/components/users-columns";

export default function Payments() {
  // Parse user list
  const userList = userListSchema.parse(users);

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return;

  return (
    <UsersProvider>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <Main>
          <div className="mb-2 flex flex-wrap items-center justify-between space-y-2">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold tracking-tight">Payments</h2>
              <p className="text-muted-foreground">
                Manage your payments here.
              </p>
            </div>
            <UsersPrimaryButtons />
            <Separator className="my-3 lg:my-3" />
          </div>
          <div className="-mx-4 flex-1 overflow-auto px-4 py-1 lg:flex-row lg:space-y-0 lg:space-x-12">
            <UsersTable data={userList} columns={columns} />
          </div>
        </Main>

        <UsersDialogs />
      </motion.div>
    </UsersProvider>
  );
}
