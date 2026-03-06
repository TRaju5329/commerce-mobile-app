import { create } from "zustand";

type Role = "admin" | "customer" | null;

interface AuthState {
  role: Role;
  login: (role: Role) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  role: null,

  login: (role) => set({ role }),

  logout: () => set({ role: null }),
}));