import { mockRequest } from './apiClient';
import transfers from '../localData/mock/transfers.json';

// TODO: Replace with production endpoint: GET /api/transfers/search
export const TransferService = {
  async search(_params?: { airport: string; destination: string }) {
    return mockRequest(transfers);
  },
};
