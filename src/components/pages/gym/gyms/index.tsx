"use client";

import React from "react";
import { Input } from "@/components/ui/input";
import GymCard from "@/components/ui/expandable-gym-card";
import { AllGyms } from "@/types/gym";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { UserButton } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { useTheme } from "next-themes";

// Define individual Gym type
export function GymTable({ gyms }: { gyms: AllGyms }) {
  const [filter, setFilter] = React.useState("");
  const { theme } = useTheme();

  // Filter gyms by name
  const filteredGyms = React.useMemo(() => {
    return gyms.filter((gym) =>
      gym.name?.toLowerCase().includes(filter.toLowerCase())
    );
  }, [filter, gyms]);

  return (
    <div className="w-full h-full px-4 py-6 space-y-5">
      {/* Search Input */}
      <div className="flex justify-between items-center w-full gap-5">
        <h1 className="text-3xl md:text-4xl font-medium flex-1 w-full">
          Explore Gyms
        </h1>
        <div className="w-fit flex justify-center items-center gap-3">
          {" "}
          <ThemeToggle />
          <UserButton
            appearance={theme === "dark" ? { baseTheme: dark } : {}}
          />
        </div>
      </div>
      <p className="text-sm text-muted-foreground">
        Explore gyms around you. Click a card to learn what each gym has and why
        it might be right for you.
      </p>
      <div className="flex items-center mb-6 space-x-5">
        <Input
          placeholder="Search gym by name..."
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="w-full rounded-full"
        />
      </div>

      {/* Gym Cards Grid */}
      {filteredGyms.length ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {filteredGyms.map((gym, index) => (
            <GymCard key={index} gyms={[gym]} />
          ))}
        </div>
      ) : (
        <p className="text-center text-muted-foreground h-24">No gyms found.</p>
      )}
    </div>
  );
}
