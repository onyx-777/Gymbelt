/* eslint-disable @typescript-eslint/no-explicit-any */
import { ComponentConfig } from "@/components/pages/gym/admin/features/website/core";
import { getGymDetails } from "@/actions/db/gym";
import { Button } from "@/components/ui/button";
import { NavMenu } from "./nav-menu";
import { NavigationSheet } from "./navigation-sheet";
import Image from "next/image";
import { DebouncedColorPicker } from "../../../components/ui/DebounceColorPicker";

export type NavbarSectionProps = {
  backgroundColor: string;
  textColor: string;
  gradientColor?: string;
  gymLogoUrl?: string;
  gymlogoSize?: number;
};

export const NavbarSection: ComponentConfig<NavbarSectionProps> = {
  label: "Navbar Section",
  fields: {
    backgroundColor: {
      type: "custom",
      label: "Background Color",
      render: ({ name, onChange, value }) => (
        <DebouncedColorPicker
          label="Background Color"
          name={name}
          value={value}
          onChange={onChange}
        />
      ),
    },
    textColor: {
      type: "custom",
      label: "Text Color",
      render: ({ name, onChange, value }) => (
        <DebouncedColorPicker
          label="Text Color"
          name={name}
          value={value}
          onChange={onChange}
        />
      ),
    },
    gradientColor: {
      type: "custom",
      label: "Gradient Color (Optional)",
      render: ({ name, onChange, value }) => (
        <DebouncedColorPicker
          label="Gradient Color"
          name={name}
          value={value || "#ffffff"}
          onChange={onChange}
        />
      ),
    },
    gymlogoSize: {
      type: "number",
      label: "Logo Size",
    },
  },
  defaultProps: {
    backgroundColor: "#000000",
    textColor: "#ffffff",
    gradientColor: "",
    gymlogoSize: 1,
  },
  resolveData: async ({ props }) => {
    try {
      const gymData = await getGymDetails();

      const logoUrl = gymData?.Gym?.logo ?? "";

      return {
        props: {
          ...props,
          gymLogoUrl: logoUrl,
        },
      };
    } catch (error) {
      console.error("Error fetching gym details:", error);
      return { props };
    }
  },
  render: ({
    backgroundColor,
    textColor,
    gradientColor,
    gymLogoUrl,
    gymlogoSize,
  }) => {
    return (
      <nav
        className="h-16 absolute top-0 left-0 right-0 z-[100] border-b border-white/10"
        style={{
          background: gradientColor
            ? `linear-gradient(${gradientColor}, ${backgroundColor})`
            : backgroundColor,
          color: textColor,
        }}
      >
        <div className="h-full flex items-center justify-between min-w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            style={{ scale: gymlogoSize }}
            className="flex items-center relative aspect-square w-4 h-4 ml-3 rounded-full gap-8"
          >
            {gymLogoUrl ? (
              <Image
                src={gymLogoUrl}
                alt="Gym Logo"
                fill
                className="bg-transparent rounded-full"
              />
            ) : (
              <span className="text-lg font-bold">Gym</span>
            )}
          </div>
          <NavMenu className="hidden md:block" />
          <div className="flex items-center gap-3">
            <Button variant="secondary" className="hidden sm:inline-flex">
              Sign In
            </Button>
            <Button>Sign Up</Button>
            <div className="md:hidden">
              <NavigationSheet />
            </div>
          </div>
        </div>
      </nav>
    );
  },
};
