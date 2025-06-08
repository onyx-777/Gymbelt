"use client";

import * as Clerk from "@clerk/elements/common";
import * as SignIn from "@clerk/elements/sign-in";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

export default function SignInPage() {
  return (
    <div className="w-screen h-screen dark:bg-black bg-white ">
      <div className="grid w-full h-[90vh] text-black dark:text-black dark:text-white flex-grow items-center px-4 sm:justify-center">
        <SignIn.Root>
          <motion.div
            className="w-full flex-grow space-y-10 rounded-2xl px-4 py-10 sm:w-96 sm:px-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: "backInOut" }}
          >
            <SignIn.Step name="start">
              <header className="text-center flex flex-col justify-center items-center gap-10 mb-12">
                <Link href={"/"}>
                  <Image
                    src={"/assets/logo.png"}
                    className="bg-white rounded-full"
                    height={70}
                    width={70}
                    alt={"gymbelt-logo"}
                  />
                </Link>
                <div>
                  <h1 className="text-2xl font-medium tracking-wide text-black dark:text-white">
                    Sign Up to GymBelt
                  </h1>
                  <h3 className="mt-2 text-sm font-medium text-muted-foreground">
                    Choose a method to sign up
                  </h3>
                </div>
              </header>
              <Clerk.GlobalError className="block text-sm text-red-400" />
              <div className="space-y-6 lg:space-y-8">
                <Clerk.Connection
                  name="google"
                  className="w-full flex justify-center items-center py-4 lg:py-3 rounded-full dark:bg-white dark:text-black text-white bg-black text-white font-medium gap-5 cursor-pointer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 17 16"
                    className="w-5"
                    aria-hidden
                  >
                    <path
                      fill="currentColor"
                      d="M8.82 7.28v2.187h5.227c-.16 1.226-.57 2.124-1.192 2.755-.764.765-1.955 1.6-4.035 1.6-3.218 0-5.733-2.595-5.733-5.813 0-3.218 2.515-5.814 5.733-5.814 1.733 0 3.005.685 3.938 1.565l1.538-1.538C12.998.96 11.256 0 8.82 0 4.41 0 .705 3.591.705 8s3.706 8 8.115 8c2.382 0 4.178-.782 5.582-2.24 1.44-1.44 1.893-3.475 1.893-5.111 0-.507-.035-.978-.115-1.369H8.82Z"
                    />
                  </svg>
                  Continue with Google
                </Clerk.Connection>
                <Clerk.Connection
                  name="apple"
                  className="w-full flex justify-center items-center py-4 lg:py-3 rounded-full dark:bg-white dark:text-black text-white bg-black text-white font-medium gap-5 cursor-pointer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 22.773 22.773"
                    className="w-6"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M15.769,0c0.053,0,0.106,0,0.162,0c0.13,1.606-0.483,2.806-1.228,3.675c-0.731,0.863-1.732,1.7-3.351,1.573 c-0.108-1.583,0.506-2.694,1.25-3.561C13.292,0.879,14.557,0.16,15.769,0z"></path>
                    <path d="M20.67,16.716c0,0.016,0,0.03,0,0.045c-0.455,1.378-1.104,2.559-1.896,3.655c-0.723,0.995-1.609,2.334-3.191,2.334 c-1.367,0-2.275-0.879-3.676-0.903c-1.482-0.024-2.297,0.735-3.652,0.926c-0.155,0-0.31,0-0.462,0 c-0.995-0.144-1.798-0.932-2.383-1.642c-1.725-2.098-3.058-4.808-3.306-8.276c0-0.34,0-0.679,0-1.019 c0.105-2.482,1.311-4.5,2.914-5.478c0.846-0.52,2.009-0.963,3.304-0.765c0.555,0.086,1.122,0.276,1.619,0.464 c0.471,0.181,1.06,0.502,1.618,0.485c0.378-0.011,0.754-0.208,1.135-0.347c1.116-0.403,2.21-0.865,3.652-0.648 c1.733,0.262,2.963,1.032,3.723,2.22c-1.466,0.933-2.625,2.339-2.427,4.74C17.818,14.688,19.086,15.964,20.67,16.716z"></path>
                  </svg>
                  Continue with Apple
                </Clerk.Connection>
              </div>
              <p className="text-center mt-14 text-sm text-neutral-600">
                No account?{" "}
                <Clerk.Link
                  navigate="sign-up"
                  className="font-medium text-primary decoration-white/20 underline-offset-4 outline-none hover:underline focus-visible:underline"
                >
                  Create an account
                </Clerk.Link>
              </p>
            </SignIn.Step>
          </motion.div>
        </SignIn.Root>
      </div>
    </div>
  );
}
