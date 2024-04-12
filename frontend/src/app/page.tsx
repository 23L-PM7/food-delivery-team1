"use client";

import { Footer } from "./Footer";
import Header from "../components/Header";
import { Mainbutton } from "@/components/herobutton/Mainbutton";
import Menu from "./mnde/menu";
import { Desktop } from "@/components/Desktop";
import { Nogoonplus } from "@/components/icons/nogoonplus";
import { Category } from "@/components/category";
import { useState } from "react";
import { UserProfile } from "@/components/userprofile/UserProfile";

export default function Home() {
  return (
    <div>
      <Header />
      <UserProfile />
      <Desktop />
      <Mainbutton />
      <Nogoonplus />

      <Footer />
    </div>
  );
}
