import {
  IconBarrierBlock,
  IconBug,
  IconChartDots,
  IconChecklist,
  IconError404,
  IconHelp,
  IconLayoutDashboard,
  IconLock,
  IconLockAccess,
  IconNotification,
  IconServerOff,
  IconSettings,
  IconTool,
  IconUserCog,
  IconUserOff,
  IconUsers,
  IconCurrencyRupee,
} from "@tabler/icons-react";
import {
  AudioWaveform,
  Command,
  GalleryVerticalEnd,
  Globe,
  ReceiptIndianRupee,
  TrendingUp,
} from "lucide-react";
import { type SidebarData } from "../types";

export const sidebarData: SidebarData = {
  user: {
    name: "satnaing",
    email: "satnaingdev@gmail.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Shadcn Admin",
      logo: Command,
      plan: "Vite + ShadcnUI",
    },
    {
      name: "Acme Inc",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
  ],
  navGroups: [
    {
      title: "General",
      items: [
        {
          title: "Dashboard",
          url: "/gyms/chc/admin/dashboard",
          icon: IconLayoutDashboard,
        },
        {
          title: "Members",
          url: "/gyms/chc/admin/members",
          icon: IconUsers,
        },
        {
          title: "Schedule",
          url: "/gyms/chc/admin/schedule",
          icon: IconChecklist,
        },
        {
          title: "Subscriptions",
          url: "/gyms/chc/admin/subscriptions",
          icon: ReceiptIndianRupee,
        },
        {
          title: "Growth",
          url: "/gyms/chc/admin/growth",
          icon: TrendingUp,
        },
        {
          title: "Website",
          url: "/gyms/chc/admin/website",
          icon: Globe,
        },
        {
          title: "Analytics",
          url: "/gyms/chc/admin/analytics",
          icon: IconChartDots,
        },
      ],
    },
    {
      title: "Pages",
      items: [
        {
          title: "Auth",
          icon: IconLockAccess,
          items: [
            {
              title: "Sign In",
              url: "/sign-in",
            },
            {
              title: "Sign In (2 Col)",
              url: "/sign-in-2",
            },
            {
              title: "Sign Up",
              url: "/sign-up",
            },
            {
              title: "Forgot Password",
              url: "/forgot-password",
            },
            {
              title: "OTP",
              url: "/otp",
            },
          ],
        },
        {
          title: "Errors",
          icon: IconBug,
          items: [
            {
              title: "Unauthorized",
              url: "/401",
              icon: IconLock,
            },
            {
              title: "Forbidden",
              url: "/403",
              icon: IconUserOff,
            },
            {
              title: "Not Found",
              url: "/404",
              icon: IconError404,
            },
            {
              title: "Internal Server Error",
              url: "/500",
              icon: IconServerOff,
            },
            {
              title: "Maintenance Error",
              url: "/503",
              icon: IconBarrierBlock,
            },
          ],
        },
      ],
    },
    {
      title: "Other",
      items: [
        {
          title: "Settings",
          icon: IconSettings,
          items: [
            {
              title: "Profile",
              url: "/gyms/chc/admin/settings/profile",
              icon: IconUserCog,
            },
            {
              title: "Account",
              url: "/gyms/chc/admin/settings/account",
              icon: IconTool,
            },
            // {
            //   title: "Appearance",
            //   url: "/gyms/chc/admin/settings/appearance",
            //   icon: IconPalette,
            // },
            {
              title: "Notifications",
              url: "/gyms/chc/admin/settings/notifications",
              icon: IconNotification,
            },
            {
              title: "Payments",
              url: "/gyms/chc/admin/settings/payments",
              icon: IconCurrencyRupee,
            },
          ],
        },
        {
          title: "Help Center",
          url: "/help-center",
          icon: IconHelp,
        },
      ],
    },
  ],
};
