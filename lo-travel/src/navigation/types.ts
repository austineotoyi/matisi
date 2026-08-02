/**
 * Loosely-typed param list: every route from screenRegistry is a valid screen name,
 * and each may receive an optional params object. Every route resolves to its
 * own dedicated component via customScreenMap.ts (no generic fallback).
 */
export type RootStackParamList = {
  [key: string]: Record<string, unknown> | undefined;
};
