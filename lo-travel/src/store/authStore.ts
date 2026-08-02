import { create } from 'zustand';
import { AuthService, AuthUser } from '../services/AuthService';

interface AuthState {
  user: AuthUser | null;
  isAuthenticated: boolean;
  loading: boolean;
  hydrate: () => Promise<void>;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => Promise<void>;
  setUser: (user: AuthUser) => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,
  loading: true,

  hydrate: async () => {
    const { token, user } = await AuthService.getSession();
    set({ user: user ?? null, isAuthenticated: !!token, loading: false });
  },

  login: async (email, password) => {
    const res = await AuthService.login(email, password);
    if (res.success) {
      set({ user: res.data, isAuthenticated: true });
      return true;
    }
    return false;
  },

  logout: async () => {
    await AuthService.logout();
    set({ user: null, isAuthenticated: false });
  },

  setUser: (user) => set({ user }),
}));
