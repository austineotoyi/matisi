import { mockRequest, generateId } from './apiClient';
import userMock from '../localData/mock/user.json';
import { setItem, getItem, removeItem } from '../utils/storage';
import { STORAGE_KEYS } from '../constants/storageKeys';

export interface AuthUser {
  userId: string;
  fullName: string;
  email: string;
  phone: string;
}

// TODO: Replace with production endpoints:
// POST /api/auth/register
// POST /api/auth/login
// POST /api/auth/verify-otp
// POST /api/auth/forgot-password
// POST /api/auth/reset-password
// GET  /api/auth/profile
export const AuthService = {
  async login(email: string, password: string) {
    const res = await mockRequest({ ...userMock, email }, { failRate: 0 });
    if (res.success) {
      await setItem(STORAGE_KEYS.AUTH_TOKEN, generateId('tok'));
      await setItem(STORAGE_KEYS.USER_PROFILE, res.data);
    }
    return res;
  },

  async register(fullName: string, email: string, phone: string, _password: string) {
    const newUser: AuthUser = { userId: generateId('LO-USR'), fullName, email, phone };
    return mockRequest(newUser);
  },

  async sendOtp(_destination: string) {
    return mockRequest({ otpSent: true, expiresInSeconds: 120 });
  },

  async verifyOtp(_destination: string, code: string) {
    return mockRequest({ verified: code.length === 4 });
  },

  async forgotPassword(_email: string) {
    return mockRequest({ resetLinkSent: true });
  },

  async resetPassword(_token: string, _newPassword: string) {
    return mockRequest({ passwordChanged: true });
  },

  async loginWithBiometrics() {
    const res = await mockRequest(userMock);
    if (res.success) {
      await setItem(STORAGE_KEYS.AUTH_TOKEN, generateId('tok'));
      await setItem(STORAGE_KEYS.USER_PROFILE, res.data);
    }
    return res;
  },

  async getSession() {
    const token = await getItem(STORAGE_KEYS.AUTH_TOKEN);
    const user = await getItem(STORAGE_KEYS.USER_PROFILE);
    return { token, user };
  },

  async logout() {
    await removeItem(STORAGE_KEYS.AUTH_TOKEN);
  },
};
