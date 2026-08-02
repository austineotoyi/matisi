import React, { useEffect } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import { PaymentService } from '../../services/PaymentService';
import { BookingService } from '../../services/BookingService';
import { useBookingDraftStore } from '../../store/bookingDraftStore';
import { colors, spacing, typography } from '../../theme';

export const ProcessingPaymentScreen: React.FC<{ navigation: any; route: any }> = ({ navigation, route }) => {
  const draft = useBookingDraftStore();
  const method = route.params?.method ?? 'card';

  useEffect(() => {
    (async () => {
      const payRes = await PaymentService.pay(draft.totalPrice, 'USD', method);
      if (!payRes.success) {
        navigation.replace('PaymentFailed');
        return;
      }
      const bookingRes = await BookingService.createBooking({
        type: 'flight',
        totalPrice: draft.totalPrice,
        currency: 'USD',
        flight: { flightNumber: 'KQ001', origin: draft.origin, destination: draft.destination, departureTime: draft.departureDate },
        seat: draft.selectedSeats[0],
        passengers: draft.passengers,
      });

      if (bookingRes.data.status === 'confirmed') {
        navigation.replace('BookingSuccess', { bookingId: bookingRes.data.bookingId });
      } else {
        navigation.replace('PaymentFailed');
      }
    })();
  }, []);

  return (
    <View style={styles.container} accessibilityLabel="Processing your payment">
      <ActivityIndicator size="large" color={colors.accent} />
      <Text style={[typography.h3 as any, { marginTop: spacing.md }]}>Processing Payment…</Text>
      <Text style={[typography.body as any, { color: colors.textSecondary, marginTop: spacing.xs }]}>Please don't close the app.</Text>
    </View>
  );
};

const styles = StyleSheet.create({ container: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: colors.background, padding: spacing.xl } });
