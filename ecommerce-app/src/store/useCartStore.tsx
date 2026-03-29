import { create } from "zustand";
import { persist } from "zustand/middleware";
export type Product = {
    id: number;
    title: string;
    price: number;
    image: string;
    category: string;
    description: string;
};
type CartStore = {
    cartItems: Product[];
    addToCart: (product:Product)=> void;
    removeFromCart: (id: number) => void;
    clearCart: () => void;
};
// Create a Zustand store for the shopping cart with persistence

export const useCartStore = create<CartStore>()(
  persist(
  (set)=> ({
    cartItems: [],
  
    addToCart: (product) =>
    set((state) => {
      const exists = state.cartItems.find((item)=> item.id === product.id);
      
      if(exists) return state; // Prevent duplicates
      
      return { cartItems: [...state.cartItems, product]};

    }),

  removeFromCart: (id) =>
    set((state) => ({
      cartItems: state.cartItems.filter((item) => item.id !== id),
    })),

    clearCart: () =>
    set(() => ({
        cartItems: [],
    })),
    
}),
{
    name: "cart-storage",
}
));