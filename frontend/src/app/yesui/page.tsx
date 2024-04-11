import { No, SuccessGreen, SuccessYellow } from "./errors/no";
import { Cap } from "./errors/cap";
import { Ded } from "./errors/sign";
import { Containers } from "../foods/containers";
import React, { useState } from "react";
import { Nogoonplus } from "@/components/icons/nogoonplus";
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
