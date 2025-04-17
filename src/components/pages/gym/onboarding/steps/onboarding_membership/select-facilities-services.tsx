"use client";

import {
  MultipleSelector,
  type Option,
} from "@/components/ui/multiple-selector";
import { OnboardingMembershipType } from "@/types/onboarding";
import { useState } from "react";
import { ControllerRenderProps } from "react-hook-form";

interface Props {
  componentFor: "services" | "facilities";
  list: string[];
  field: ControllerRenderProps<
    OnboardingMembershipType,
    "services" | "facilities"
  >;
}

function SelectFacilitiesServices({ list, componentFor, field }: Props) {
  const [selected, setSelected] = useState<Option[]>([]);

  console.log("list : ", list);

  return (
    <div className="w-full">
      <MultipleSelector
        value={selected}
        placeholder={`Select ${componentFor}`}
        defaultOptions={list.map((item) => ({
          label: item,
          value: item,
          category: componentFor, // Adding category for groupBy to work
        }))}
        groupBy="category"
        onChange={(value) => {
          setSelected(value);
          field.onChange(value.map((v) => v.value)); // Update form field value
        }}
        // emptyIndicator={
        //   <div className="flex flex-col justify-center items-center w-full gap-3">
        //     No {componentFor} found
        //     <Button onClick={handleAddClick}>
        //       Click to Add more {componentFor}
        //     </Button>
        //   </div>
        // }
      />
    </div>
  );
}

export { SelectFacilitiesServices };
