import "./globals.css";
import { cn, generateMetadata } from "@/functions";
import Providers from "@/components/providers";
import { Nunito_Sans } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";

export const metadata = generateMetadata();

const montserrat = Nunito_Sans({
  subsets: ["latin", "latin-ext"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-montserrat",
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background select-none text-foreground antialiased font-default overflow-x-hidden !scrollbar-hide",
          montserrat.className
        )}
      >
        <Toaster />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
