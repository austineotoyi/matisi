import { mockRequest } from './apiClient';
import countries from '../localData/mock/countries.json';
import currencies from '../localData/mock/currencies.json';
import airports from '../localData/mock/airports.json';

// TODO: Replace with production endpoints:
// GET /api/admin/countries, /api/reference/currencies, /api/reference/airports
export const ReferenceDataService = {
  async getCountries() {
    return mockRequest(countries);
  },
  async getCurrencies() {
    return mockRequest(currencies);
  },
  async searchAirports(query: string) {
    const q = query.trim().toLowerCase();
    const results = q
      ? airports.filter(
          (a) => a.city.toLowerCase().includes(q) || a.code.toLowerCase().includes(q) || a.name.toLowerCase().includes(q),
        )
      : airports;
    return mockRequest(results);
  },
};
