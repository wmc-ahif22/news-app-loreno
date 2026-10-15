import { create } from 'zustand';

export type Language = 'de' | 'en';

interface LanguageState {
  language: Language;
  toggleLanguage: () => void;
  setLanguage: (lang: Language) => void;
}

export const useLanguageStore = create<LanguageState>((set) => ({
  language: 'de',
  toggleLanguage: () =>
    set((state) => ({ language: state.language === 'de' ? 'en' : 'de' })),
  setLanguage: (lang) => set({ language: lang }),
}));