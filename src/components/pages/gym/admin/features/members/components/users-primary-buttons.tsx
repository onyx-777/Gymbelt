"use client";
import { IconMailPlus } from "@tabler/icons-react";
import { Button } from "@/components/ui/button";
import { useUsers } from "../context/users-context";
import { UpsertUser } from "./upsert-user";

export function UsersPrimaryButtons() {
  const { setOpen } = useUsers();
  return (
    <div className="flex gap-2">
      <Button
        variant="outline"
        className="space-x-1"
        onClick={() => setOpen("invite")}
      >
        <span>Invite User</span> <IconMailPlus size={18} />
      </Button>
      <UpsertUser />
    </div>
  );
}
