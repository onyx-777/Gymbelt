import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider } from "next-themes";
import React from "react";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ClerkProvider
      afterSignOutUrl={"/"}
      signInForceRedirectUrl={"/onboarding"}
      signUpUrl="/sign-in"
    >
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
        {children}
      </ThemeProvider>
    </ClerkProvider>
  );
};

export default Providers;
