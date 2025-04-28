import React from "react";
import { SearchProvider } from "@/context/admin/search-context";
import { cookies } from "next/headers";
import { AppSidebar } from "@/components/pages/gym/admin/components/layout/app-sidebar";
import { cn } from "@/lib/utils";
import { SidebarProvider } from "@/components/pages/gym/admin/components/ui/sidebar";
import { Header } from "@/components/pages/gym/admin/components/layout/header";
import { Search } from "@/components/pages/gym/admin/components/search";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { ProfileDropdown } from "@/components/pages/gym/admin/components/profile-dropdown";

const Layout = async ({ children }: { children: React.ReactNode }) => {
  const defaultOpen = (await cookies()).get("sidebar_state")?.value !== "false";

  return (
    <SidebarProvider defaultOpen={defaultOpen}>
      <SearchProvider>
        <AppSidebar />
        <div
          id="content"
          className={cn(
            "ml-auto w-full max-w-full",
            "peer-data-[state=collapsed]:w-[calc(100%-var(--sidebar-width-icon)-1rem)]",
            "peer-data-[state=expanded]:w-[calc(100%-var(--sidebar-width))]",
            "sm:transition-[width] sm:duration-200 sm:ease-linear",
            "flex h-svh flex-col",
            "group-data-[scroll-locked=1]/body:h-full",
            "has-[main.fixed-main]:group-data-[scroll-locked=1]/body:h-svh"
          )}
        >
          <Header>
            <Search />
            <div className="ml-auto flex items-center space-x-4">
              <ThemeToggle />
              <ProfileDropdown />
            </div>
          </Header>
          {children}
        </div>{" "}
      </SearchProvider>
    </SidebarProvider>
  );
};

export default Layout;
