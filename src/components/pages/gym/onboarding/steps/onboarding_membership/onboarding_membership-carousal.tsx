/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  // CarouselIndicator,
  CarouselItem,
  // CarouselNavigation,
} from "@/components/ui/carousel";
import { AddMembership } from "./add-membership";
import { PricingCard } from "@/components/ui/pricing-card";
import { X } from "lucide-react";
import { toast } from "sonner";
import {
  OnboardingFieldNames,
  OnboardingMembershipType,
} from "@/types/onboarding";
import { UseFormReturn } from "react-hook-form";
import useStore from "@/context/gym-registration/gym-setup-context";
// import { useRouter } from "next/navigation";

interface Props {
  Icon?: React.ElementType;
  componentHeadline: string | React.ReactNode;
  registerName: OnboardingFieldNames;
  form: UseFormReturn<any>;
  onSubmit: (data: any) => void;
}

const OnboardingMembershipCarousal = ({ componentHeadline, Icon }: Props) => {
  const [stateMemberships, setStateMemberships] = React.useState<
    OnboardingMembershipType[]
  >([]);

  const store = useStore();

  React.useEffect(() => {
    if (store.memberships.length > 0) {
      setStateMemberships(store.memberships);
      console.log("memberships pulled from store : ", store.memberships);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  React.useEffect(() => {
    if (stateMemberships.length > 0) {
      store.setMemberships(stateMemberships);
      console.log("memberships stored in store : ", store.memberships);
    }
    console.log(
      "memberships complete data in store : ",
      store.getCompleteData().memberships
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stateMemberships]);

  const handleMemberShipDelete = (planName: string) => {
    // Filter out the memberships with the matching planName
    const updatedMemberships = store.memberships.filter(
      (item) => item.planName !== planName
    );

    // Update the store with the new filtered array
    if (store.memberships.length > 0) {
      store.setMemberships(updatedMemberships);
      setStateMemberships(updatedMemberships);
    }

    console.log("memberships : ", stateMemberships);

    toast.success("Memberships plan removed", {
      description: `${planName} plan has been removed successfully`,
    });
  };

  return (
    // <Form {...form}>
    //   <form onSubmit={form.handleSubmit(onSubmit)}>
    <motion.div
      initial={{ opacity: 0, y: -50 }} // Animation when entering
      animate={{ opacity: 1, y: 0 }} // Animation when mounted
      exit={{ opacity: 0 }} // Animation when unmounting
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="flex flex-col items-center justify-center h-full w-full -mb-10"
    >
      <div className="flex flex-col items-center justify-center h-full w-full max-w-sm">
        <div className="flex flex-col w-full justify-center items-center gap-3">
          <h1 className="flex flex-col gap-5 justify-center items-center w-full">
            {Icon && (
              <span className="text-theme rounded-full p-5 bg-theme/20">
                <Icon className="w-[36px] h-[36px] md:w-[40px] md:h-[40px]" />
              </span>
            )}
            <span className="text-3xl lg:text-4xl w-full font-semibold">
              {componentHeadline}
            </span>
          </h1>

          <div className="flex flex-col justify-center items-center gap-7 w-full">
            <Carousel className="w-full max-w-xl">
              <CarouselContent>
                {stateMemberships.map((memberships, index) => (
                  <CarouselItem key={index} className="basis-full">
                    <div className="flex items-center justify-center p-4 relative">
                      <X
                        className="w-6 h-6 font-bold bg-destructive absolute rounded-full p-1 top-2 right-2 z-50 cursor-pointer hover:bg-destructive/90"
                        onClick={() =>
                          handleMemberShipDelete(memberships.planName)
                        }
                      />

                      <PricingCard
                        heading={memberships.planName}
                        description={
                          memberships.duration === "1-Month"
                            ? "Per month"
                            : memberships.duration === "3-Month"
                            ? "Quarterly"
                            : memberships.duration === "6-Month"
                            ? "Semi-annually"
                            : memberships.duration === "12-Month"
                            ? "Annually"
                            : "Per Month"
                        }
                        price={Number(memberships.price)}
                        buttonText="Get Started"
                        list={[
                          ...memberships.services,
                          ...memberships.facilities,
                        ]}
                        className="w-full max-w-sm h-full max-h-96 overflow-y-scroll"
                      />
                    </div>
                  </CarouselItem>
                ))}
                <CarouselItem className="basis-full">
                  <div className="flex w-full items-center justify-center p-4">
                    <AddMembership
                      stateMemberships={stateMemberships}
                      setStateMemberships={setStateMemberships}
                    />
                  </div>
                </CarouselItem>
              </CarouselContent>
              {/* <CarouselNavigation className="hidden md:flex" alwaysShow /> */}
              {/* <CarouselIndicator /> */}
            </Carousel>
          </div>
        </div>
      </div>
    </motion.div>
    //   </form>
    // </Form>
  );
};

export default OnboardingMembershipCarousal;
