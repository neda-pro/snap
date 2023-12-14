import { create } from "zustand";

export const useCountStore = create((set) => ({
  count: 0,
  addCount: () => set((state) => ({ count: state.count + 1 })),
}));
