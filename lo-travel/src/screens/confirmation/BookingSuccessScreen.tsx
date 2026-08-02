import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Screen, Card, Button } from '../../components';
import { BookingService } from '../../services/BookingService';
import { useBookingDraftStore } from '../../store/bookingDraftStore';
import { colors, spacing, typography } from '../../theme';

export const BookingSuccessScreen: React.FC<{ navigation: any; route: any }> = ({ navigation, route }) => {
  const { bookingId } = route.params ?? {};
  const [booking, setBooking] = useState<any>(null);
  const reset = useBookingDraftStore((s) => s.reset);

  useEffect(() => {
    BookingService.getBookingById(bookingId).then((r) => setBooking(r.data));
    return () => reset();
  }, []);

  return (
    <Screen scroll={false}>
      <View style={styles.center}>
        <Text style={{ fontSize: 72 }}>✅</Text>
        <Text style={[typography.h1 as any, { marginTop: spacing.md }]}>Booking Successful</Text>
        <Text style={[typography.body as any, { color: colors.textSecondary, marginTop: spacing.xs, textAlign: 'center' }]}>
          Your e-ticket has been emailed and saved to My Trips.
        </Text>

        <Card style={{ marginTop: spacing.lg, width: '100%' }}>
          <Text style={typography.caption as any}>Booking Reference (PNR)</Text>
          <Text style={typography.h2 as any}>{booking?.pnr ?? '—'}</Text>
        </Card>

        <View style={{ width: '100%', marginTop: spacing.xl, gap: spacing.sm }}>
          <Button label="View E-Ticket" onPress={() => navigation.navigate('ETicket', { bookingId })} accessibilityLabel="View e-ticket" />
          <Button label="Explore Dubai Recommendations" variant="secondary" onPress={() => navigation.navigate('RecommendedHotels')} accessibilityLabel="View destination recommendations" />
          <Button label="Go to My Trips" variant="ghost" onPress={() => navigation.navigate('MyTrips')} accessibilityLabel="Go to my trips" />
        </View>
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({ center: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: spacing.xl } });
