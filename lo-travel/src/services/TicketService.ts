import { mockRequest } from './apiClient';
import { Booking } from './BookingService';

export interface BoardingPass {
  passengerName: string;
  pnr: string;
  flightNumber: string;
  seat: string;
  gate: string;
  boardingTime: string;
  qrPayload: string;
  barcodeIata: string;
}

export interface Receipt {
  receiptId: string;
  bookingId: string;
  items: { label: string; amount: number }[];
  total: number;
  currency: string;
  issuedAt: string;
}

// TODO: Replace with production endpoints:
// GET /api/checkin/boarding/:boardingPassId
// GET /api/bookings/:id/receipt
export const TicketService = {
  async generateBoardingPass(booking: Booking, passengerName: string): Promise<{ data: BoardingPass; success: boolean }> {
    const flight = (booking as any).flight ?? {};
    const pass: BoardingPass = {
      passengerName,
      pnr: booking.pnr ?? booking.bookingId.slice(-6).toUpperCase(),
      flightNumber: flight.flightNumber ?? 'KQ001',
      seat: (booking as any).seat ?? '12A',
      gate: 'B14',
      boardingTime: flight.departureTime ?? new Date().toISOString(),
      // IATA-standard BCBP-style payload (mock — real boarding barcode is supplier-issued).
      qrPayload: `M1${passengerName.toUpperCase()}/${booking.pnr}E${flight.flightNumber ?? ''}${booking.bookingId}`,
      barcodeIata: `${flight.flightNumber ?? 'KQ001'}-${booking.pnr}`,
    };
    return mockRequest(pass);
  },

  async generateReceipt(booking: Booking): Promise<{ data: Receipt; success: boolean }> {
    const receipt: Receipt = {
      receiptId: `RCT-${booking.bookingId}`,
      bookingId: booking.bookingId,
      items: [{ label: `${booking.type} booking`, amount: booking.totalPrice }],
      total: booking.totalPrice,
      currency: booking.currency,
      issuedAt: new Date().toISOString(),
    };
    return mockRequest(receipt);
  },
};
