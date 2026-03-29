import { create } from "zustand";
import { persist } from "zustand/middleware";
export type Product = {
    id: number;
    title: string;
    price: number;
    image: string;
    category: string;
    description: string;
    quantity?: number; // Optional quantity field for cart items
};
type CartStore = {
    cartItems: Product[];
    addToCart: (product:Omit<Product,"quantity">)=> void;
    increaseQuantity: (id: number) => void;
    decreaseQuantity: (id: number) => void;
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
      
      if(exists) {
        return { 
          cartItems: state.cartItems.map((item)=>
          item.id === product.id
        ? {...item, quantity: (item.quantity ?? 1)+1}
        : item) 
      };
      }
      
      return {
        cartItems: [...state.cartItems, {...product, quantity: 1}]
      }

    }),

    increaseQuantity: (id) =>
      set((state) => ({
        cartItems: state.cartItems.map((item) =>
          item.id === id ? { ...item, quantity: (item?.quantity ?? 1) + 1 } 
        : item
        ),
      })),

    decreaseQuantity: (id) =>
        set((state)=> ({
          cartItems: state.cartItems.map((item)=>
          item.id === id 
          ? { ...item, quantity: (item.quantity ?? 1) - 1 } 
          : item)
          .filter((item)=> item.quantity && item.quantity > 0),
        })),

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