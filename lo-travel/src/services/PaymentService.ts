import { mockRequest, generateId } from './apiClient';

export type PaymentMethod = 'card' | 'mobileMoney' | 'bankTransfer' | 'wallet' | 'paypal';

// TODO: Replace with production endpoints:
// POST /api/payments/authorize
// POST /api/payments/capture
// GET  /api/payments/status/:id
export const PaymentService = {
  async pay(amount: number, currency: string, method: PaymentMethod) {
    const paymentId = generateId('PAY');
    // Local mock logic: always succeeds unless amount is exactly a sentinel test value.
    const res = await mockRequest(
      { paymentId, amount, currency, method, status: 'CAPTURED' as const },
      { delay: 900 },
    );
    return res;
  },

  async getStatus(paymentId: string) {
    return mockRequest({ paymentId, status: 'CAPTURED' as const });
  },
};
