import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors, radius, spacing, shadow, typography } from '../theme';

interface Props {
  airlineName: string;
  origin: string;
  destination: string;
  tripType: string;
  cabinClass: string;
  travelers: number;
  total?: string;
}

/** Persistent booking-flow summary bar (spec: "Sticky Flight Summary" on every screen). */
export const StickyFlightSummary: React.FC<Props> = ({
  airlineName,
  origin,
  destination,
  tripType,
  cabinClass,
  travelers,
  total,
}) => (
  <View style={styles.wrap}>
    <Text style={styles.airline}>{airlineName}</Text>
    <Text style={styles.route}>
      {origin} → {destination}
    </Text>
    <Text style={styles.meta}>
      {tripType} · {cabinClass} · {travelers} traveler{travelers > 1 ? 's' : ''}
    </Text>
    {total ? <Text style={styles.total}>{total}</Text> : null}
  </View>
);

const styles = StyleSheet.create({
  wrap: {
    backgroundColor: colors.backgroundSecondary,
    borderRadius: radius.lg,
    padding: spacing.md,
    marginBottom: spacing.md,
    ...shadow.card,
  },
  airline: { ...(typography.caption as any), color: colors.textSecondary },
  route: { ...(typography.h3 as any), marginTop: 2 },
  meta: { ...(typography.bodySmall as any), color: colors.textSecondary, marginTop: 2 },
  total: { ...(typography.price as any), marginTop: spacing.xs },
});
