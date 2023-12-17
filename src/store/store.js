import { create } from "zustand";

export const useNavbarStore = create((set) => ({
  hideLoginBtn: false,
  hideRegisterBtn: false,
  showModal: false,
  toggleLoginBtn: () => set((state) => ({ hideLoginBtn: !state.hideLoginBtn })),
  toggleRegisterBtn: () =>
    set((state) => ({ hideRegisterBtn: !state.hideRegisterBtn })),
  onClickShowModal: (show) =>
    set(() => ({
      showModal: show,
    })),
}));
