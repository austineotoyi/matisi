import { mockRequest } from './apiClient';
import tours from '../localData/mock/tours.json';

// TODO: Replace with production endpoints:
// GET /api/tours/search
// GET /api/tours/:tourId
export const TourService = {
  async search(_cityCode?: string) {
    return mockRequest(tours);
  },
  async recommendationsForDestination(_cityCode: string) {
    return mockRequest(tours);
  },
  async getDetails(tourId: string) {
    const tour = tours.find((t) => t.tourId === tourId) ?? tours[0];
    return mockRequest(tour);
  },
};
