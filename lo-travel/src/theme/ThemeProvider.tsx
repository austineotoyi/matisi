import React, { createContext, useContext, useMemo } from 'react';
import { theme as lightTheme, Theme } from './tokens';

type ThemeContextValue = {
  theme: typeof lightTheme;
  isDark: boolean;
};

const ThemeContext = createContext<ThemeContextValue>({
  theme: lightTheme as unknown as typeof lightTheme,
  isDark: false,
});

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Dark mode is architected but not enabled by default (spec: "Dark Mode ready").
  const value = useMemo(() => ({ theme: lightTheme as unknown as typeof lightTheme, isDark: false }), []);
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => useContext(ThemeContext);
