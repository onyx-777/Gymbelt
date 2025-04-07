import React from "react";
import Nav from "./nav";
import { currentUser } from "@clerk/nextjs/server";

const Navbar = async () => {
  const user = await currentUser();
  return <Nav user={user?.id} />;
};

export default Navbar;
