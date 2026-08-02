import { create } from 'zustand';

interface AppState {
  language: string;
  currency: string;
  onboardingSeen: boolean;
  setLanguage: (lang: string) => void;
  setCurrency: (currency: string) => void;
  setOnboardingSeen: (seen: boolean) => void;
}

export const useAppStore = create<AppState>((set) => ({
  language: 'en',
  currency: 'USD',
  onboardingSeen: false,
  setLanguage: (language) => set({ language }),
  setCurrency: (currency) => set({ currency }),
  setOnboardingSeen: (onboardingSeen) => set({ onboardingSeen }),
}));
