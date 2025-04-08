"use client";

import { Spinner } from "@/components/ui/ios-spinner";
import Image from "next/image";

export default function Loading() {
  return (
    <div className="flex flex-col w-screen h-screen justify-center items-center gap-4">
      <Image
        src={"/assets/logo.svg"}
        width={100}
        height={100}
        alt="GymBelt"
        className="object-cover dark:invert-100 animate-pulse"
      />
      <Spinner size="lg" className="text-white" />
    </div>
  );
}
