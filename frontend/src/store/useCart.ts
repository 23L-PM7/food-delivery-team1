import { create } from "zustand";

type Cart = {
  totalAmount: number;
  cartItems: CartItem[];
};

type CartItem = {
  name: string;
  price: number;
};

type State = {
  cart: Cart;
};

type Action = {
  addCart: (food: CartItem) => void;
  removeCart: () => void;
  clearCart: () => void;
};

export const useCart = create<State & Action>((set) => ({
  cart: {
    cartItems: [],
    totalAmount: 0,
  },
  addCart: (food) => {
    set((state) => {
      return {
        ...state,
        cart: {
          ...state.cart,
          cartItems: [...state.cart.cartItems, food],
        },
      };
    });
  },
  removeCart: () => {},
  clearCart: () => {},
}));
