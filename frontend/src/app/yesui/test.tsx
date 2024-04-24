"use client";
import { useCart } from "@/store/useCart";

export function ZuStandTest() {
  const { cart, addCart } = useCart();
  return (
    <div>
      <button onClick={() => addCart({ foodId: "", price: 1, amount: 4 })}>
        add
      </button>
    </div>
  );
}
