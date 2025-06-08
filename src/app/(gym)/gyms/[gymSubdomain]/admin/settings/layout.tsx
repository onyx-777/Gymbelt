import { Main } from "@/components/pages/gym/admin/components/layout/main";
import { Separator } from "@/components/pages/gym/admin/components/ui/separator";
import SidebarNav from "@/components/pages/gym/admin/features/settings/components/sidebar-nav";
import {
  IconUser,
  IconTool,
  IconNotification,
  IconCurrencyRupee,
} from "@tabler/icons-react";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Main fixed>
        <div className="space-y-0.5">
          <h1 className="text-2xl font-bold tracking-tight md:text-3xl">
            Settings
          </h1>
        </div>
        <Separator className="my-4 lg:my-6" />
        <div className="flex flex-1 flex-col space-y-2 overflow-hidden md:space-y-2 lg:flex-row lg:space-y-0 lg:space-x-12">
          <aside className="top-0 lg:sticky lg:w-1/5">
            <SidebarNav items={sidebarNavItems} />
          </aside>
          <div className="flex w-full overflow-y-hidden p-1">{children}</div>
        </div>
      </Main>
    </>
  );
};

export default Layout;

const sidebarNavItems = [
  {
    title: "Profile",
    icon: <IconUser size={18} />,
    href: "/gyms/chc/admin/settings/profile",
  },
  {
    title: "Account",
    icon: <IconTool size={18} />,
    href: "/gyms/chc/admin/settings/account",
  },
  //   {
  //     title: "Appearance",
  //     icon: <IconPalette size={18} />,
  //     href: "/gyms/chc/admin/settings/appearance",
  //   },
  {
    title: "Notifications",
    icon: <IconNotification size={18} />,
    href: "/gyms/chc/admin/settings/notifications",
  },
  {
    title: "Payments",
    icon: <IconCurrencyRupee size={18} />,
    href: "/gyms/chc/admin/settings/payments",
  },
];
