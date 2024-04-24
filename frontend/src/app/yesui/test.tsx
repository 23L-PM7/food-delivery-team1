"use client";
import { useCart } from "@/store/useCart";

export function ZuStandTest() {
  const { cart, addCart } = useCart();
  return (
    <div>
      <button onClick={() => addCart({ name: "", price: 1 })}>add</button>
    </div>
  );
}
