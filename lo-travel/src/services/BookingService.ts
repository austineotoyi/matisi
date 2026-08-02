import { mockRequest, generateId } from './apiClient';
import { getItem, setItem } from '../utils/storage';
import { STORAGE_KEYS } from '../constants/storageKeys';
import bookingsMock from '../localData/mock/bookings.json';

export type BookingStatus =
  | 'draft'
  | 'pending_payment'
  | 'payment_processing'
  | 'paid'
  | 'ticket_processing'
  | 'confirmed'
  | 'failed'
  | 'cancellation_processing'
  | 'cancelled'
  | 'refund_processing'
  | 'refunded';

export interface Booking {
  bookingId: string;
  type: 'flight' | 'hotel' | 'tour' | 'car' | 'visa';
  status: BookingStatus;
  totalPrice: number;
  currency: string;
  bookedAt: string;
  pnr?: string;
  [key: string]: unknown;
}

// TODO: Replace with production endpoints:
// POST   /api/bookings/package
// GET    /api/bookings
// GET    /api/bookings/:id
// PUT    /api/bookings/:id/cancel
export const BookingService = {
  async createBooking(payload: Partial<Booking>): Promise<{ data: Booking; success: boolean }> {
    const bookingId = generateId('LO-BK');
    // Simulate ticket-processing lifecycle: draft -> processing -> confirmed (95% success).
    const succeeded = Math.random() > 0.05;
    const booking: Booking = {
      bookingId,
      type: (payload.type as Booking['type']) ?? 'flight',
      status: succeeded ? 'confirmed' : 'failed',
      totalPrice: (payload.totalPrice as number) ?? 0,
      currency: (payload.currency as string) ?? 'USD',
      bookedAt: new Date().toISOString(),
      pnr: succeeded ? bookingId.slice(-6).toUpperCase() : undefined,
      ...payload,
    };

    const existing = (await getItem<Booking[]>(STORAGE_KEYS.BOOKINGS)) ?? (bookingsMock as Booking[]);
    await setItem(STORAGE_KEYS.BOOKINGS, [booking, ...existing]);

    return mockRequest(booking, { delay: 1200 });
  },

  async getBookings() {
    const existing = (await getItem<Booking[]>(STORAGE_KEYS.BOOKINGS)) ?? (bookingsMock as Booking[]);
    return mockRequest(existing);
  },

  async getBookingById(bookingId: string) {
    const existing = (await getItem<Booking[]>(STORAGE_KEYS.BOOKINGS)) ?? (bookingsMock as Booking[]);
    const found = existing.find((b) => b.bookingId === bookingId);
    return mockRequest(found ?? existing[0]);
  },

  /** Used by both the user app cancel button and the CSR support panel. */
  async cancelBooking(bookingId: string) {
    const existing = (await getItem<Booking[]>(STORAGE_KEYS.BOOKINGS)) ?? (bookingsMock as Booking[]);
    const updated = existing.map((b) =>
      b.bookingId === bookingId ? { ...b, status: 'cancelled' as BookingStatus } : b,
    );
    await setItem(STORAGE_KEYS.BOOKINGS, updated);
    return mockRequest({ bookingId, status: 'cancelled' as BookingStatus });
  },

  isCancellable(booking: Booking): boolean {
    if (!['confirmed', 'processing', 'ticket_processing'].includes(booking.status)) return false;
    // Spec: cancel button disappears after the cancellation window expires.
    const bookedAt = new Date(booking.bookedAt).getTime();
    const hoursSinceBooking = (Date.now() - bookedAt) / 36e5;
    return hoursSinceBooking < 24 * 30; // 30-day mock cancellation window
  },
};
