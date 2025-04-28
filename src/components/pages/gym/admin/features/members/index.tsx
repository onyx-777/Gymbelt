"use client";
import { UsersDialogs } from "./components/users-dialogs";
import { UsersPrimaryButtons } from "./components/users-primary-buttons";
import { UsersTable } from "./components/users-table";
import UsersProvider from "./context/users-context";
import { userListSchema } from "./data/schema";
import { users } from "./data/users";
import { Main } from "../../components/layout/main";
import { useEffect, useState } from "react";
import { columns } from "./components/users-columns";
import { motion } from "framer-motion";
import { Separator } from "@/components/ui/separator";

export default function Members() {
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
              <h2 className="text-2xl font-bold tracking-tight">Members</h2>
              <p className="text-muted-foreground">Manage your members here.</p>
            </div>
            <UsersPrimaryButtons />
          </div>
          <Separator className="my-3 lg:my-3" />

          <div className="-mx-4 flex-1 overflow-auto px-4 py-1 lg:flex-row lg:space-y-0 lg:space-x-12">
            <UsersTable data={userList} columns={columns} />
          </div>
        </Main>

        <UsersDialogs />
      </motion.div>
    </UsersProvider>
  );
}
