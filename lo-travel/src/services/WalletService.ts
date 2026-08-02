import { mockRequest, generateId } from './apiClient';
import { getItem, setItem } from '../utils/storage';
import { STORAGE_KEYS } from '../constants/storageKeys';
import userMock from '../localData/mock/user.json';

export interface WalletTransaction {
  id: string;
  type: 'topup' | 'withdraw' | 'payment' | 'refund' | 'reward';
  amount: number;
  currency: string;
  createdAt: string;
  description: string;
}

// TODO: Replace with production endpoints:
// GET  /api/wallet
// POST /api/wallet/topup
// POST /api/wallet/withdraw
export const WalletService = {
  async getBalance() {
    const stored = await getItem<{ balance: number }>(STORAGE_KEYS.WALLET);
    return mockRequest({ balance: stored?.balance ?? userMock.walletBalance, currency: 'USD' });
  },

  async getTransactions() {
    const txns: WalletTransaction[] = [
      { id: 'W1', type: 'reward', amount: 15, currency: 'USD', createdAt: '2026-07-20T10:00:00Z', description: 'Booking reward' },
      { id: 'W2', type: 'topup', amount: 100, currency: 'USD', createdAt: '2026-07-10T10:00:00Z', description: 'Top-up via card' },
      { id: 'W3', type: 'payment', amount: -30.5, currency: 'USD', createdAt: '2026-07-05T10:00:00Z', description: 'Used on booking LO-BK-8890' },
    ];
    return mockRequest(txns);
  },

  async topUp(amount: number) {
    const current = await this.getBalance();
    const newBalance = current.data.balance + amount;
    await setItem(STORAGE_KEYS.WALLET, { balance: newBalance });
    return mockRequest({ transactionId: generateId('WTX'), newBalance });
  },

  async withdraw(amount: number) {
    const current = await this.getBalance();
    const newBalance = Math.max(0, current.data.balance - amount);
    await setItem(STORAGE_KEYS.WALLET, { balance: newBalance });
    return mockRequest({ transactionId: generateId('WTX'), newBalance });
  },
};
