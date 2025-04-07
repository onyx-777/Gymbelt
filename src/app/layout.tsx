import "./globals.css";
import { cn, generateMetadata } from "@/functions";
import { inter, satoshi } from "@/constants";
import { Toaster } from "@/components/ui/sonner";
import Providers from "@/components/providers";
import { ScrollArea } from "@/components/ui/scroll-area";

export const metadata = generateMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen dark:bg-black bg-background select-none text-foreground antialiased font-default overflow-x-hidden !scrollbar-hide",
          inter.variable,
          satoshi.variable
        )}
      >
        <Toaster richColors theme="dark" position="top-right" />
        <Providers>
          <ScrollArea className="h-screen">{children}</ScrollArea>
        </Providers>
      </body>
    </html>
  );
}
