import { create } from 'zustand';

/**
 * Holds the in-progress booking (selected flight, passengers, extras, insurance)
 * as the user moves through the multi-screen booking flow. Cleared after
 * successful booking creation.
 */
interface Passenger {
  firstName: string;
  lastName: string;
  dob: string;
  nationality: string;
  passportNumber: string;
}

interface BookingDraftState {
  selectedFlightId?: string;
  tripType: 'oneway' | 'roundtrip' | 'multicity';
  origin?: string;
  destination?: string;
  departureDate?: string;
  returnDate?: string;
  passengerCount: number;
  cabinClass: 'economy' | 'business' | 'first';
  passengers: Passenger[];
  selectedSeats: string[];
  extras: { baggageKg: number; meal?: string; assistance: string[] };
  insurancePlanId?: string;
  totalPrice: number;

  setSearch: (params: Partial<BookingDraftState>) => void;
  setSelectedFlight: (flightId: string, price: number) => void;
  setPassengers: (passengers: Passenger[]) => void;
  setSeats: (seats: string[]) => void;
  setExtras: (extras: Partial<BookingDraftState['extras']>) => void;
  setInsurance: (planId?: string, addPrice?: number) => void;
  addToTotal: (amount: number) => void;
  reset: () => void;
}

const initialState = {
  tripType: 'roundtrip' as const,
  passengerCount: 1,
  cabinClass: 'economy' as const,
  passengers: [],
  selectedSeats: [],
  extras: { baggageKg: 0, assistance: [] },
  totalPrice: 0,
};

export const useBookingDraftStore = create<BookingDraftState>((set, get) => ({
  ...initialState,
  setSearch: (params) => set(params),
  setSelectedFlight: (flightId, price) => set({ selectedFlightId: flightId, totalPrice: price }),
  setPassengers: (passengers) => set({ passengers }),
  setSeats: (seats) => set({ selectedSeats: seats }),
  setExtras: (extras) => set({ extras: { ...get().extras, ...extras } }),
  setInsurance: (planId, addPrice = 0) => set({ insurancePlanId: planId, totalPrice: get().totalPrice + addPrice }),
  addToTotal: (amount) => set({ totalPrice: get().totalPrice + amount }),
  reset: () => set(initialState),
}));
