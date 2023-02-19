import { create } from 'zustand';

interface NavState {
  isOpen: boolean;
  setIsOpen: (val: boolean) => void;
}

export const useNavStore = create<NavState>()((set) => ({
  isOpen: false,
  setIsOpen: (val) => set(() => ({ isOpen: val })),
}));
