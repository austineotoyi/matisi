import { mockRequest, generateId } from './apiClient';
import tickets from '../localData/mock/support_tickets.json';

export interface ChatMessage {
  id: string;
  sender: 'user' | 'agent' | 'ai';
  text: string;
  createdAt: string;
}

// TODO: Replace with production endpoints:
// GET  /api/support/tickets
// POST /api/support/tickets
// GET  /api/support/chat/:ticketId
// POST /api/support/chat/:ticketId
export const SupportService = {
  async getTickets() {
    return mockRequest(tickets);
  },
  async createTicket(subject: string, description: string) {
    return mockRequest({ ticketId: generateId('LO-TK'), subject, description, status: 'open' });
  },
  async sendChatMessage(text: string): Promise<{ data: ChatMessage; success: boolean }> {
    // Mock "AI assistant" auto-reply — no backend involved.
    return mockRequest({
      id: generateId('MSG'),
      sender: 'ai',
      text: `Thanks for reaching out — here's a quick answer about "${text.slice(0, 40)}". A human agent can follow up if needed.`,
      createdAt: new Date().toISOString(),
    });
  },
};
