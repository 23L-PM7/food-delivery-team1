import { No } from "./errors/no";
import { Cap } from "./errors/cap";

export default function Yesui() {
  return (
    <div>
      <Cap />
      <No />
    </div>
  );
}
