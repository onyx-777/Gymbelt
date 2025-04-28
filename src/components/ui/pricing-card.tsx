"use client";

import * as React from "react";
import { Check } from "lucide-react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const pricingCardVariants = cva(
  "relative w-full min-w-56 max-w-[300px] transform overflow-hidden rounded-lg shadow-lg transition duration-300",
  {
    variants: {
      variant: {
        default:
          "dark:text-neutral-900 dark:bg-white border border-neutral-300 shadow-xl",
        outline:
          "dark:text-neutral-900 dark:bg-white border border-neutral-300 shadow-xl",
        ghost: "border-transparent bg-transparent",
      },
      size: {
        default: "p-6 lg:p-8",
        sm: "p-4 lg:p-6",
        lg: "p-8 lg:p-10",
      },
      hover: {
        default: "hover:scale-[none] md:hover:scale-105",
        none: "hover:scale-100",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      hover: "default",
    },
  }
);

export interface PricingCardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof pricingCardVariants> {
  heading: string;
  description: string;
  price: number;
  buttonText: string;
  list: string[];
  discount?: number;
  listHeading?: string;
  onButtonClick?: () => void;
}

const PricingCard = React.forwardRef<HTMLDivElement, PricingCardProps>(
  (
    {
      className,
      variant,
      size,
      hover,
      heading,
      description,
      price,
      discount,
      list,
      listHeading,
      buttonText,
      onButtonClick,
      ...props
    },
    ref
  ) => {
    const withDiscount = React.useMemo(() => {
      return Math.round(price - (price * (discount ?? 100)) / 100);
    }, [price, discount]);

    return (
      <div
        ref={ref}
        className={cn(pricingCardVariants({ variant, size, hover, className }))}
        {...props}
      >
        <div className="flex h-full flex-col justify-between">
          <div className="mb-4 lg:mb-6 xl:mb-8">
            <h3 className="mb-2 text-2xl font-semibold dark:text-white text-neutral-950 lg:mb-4 lg:text-3xl xl:text-4xl">
              {heading}
            </h3>
          </div>

          <div>
            <div className="mb-3 flex space-x-2 xl:mb-4">
              <span className="text-3xl font-extrabold dark:text-white text-neutral-950 lg:text-4xl xl:text-5xl">
                ${discount ? withDiscount : price}{" "}
                <span className="text-muted-foreground text-sm">
                  {description}
                </span>
              </span>
              {discount && (
                <span className="text-primary line-through md:text-lg lg:text-xl xl:text-2xl">
                  ${price}
                </span>
              )}
            </div>

            {discount && (
              <div className="origin-center-right absolute right-[-50%] top-0 w-full -translate-x-6 translate-y-4 rotate-45 bg-gradient-to-r from-gray-800 to-gray-900 text-center text-primary lg:text-lg xl:text-xl">
                {discount}%
              </div>
            )}

            <Button
              onClick={onButtonClick}
              className="w-full dark:text-black dark:bg-white bg-black text-white"
            >
              {buttonText}
            </Button>

            <ul className="mt-4 space-y-1 dark:text-white text-neutral-950 lg:mt-6 lg:text-lg xl:mt-8 xl:text-xl">
              {listHeading && <h5>{listHeading}</h5>}
              {list.map((text, index) => (
                <li key={index} className="flex items-center">
                  <Check className="mr-2 p-0.5 font-bold h-5 w-5 text-white rounded-full bg-green-600" />
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
);
PricingCard.displayName = "PricingCard";

export { PricingCard, pricingCardVariants };
