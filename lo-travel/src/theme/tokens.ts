// LO Travel Platform — Design Tokens
// Single source of truth for color, spacing, radius, typography, shadow.
// Every screen/component must consume these tokens — no hardcoded hex/px in screens.

export const colors = {
  primary: '#1C2374', // Deep Blue
  accent: '#A53BFF', // Vibrant Purple
  gradient: ['#1C2374', '#A53BFF'] as const,

  background: '#FFFFFF',
  backgroundSecondary: '#F7F8FC',
  card: '#FFFFFF',

  textHeading: '#1C2374',
  textBody: '#3A3D4D',
  textSecondary: '#8A8DA3',
  textDisabled: '#C7C9D9',
  textInverse: '#FFFFFF',

  success: '#1FAE5A',
  warning: '#F59E0B',
  error: '#E53E3E',
  info: '#2E90FA',

  // Status-tint backgrounds (booking status pills, badges) — named tokens so no
  // screen hardcodes these hex values directly.
  successBg: '#E7F8EE',
  warningBg: '#FFF4E5',
  errorBg: '#FDEBEB',
  neutralBg: '#F1F1F6',
  infoBg: '#EAF3FE',

  border: '#E7E8F2',
  divider: '#EEEFF7',

  seatAvailable: '#FFFFFF',
  seatSelected: '#1C2374',
  seatPremium: '#A53BFF',
  seatOccupied: '#C7C9D9',
  seatExitRow: '#D4A72C',

  navActive: '#1C2374',
  navInactive: '#8A8DA3',
  navDot: '#A53BFF',
} as const;

export const spacing = {
  xxs: 4,
  xs: 8,
  sm: 12,
  md: 16,
  lg: 20,
  xl: 24,
  xxl: 32,
  xxxl: 48,
} as const;

export const radius = {
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  pill: 999,
} as const;

export const typography = {
  h1: { fontSize: 28, fontWeight: '700' as const, color: colors.textHeading },
  h2: { fontSize: 22, fontWeight: '700' as const, color: colors.textHeading },
  h3: { fontSize: 18, fontWeight: '600' as const, color: colors.textHeading },
  subtitle: { fontSize: 15, fontWeight: '500' as const, color: colors.textSecondary },
  body: { fontSize: 15, fontWeight: '400' as const, color: colors.textBody },
  bodySmall: { fontSize: 13, fontWeight: '400' as const, color: colors.textBody },
  caption: { fontSize: 12, fontWeight: '400' as const, color: colors.textSecondary },
  button: { fontSize: 16, fontWeight: '600' as const, color: colors.textInverse },
  price: { fontSize: 18, fontWeight: '700' as const, color: colors.accent },
} as const;

export const shadow = {
  card: {
    shadowColor: '#1C2374',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 3,
  },
  floating: {
    shadowColor: '#1C2374',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.15,
    shadowRadius: 20,
    elevation: 8,
  },
} as const;

export const motion = {
  fast: 200,
  base: 250,
  slow: 300,
} as const;

export const theme = { colors, spacing, radius, typography, shadow, motion };
export type Theme = typeof theme;
