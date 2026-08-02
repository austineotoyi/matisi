/**
 * apiClient — the ONLY place network semantics live.
 *
 * Today: resolves against local mock JSON with simulated latency.
 * Tomorrow: swap `mockRequest` internals for a real Axios instance
 * (baseURL, interceptors, auth headers) WITHOUT changing any service's
 * public method signatures. No screen or component ever imports this file
 * directly — only `services/*.ts` may.
 */

const SIMULATED_LATENCY_MS = 450;

export interface ApiResult<T> {
  data: T;
  success: boolean;
  error?: string;
}

// TODO: Replace with production Axios instance:
// import axios from 'axios';
// export const http = axios.create({ baseURL: config.API_BASE_URL, timeout: 15000 });
// http.interceptors.request.use(attachAuthToken);

export async function mockRequest<T>(payload: T, opts?: { failRate?: number; delay?: number }): Promise<ApiResult<T>> {
  const delay = opts?.delay ?? SIMULATED_LATENCY_MS;
  await new Promise((res) => setTimeout(res, delay));

  const failRate = opts?.failRate ?? 0;
  if (failRate > 0 && Math.random() < failRate) {
    return { data: payload, success: false, error: 'Simulated network error' };
  }
  return { data: payload, success: true };
}

export function generateId(prefix: string): string {
  return `${prefix}-${Date.now()}-${Math.floor(Math.random() * 9000 + 1000)}`;
}
