import { Spinner } from "@/components/ui/ios-spinner";
import { AuthenticateWithRedirectCallback } from "@clerk/nextjs";

export default function Page() {
  // Handle the redirect flow by calling the Clerk.handleRedirectCallback() method
  // or rendering the prebuilt <AuthenticateWithRedirectCallback/> component.
  // This is the final step in the custom OAuth flow.
  return (
    <>
      <AuthenticateWithRedirectCallback signUpForceRedirectUrl="/onboarding" />
      <div className="flex w-screen h-screen justify-center items-center gap-4">
        <Spinner size="lg" className="text-white z-50" />
      </div>
    </>
  );
}
