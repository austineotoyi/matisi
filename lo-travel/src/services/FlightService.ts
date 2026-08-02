import { mockRequest } from './apiClient';
import flights from '../localData/mock/flights.json';

export interface FlightSearchParams {
  origin: string;
  destination: string;
  departureDate: string;
  returnDate?: string;
  passengers: number;
  cabinClass: 'economy' | 'business' | 'first';
  tripType: 'oneway' | 'roundtrip' | 'multicity';
}

// TODO: Replace with production endpoints:
// GET /api/flights/search
// GET /api/flights/:flightId
// GET /api/flights/:flightId/seatmap
// GET /api/flights/:flightId/fare-rules
export const FlightService = {
  async search(_params: FlightSearchParams) {
    return mockRequest(flights);
  },

  async getDetails(flightId: string) {
    const flight = flights.find((f) => f.flightId === flightId) ?? flights[0];
    return mockRequest(flight);
  },

  async getSeatMap(_flightId: string) {
    const rows = Array.from({ length: 20 }, (_, rowIdx) => {
      const row = rowIdx + 1;
      const seats = ['A', 'B', 'C', 'D', 'E', 'F'].map((letter) => {
        const isExit = row === 12;
        const isPremium = row <= 3;
        const isOccupied = Math.random() < 0.25;
        return {
          seatNumber: `${row}${letter}`,
          type: letter === 'A' || letter === 'F' ? 'window' : letter === 'C' || letter === 'D' ? 'aisle' : 'middle',
          status: isOccupied ? 'occupied' : 'available',
          premium: isPremium,
          exitRow: isExit,
          extraLegroom: isExit || isPremium,
          price: isPremium ? 45 : isExit ? 25 : 0,
        };
      });
      return { row, seats };
    });
    return mockRequest({ rows });
  },

  async getFareRules(_flightId: string) {
    return mockRequest({
      cancellationPolicy: 'Non-refundable within 24h of departure.',
      changePolicy: 'Changes allowed with a $50 fee up to 3h before departure.',
      baggagePolicy: '23kg checked, 7kg cabin included.',
    });
  },
};
