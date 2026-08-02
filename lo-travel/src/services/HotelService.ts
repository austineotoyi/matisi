import { mockRequest } from './apiClient';
import hotels from '../localData/mock/hotels.json';

// TODO: Replace with production endpoints:
// GET /api/hotels/search
// GET /api/hotels/:hotelId
// GET /api/hotels/:hotelId/rooms
export const HotelService = {
  async search(_params: { city: string; checkIn: string; checkOut: string; guests: number }) {
    return mockRequest(hotels);
  },

  async recommendationsForDestination(_cityCode: string) {
    // Used right after a flight booking succeeds — Smart Destination Recommendations.
    return mockRequest(hotels);
  },

  async getDetails(hotelId: string) {
    const hotel = hotels.find((h) => h.hotelId === hotelId) ?? hotels[0];
    return mockRequest(hotel);
  },

  async getRooms(_hotelId: string) {
    return mockRequest([
      { roomId: 'RM1', name: 'Deluxe King Room', price: 120, currency: 'USD', amenities: ['Free WiFi', 'Breakfast', 'City View'] },
      { roomId: 'RM2', name: 'Executive Suite', price: 210, currency: 'USD', amenities: ['Free WiFi', 'Breakfast', 'Lounge Access'] },
      { roomId: 'RM3', name: 'Family Room', price: 175, currency: 'USD', amenities: ['Free WiFi', 'Two Queen Beds'] },
    ]);
  },
};
