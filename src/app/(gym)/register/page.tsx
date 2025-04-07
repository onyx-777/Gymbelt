import StepperComponent from "@/components/global/stepper";
import { currentUser } from "@clerk/nextjs/server";
import React from "react";
// import { MailtrapTransport } from "mailtrap";
// import Nodemailer from "nodemailer";

const Page = async () => {
  const user = await currentUser();

  // const TOKEN = "41fb9d296702e60d000d4f81f2054059";

  // const transport = Nodemailer.createTransport(
  //   MailtrapTransport({
  //     token: TOKEN,
  //   })
  // );

  // const sender = {
  //   address: "hello@rnazj-122-161-66-157.a.free.pinggy.link",
  //   name: "Mailtrap Test",
  // };
  // const recipients = ["kosika3069@noroasis.com"];

  // transport
  //   .sendMail({
  //     from: sender,
  //     to: recipients,
  //     subject: "You are awesome!",
  //     text: "Congrats for sending test email with Mailtrap!",
  //     category: "Integration Test",
  //   })
  //   .then(console.log, console.error);

  return (
    <div className="w-screen h-screen overflow-hidden flex items-center justify-center">
      <StepperComponent
        userEmail={user?.emailAddresses[0].emailAddress as string}
      />
    </div>
  );
};

export default Page;
