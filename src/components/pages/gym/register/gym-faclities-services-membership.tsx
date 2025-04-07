import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { services } from "@/constants/gym/features-facilities";
import { useId } from "react";

function GymFacilitiesSevicesMembership() {
  const id = useId();

  return (
    <fieldset className="space-y-4 max-w-[400px]">
      <legend className="text-sm font-medium leading-none text-foreground">
        CPU Cores
      </legend>
      <RadioGroup className="grid grid-cols-3 gap-2" defaultValue="1">
        {services.map((item) => (
          <label
            key={`${id}-${item.id}`}
            className="relative flex cursor-pointer flex-col items-center gap-3 rounded-lg border border-input px-2 py-3 text-center shadow-sm shadow-black/5 outline-offset-2 transition-colors has-[[data-disabled]]:cursor-not-allowed has-[[data-state=checked]]:border-ring has-[[data-state=checked]]:bg-accent has-[[data-disabled]]:opacity-50 has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-ring/70"
          >
            <RadioGroupItem
              id={`${id}-${item.id}`}
              value={item.name}
              className="sr-only after:absolute after:inset-0"
            />
            <p className="text-sm font-medium leading-none text-foreground">
              {item.name}
            </p>
          </label>
        ))}
      </RadioGroup>
    </fieldset>
  );
}

export { GymFacilitiesSevicesMembership };
