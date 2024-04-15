import { No, SuccessGreen, SuccessYellow } from "./errors/no";
import { Cap } from "./errors/cap";
import { Ded } from "./errors/sign";
import { Containers } from "../foods/Containers";
import React, { useState } from "react";
import { Nogoonplus } from "@/components/icons/mainPageCategories";
import { Jejbox } from "./baihgu";
import { Hailt } from "./hailt";

export default function Yesui() {
  return (
    <div>
      {/* <Ded />
      <Cap />
      <No /> */}
      {/* <SuccessGreen /> */}
      {/* <SuccessYellow /> */}
      {/* <Containers /> */}
      {/* <Nogoonplus /> */}
      {/* <Jejbox /> */}
      <Hailt />
    </div>
  );
}
