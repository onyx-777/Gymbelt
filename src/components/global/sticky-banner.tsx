import { StickyBanner } from "@/components/ui/sticky-banner";
import { cn } from "@/lib/utils";
import { currentUser } from "@clerk/nextjs/server";
import Link from "next/link";

export async function StickyBannerKycPending() {
  const user = await currentUser();
  if (!user) return;

  return (
    <StickyBanner
      className={cn(
        "bg-gradient-to-b from-blue-500 to-blue-600",
        user.publicMetadata.min_kyc_status === "PENDING" &&
          user.publicMetadata.Payment_activation_status === "PENDING" &&
          "hidden"
      )}
    >
      <div className="mx-0 max-w-[90%] text-white drop-shadow-md text-center flex flex-col lg:flex-row w-full justify-center items-center gap-3 text-base">
        <p className="font-semibold text-sm">
          ⚠️ Complete KYC to start accepting payments
        </p>
        <Link
          className="bg-white text-center w-fit text-nowrap text-sm rounded-2xl text-black py-1 px-4 hover:bg-white/95"
          href={`/gyms/${user.publicMetadata.gymSubdomain}/admin/settings/payments`}
        >
          Complete Now
        </Link>
      </div>
    </StickyBanner>
  );
}
