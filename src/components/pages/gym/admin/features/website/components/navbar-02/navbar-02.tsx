/* eslint-disable @typescript-eslint/no-explicit-any */
import { ComponentConfig } from "@/components/pages/gym/admin/features/website/core";
import { getGymDetails } from "@/actions/db/gym";
import { Button } from "@/components/ui/button";
import { NavMenu } from "../../config/blocks/Navbar/nav-menu";
import { NavigationSheet } from "../../config/blocks/Navbar/navigation-sheet";
import Image from "next/image";
import { DebouncedColorPicker } from "../ui/DebounceColorPicker";

export type NavbarSectionProps = {
  backgroundColor: string;
  textColor: string;
  gradientColor?: string;
  gymLogoUrl?: string;
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
  },
  defaultProps: {
    backgroundColor: "#000000",
    textColor: "#ffffff",
    gradientColor: "",
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
  render: ({ backgroundColor, textColor, gradientColor, gymLogoUrl }) => {
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
        <div className="h-full flex items-center justify-between max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center relative aspect-square w-20 h-20 gap-8">
            {gymLogoUrl ? (
              <Image
                src={gymLogoUrl}
                alt="Gym Logo"
                fill
                className="bg-transparent"
              />
            ) : (
              <span className="text-lg font-bold">Gym</span>
            )}
            <NavMenu className="hidden md:block" />
          </div>
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
