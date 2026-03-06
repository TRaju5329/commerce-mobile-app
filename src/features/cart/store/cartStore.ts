import { create } from "zustand";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Product } from "../../products/types";

interface CartState {
  items: Product[];
  addToCart: (product: Product) => void;
  increaseQty: (id: string) => void;
  decreaseQty: (id: string) => void;
  removeItem: (id: string) => void;
  loadCart: () => void;
}

const saveCart = async (items: Product[]) => {
  await AsyncStorage.setItem("cart", JSON.stringify(items));
};

export const useCartStore = create<CartState>((set, get) => ({
  items: [],

  loadCart: async () => {
    const data = await AsyncStorage.getItem("cart");
    if (data) {
      set({ items: JSON.parse(data) });
    }
  },

  addToCart: (product) => {
    const items = get().items;

    const existing = items.find((item) => item.id === product.id);

    let updated;

    if (existing) {
      updated = items.map((item) =>
        item.id === product.id
          ? { ...item, quantity: (item.quantity || 1) + 1 }
          : item
      );
    } else {
      updated = [...items, { ...product, quantity: 1 }];
    }

    set({ items: updated });
    saveCart(updated);
  },

  increaseQty: (id) => {
    const updated = get().items.map((item) =>
      item.id === id
        ? { ...item, quantity: (item.quantity || 1) + 1 }
        : item
    );

    set({ items: updated });
    saveCart(updated);
  },

  decreaseQty: (id) => {
    const updated = get()
      .items.map((item) =>
        item.id === id
          ? { ...item, quantity: (item.quantity || 1) - 1 }
          : item
      )
      .filter((item) => item.quantity! > 0);

    set({ items: updated });
    saveCart(updated);
  },

  removeItem: (id) => {
    const updated = get().items.filter((item) => item.id !== id);

    set({ items: updated });
    saveCart(updated);
  },
}));