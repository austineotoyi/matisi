import { mockRequest } from './apiClient';
import cars from '../localData/mock/cars.json';

// TODO: Replace with production endpoint: GET /api/cars/search
export const CarService = {
  async search(_params?: { city: string; pickupDate: string; dropoffDate: string }) {
    return mockRequest(cars);
  },
  async getDetails(carId: string) {
    const car = cars.find((c) => c.carId === carId) ?? cars[0];
    return mockRequest(car);
  },
};
