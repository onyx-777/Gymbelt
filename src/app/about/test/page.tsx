"use client";
import * as React from "react";
import {
  FlipCard,
  FlipCardFront,
  FlipCardBack,
} from "@/components/ui/flip-card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
export default function FlipCardDemo() {
  return (
    <div className="container py-12">
      <div className="flex flex-wrap justify-center gap-4">
        <FlipCard className="h-96 w-2/6">
          <FlipCardFront className="rounded-xl">
            <Image
              width={1015}
              height={678}
              src="https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="nike air jordan"
              className="size-full object-cover"
            />
          </FlipCardFront>
          <FlipCardBack className="flex flex-col items-center justify-center rounded-xl bg-rose-600 px-4 py-6 text-center text-white">
            <h2 className="text-xl font-bold">Nike Air Jordan</h2>
            <h4 className="mb-4">€ 1,299.00</h4>
            <Button className="rounded-full">Add to cart</Button>
          </FlipCardBack>
        </FlipCard>

        <FlipCard flipDirection="vertical" className="h-96 w-2/6">
          <FlipCardFront className="rounded-xl">
            <Image
              width={542}
              height={678}
              src="https://images.unsplash.com/photo-1617814121568-9b184eaabf08?q=80&w=2264&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="nike air jordan"
              className="size-full object-cover"
            />
          </FlipCardFront>
          <FlipCardBack className="flex flex-col items-center justify-center rounded-xl bg-emerald-500 px-4 py-6 text-center text-white">
            <h2 className="text-xl font-bold">Nike Air Jordan</h2>
            <h4 className="mb-4">€ 1,299.00</h4>
            <Button className="rounded-full">Add to cart</Button>
          </FlipCardBack>
        </FlipCard>
      </div>
    </div>
  );
}
