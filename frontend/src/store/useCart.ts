import { create } from "zustand";

type Cart = {
  totalAmount: number;
  cartItems: CartItem[];
};

type CartItem = {
  tempId: string;
  foodId: string;
  price: number;
  amount: number;
  name: string;
  ingredient: string;
};

type State = {
  cart: Cart;
};

type Action = {
  addCart: (food: CartItem) => void;
  removeCart: (id: string) => void;
  clearCart: () => void;
  updateCart: (id: string, amount: number) => void;
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
          totalAmount: state.cart.totalAmount + food.price * food.amount,
        },
      };
    });
  },
  removeCart: (id) => {
    set((state) => {
      const newList = state.cart.cartItems.filter((item) => item.tempId !== id);
      const newPrice = newList.reduce((totalPrice, item) => {
        return totalPrice + item.price * item.amount;
      }, 0);

      return {
        ...state,
        cart: {
          ...state.cart,
          cartItems: newList,
          totalAmount: 0 + newPrice,
        },
      };
    });
  },
  clearCart: () => {
    set((state) => {
      const clearList: any = [];

      return {
        ...state,
        cart: {
          ...state.cart,
          cartItems: clearList,
          totalAmount: 0,
        },
      };
    });
  },
  updateCart: (id, amount) => {
    set((state) => {
      const clearList: any = [];

      return {
        ...state,
        cart: {
          ...state.cart,
          cartItems: clearList,
          totalAmount: 0,
        },
      };
    });
  },
}));
