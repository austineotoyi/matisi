import { mockRequest } from './apiClient';
import { getItem, setItem } from '../utils/storage';
import { STORAGE_KEYS } from '../constants/storageKeys';
import userMock from '../localData/mock/user.json';

// TODO: Replace with production endpoints:
// GET /api/users/profile
// PUT /api/users/profile
export const UserService = {
  async getProfile() {
    const stored = await getItem(STORAGE_KEYS.USER_PROFILE);
    return mockRequest(stored ?? userMock);
  },
  async updateProfile(updates: Record<string, unknown>) {
    const current = (await getItem(STORAGE_KEYS.USER_PROFILE)) ?? userMock;
    const updated = { ...current, ...updates };
    await setItem(STORAGE_KEYS.USER_PROFILE, updated);
    return mockRequest(updated);
  },
  async getSavedTravelers() {
    const stored = await getItem<any[]>(STORAGE_KEYS.SAVED_TRAVELERS);
    return mockRequest(stored ?? userMock.savedTravelers);
  },
};
