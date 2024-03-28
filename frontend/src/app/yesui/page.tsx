import { No, SuccessGreen, SuccessYellow } from "./errors/no";
import { Cap } from "./errors/cap";
import { Ded } from "./errors/sign";
import { Containers } from "./sale/containers";

export default function Yesui() {
  return (
    <div>
      {/* <Ded />
      <Cap />
      <No /> */}
      {/* <SuccessGreen /> */}
      {/* <SuccessYellow /> */}
      <Containers />
    </div>
  );
}
