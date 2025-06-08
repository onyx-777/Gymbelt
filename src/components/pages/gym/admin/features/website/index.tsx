"use client";
import { Main } from "../../components/layout/main";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import { GymDetails } from "@/types/gym";
import ExpandableWebCards from "@/components/ui/expandable-webpage-card";

interface Props {
  gymDetails: GymDetails;
}

export default function Website({ gymDetails }: Props) {
  const gymName = gymDetails?.Gym?.name;
  const gymLogo = gymDetails?.Gym?.logo as string;

  console.log("gymlogo : ", gymLogo);

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
            <h2 className="text-2xl font-bold tracking-tight">Website</h2>
            <p className="text-muted-foreground">
              Seamlessly Customize Your{" "}
              <span className="font-bold mx-1">
                {gymName ? gymName : <>Gyms&apos;s</>}
              </span>
              Website with Ease
            </p>
          </div>
          <div className="w-fit">
            <Button className="w-fit mr-5 flex justify-center h-full items-center gap-2 text-center">
              <PlusCircle size={17} /> <span>Add</span>
            </Button>
          </div>
        </div>
        <Separator className="my-4 lg:my-6" />

        <div className="-mx-4 flex-1 overflow-auto px-4 py-1 lg:flex-row lg:space-y-0 lg:space-x-12">
          {/* <UsersTable data={userList} columns={columns} /> */}
          <ExpandableWebCards gymLogo={gymLogo} />
        </div>
      </Main>
    </motion.div>
  );
}
