"use client";
import React from "react";
import { Button } from "../ui/button";
import { Spinner } from "../ui/ios-spinner";
import Link from "next/link";

interface Props {
  redirectingTo: string;
  windowLocationCompleteRedirectingLink: string;
}

const Unauthorized = ({
  redirectingTo,
  windowLocationCompleteRedirectingLink,
}: Props) => {
  setTimeout(() => {
    window.location.href = windowLocationCompleteRedirectingLink;
  }, 3000);
  return (
    <div className="w-full h-full flex flex-col justify-center items-center space-y-2">
      <div className="flex justify-center items-center max-w-lg flex-col w-full h-full gap-3">
        <h2 className="font-semibold text-4xl">Access Denied</h2>
        <p className="text-sm text-muted-foreground">
          You are not authorized to view this page.
        </p>
        <div className="flex flex-col mt-10 justify-center items-center w-60 gap-3">
          <Link href="/" className="w-full cursor-pointer">
            <Button className="bg-primary text-white rounded-full hover:text-black w-full">
              Go Home
            </Button>
          </Link>
          <Button
            variant={"secondary"}
            className="flex justify-center rounded-full items-center gap-3 w-full"
          >
            Redirecting to {redirectingTo} <Spinner />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Unauthorized;
