import { Check } from "../../components/icons/check";

export function PassSetAlert() {
  return (
    <div className="w-[338px]">
      <div
        role="alert"
        className="alert alert-success bg-transparent rounded-2xl border-[1px] border-green-500"
      >
        <Check />
        <span className="text-green-500">Нууц үг амжилттай солигдлоо</span>
      </div>
    </div>
  );
}
