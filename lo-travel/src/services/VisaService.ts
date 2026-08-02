import { mockRequest } from './apiClient';

// TODO: Replace with production endpoints:
// GET /api/visa/requirements?destination=
// POST /api/visa/apply
export const VisaService = {
  async getRequirements(destinationCountry: string) {
    return mockRequest({
      destinationCountry,
      required: true,
      processingTime: '3-5 business days',
      documents: ['Passport (6mo validity)', 'Passport photo', 'Proof of accommodation', 'Return ticket'],
    });
  },
  async submitApplication(_payload: Record<string, unknown>) {
    return mockRequest({ applicationId: `LO-VS-${Date.now()}`, status: 'submitted' });
  },
};
