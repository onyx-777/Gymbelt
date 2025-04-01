import { HeroSection } from "@/components/pages/home/hero-section/hero-section";
import { Icons } from "@/components/ui/icons";

export default function Hero() {
  return (
    <>
      <HeroSection
        badge={{
          text: "Introducing our new components",
          action: {
            text: "Learn more",
            href: "/docs",
          },
        }}
        title="Run Your Gym on Autopilot, Stress-Free."
        description="Think of someone running your gym for you—doing all the work, from managing memberships and payments to tracking progress—while all the money goes to you."
        actions={[
          {
            text: "Automate gym",
            href: "/docs/getting-started",
            variant: "default",
          },
          {
            text: "Explore Gyms",
            href: "/gyms",
            variant: "glow",
          },
        ]}
        image={{
          light: "https://www.launchuicomponents.com/app-light.png",
          dark: "https://www.launchuicomponents.com/app-dark.png",
          alt: "UI Components Preview",
        }}
      />
    </>
  );
}
