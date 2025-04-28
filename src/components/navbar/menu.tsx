"use client";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  CalendarRangeIcon,
  CircleHelp,
  HashIcon,
  Newspaper,
  UsersIcon,
} from "lucide-react";
import Link from "next/link";
import React from "react";

interface Props {
  title: string;
  href: string;
  children: React.ReactNode;
  icon: React.ReactNode;
}

const Menu = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-black dark:text-white hover:text-foreground">
            Features
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid rounded-3xl gap-3 p-4 md:w-[400px] lg:w-[500px] xl:w-[550px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <Link
                    href="/"
                    className="flex flex-col justify-end w-full h-full p-4 no-underline rounded-lg outline-none select-none bg-gradient-to-tr from-accent to-accent/50 focus:shadow-md"
                  >
                    <div className="my-2 text-lg font-normal">Luro AI</div>
                    <p className="text-sm text-black dark:text-white">
                      Your ultimate social media management tool
                    </p>
                  </Link>
                </NavigationMenuLink>
              </li>

              <Item
                title="Content Calendar"
                href="/features/content-calendar"
                icon={<CalendarRangeIcon className="w-5 h-5" />}
              >
                Plan and visualize your content strategy.
              </Item>
              <Item
                title="Hashtag Manager"
                href="/features/hashtag-manager"
                icon={<HashIcon className="w-5 h-5" />}
              >
                Research and track trending hashtags.
              </Item>
              <Item
                title="Competitor Analysis"
                href="/features/competitor-analysis"
                icon={<UsersIcon className="w-5 h-5" />}
              >
                Monitor and analyze competitor performance.
              </Item>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink className="h-full px-4 py-2 text-sm font-normal rounded-md text-black dark:text-white hover:text-foreground w-max hover:bg-none">
            How it works
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink className="h-full px-4 py-2 text-sm font-normal rounded-md text-black dark:text-white hover:text-foreground w-max hover:bg-none">
            Pricing
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink className="h-full px-4 py-2 text-sm font-normal rounded-md text-black dark:text-white hover:text-foreground w-max hover:bg-none">
            Book a demo
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-black dark:text-white hover:text-foreground">
            Support
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[400px] md:grid-cols-2 lg:w-[500px] xl:w-[500px]">
              <Item
                title="Blog"
                href="/resources/blog"
                icon={<Newspaper className="w-5 h-5" />}
              >
                Read our latest articles and updates.
              </Item>
              <Item
                title="Support"
                href="/resources/support"
                icon={<CircleHelp className="w-5 h-5" />}
              >
                Get help with any issues you may have.
              </Item>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

const Item = ({ title, href, children, icon, ...props }: Props) => {
  return (
    <li>
      <NavigationMenuLink asChild {...props}>
        <a
          href={href}
          className="flex flex-col justify-end w-full h-full p-4 no-underline rounded-lg outline-none select-none bg-gradient-to-tr from-accent to-accent/50 focus:shadow-md"
        >
          <div className="flex items-center mt-1 justify-center p-1 w-8 h-8 rounded-md border border-border/80">
            {icon}
          </div>
          <div className="text-start ml-3">
            <span className="text-sm group-hover:text-foreground font-normal leading-none">
              {title}
            </span>
            <p className="text-sm mt-0.5 line-clamp-2 text-black dark:text-white">
              {children}
            </p>
          </div>
        </a>
      </NavigationMenuLink>
    </li>
  );
};

Item.displayName = "Item";

export default Menu;
