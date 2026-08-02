import { mockRequest } from './apiClient';
import plans from '../localData/mock/insurance.json';

// TODO: Replace with production endpoint: GET /api/insurance/plans
export const InsuranceService = {
  async getPlans() {
    return mockRequest(plans);
  },
};
