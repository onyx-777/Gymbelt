"use client";

import { Spinner } from "@/components/ui/ios-spinner";

export default function Loading() {
  return (
    <div className="flex w-screen h-screen justify-center items-center gap-4">
      <Spinner size="lg" className="text-white" />
    </div>
  );
}
