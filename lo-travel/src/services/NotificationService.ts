import { mockRequest } from './apiClient';
import { getItem, setItem } from '../utils/storage';
import { STORAGE_KEYS } from '../constants/storageKeys';
import notificationsMock from '../localData/mock/notifications.json';

export interface Notification {
  id: string;
  type: 'booking' | 'promotion' | 'flightStatus';
  title: string;
  message: string;
  read: boolean;
  createdAt: string;
}

// TODO: Replace with production endpoints:
// GET  /api/notifications
// POST /api/notifications/:id/read
export const NotificationService = {
  async getAll() {
    const existing = (await getItem<Notification[]>(STORAGE_KEYS.NOTIFICATIONS)) ?? (notificationsMock as Notification[]);
    return mockRequest(existing);
  },
  async markRead(id: string) {
    const existing = (await getItem<Notification[]>(STORAGE_KEYS.NOTIFICATIONS)) ?? (notificationsMock as Notification[]);
    const updated = existing.map((n) => (n.id === id ? { ...n, read: true } : n));
    await setItem(STORAGE_KEYS.NOTIFICATIONS, updated);
    return mockRequest({ id, read: true });
  },
  async unreadCount() {
    const existing = (await getItem<Notification[]>(STORAGE_KEYS.NOTIFICATIONS)) ?? (notificationsMock as Notification[]);
    return mockRequest(existing.filter((n) => !n.read).length);
  },
};
