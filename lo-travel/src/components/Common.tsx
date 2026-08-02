import React from 'react';
import { View, Text, StyleSheet, ScrollView, ViewStyle } from 'react-native';
import { colors, radius, spacing, typography } from '../theme';
import { Button } from './Button';

/** Full-screen wrapper: consistent padding + safe background for every screen. */
export const Screen: React.FC<{ children: React.ReactNode; scroll?: boolean; style?: ViewStyle }> = ({
  children,
  scroll = true,
  style,
}) => {
  const Wrapper = scroll ? ScrollView : View;
  return (
    <View style={styles.flexFill}>
      <Wrapper
        style={styles.flexFill}
        contentContainerStyle={scroll ? [styles.scrollContent, style] : undefined}
      >
        {!scroll ? <View style={[styles.flexFill, style]}>{children}</View> : children}
      </Wrapper>
    </View>
  );
};

type BookingStatus = 'processing' | 'confirmed' | 'failed' | 'cancelled' | 'cancellation_processing' | 'refunded';

const STATUS_MAP: Record<BookingStatus, { label: string; color: string; bg: string }> = {
  processing: { label: 'Processing', color: colors.warning, bg: colors.warningBg },
  confirmed: { label: 'Confirmed', color: colors.success, bg: colors.successBg },
  failed: { label: 'Failed', color: colors.error, bg: colors.errorBg },
  cancelled: { label: 'Cancelled', color: colors.textSecondary, bg: colors.neutralBg },
  cancellation_processing: { label: 'Cancelling…', color: colors.warning, bg: colors.warningBg },
  refunded: { label: 'Refunded', color: colors.info, bg: colors.infoBg },
};

/** Booking status pill used across My Trips, booking history, and support ticket lookup. */
export const StatusBadge: React.FC<{ status: BookingStatus }> = ({ status }) => {
  const s = STATUS_MAP[status];
  return (
    <View style={[styles.badge, { backgroundColor: s.bg }]} accessibilityLabel={`Booking status: ${s.label}`}>
      <Text style={[styles.badgeText, { color: s.color }]}>{s.label}</Text>
    </View>
  );
};

/** Horizontal booking-progress stepper shown on every screen in the booking flow. */
export const BookingProgress: React.FC<{ steps: string[]; currentIndex: number }> = ({ steps, currentIndex }) => (
  <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginBottom: spacing.md }}>
    {steps.map((step, i) => (
      <View
        key={step}
        style={styles.stepItem}
        accessibilityLabel={`Step ${i + 1} of ${steps.length}: ${step}${i === currentIndex ? ', current step' : i < currentIndex ? ', completed' : ''}`}
      >
        <View
          style={[
            styles.stepDot,
            i < currentIndex && { backgroundColor: colors.success },
            i === currentIndex && { backgroundColor: colors.accent },
            i > currentIndex && { backgroundColor: colors.border },
          ]}
        >
          <Text style={styles.stepDotText}>{i < currentIndex ? '✓' : i + 1}</Text>
        </View>
        <Text
          style={[
            typography.caption as any,
            i === currentIndex && { color: colors.primary, fontWeight: '700' },
          ]}
        >
          {step}
        </Text>
      </View>
    ))}
  </ScrollView>
);

/** Generic empty / error state used for the ~40 error & empty screens in the spec. */
export const StateScreen: React.FC<{
  emoji?: string;
  title: string;
  message: string;
  actionLabel?: string;
  onAction?: () => void;
}> = ({ emoji = '✈️', title, message, actionLabel, onAction }) => (
  <View style={styles.stateWrap} accessibilityLabel={`${title}. ${message}`}>
    <Text style={styles.stateEmoji} accessibilityElementsHidden importantForAccessibility="no">{emoji}</Text>
    <Text style={[typography.h3 as any, { textAlign: 'center', marginTop: spacing.md }]} accessibilityRole="header">{title}</Text>
    <Text style={[typography.body as any, { textAlign: 'center', marginTop: spacing.xs, color: colors.textSecondary }]}>
      {message}
    </Text>
    {actionLabel && onAction ? (
      <View style={{ marginTop: spacing.lg, width: '100%' }}>
        <Button label={actionLabel} onPress={onAction} accessibilityLabel={actionLabel} />
      </View>
    ) : null}
  </View>
);

const styles = StyleSheet.create({
  flexFill: { flex: 1, backgroundColor: colors.background },
  scrollContent: { padding: spacing.lg, paddingBottom: spacing.xxxl },
  badge: { paddingHorizontal: spacing.sm, paddingVertical: spacing.xxs, borderRadius: radius.pill, alignSelf: 'flex-start' },
  badgeText: { fontSize: 12, fontWeight: '700' },
  stepItem: { alignItems: 'center', marginRight: spacing.lg, width: 76 },
  stepDot: {
    width: 28,
    height: 28,
    borderRadius: radius.pill,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing.xxs,
  },
  stepDotText: { color: colors.textInverse, fontSize: 12, fontWeight: '700' },
  stateWrap: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: spacing.xl },
  stateEmoji: { fontSize: 56 },
});
