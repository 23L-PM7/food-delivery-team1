"use client";

import { Footer } from "./Footer";
import Header from "../components/Header";
import { Mainbutton } from "@/components/herobutton/Mainbutton";
import Menu from "./mnde/menu";
import { Desktop } from "@/components/Desktop";
import { Nogoonplus } from "@/components/icons/nogoonplus";
import { Category } from "@/components/category";
import { useState } from "react";

export default function Home() {
  const [extend, setExtend] = useState("h-[280px]");

  return (
    <div>
      <Header />
      <Desktop />
      <Mainbutton />

      <Nogoonplus />
      <div className={`${extend}`}>
        <Menu />
      </div>

      <Footer />
    </div>
  );
}
