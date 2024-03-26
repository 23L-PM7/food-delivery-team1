import { No } from "./errors/no";
import { Cap } from "./errors/cap";
import { Ded } from "./errors/ded";

export default function Yesui() {
  return (
    <div>
      <Ded />
      <Cap />
      <No />
    </div>
  );
}
