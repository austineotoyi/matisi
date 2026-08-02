import React, { useCallback, useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { Screen, Card, StatusBadge, Button, StateScreen, ConfirmDialog } from '../../components';
import { BookingService, Booking } from '../../services/BookingService';
import { spacing, typography, colors } from '../../theme';

export const MyTripsScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [cancelTarget, setCancelTarget] = useState<Booking | null>(null);
  const [loading, setLoading] = useState(true);

  const load = useCallback(async () => {
    const res = await BookingService.getBookings();
    setBookings(res.data);
    setLoading(false);
  }, []);

  useFocusEffect(useCallback(() => { load(); }, [load]));

  const confirmCancel = async () => {
    if (!cancelTarget) return;
    await BookingService.cancelBooking(cancelTarget.bookingId);
    setCancelTarget(null);
    load();
  };

  if (!loading && bookings.length === 0) {
    return (
      <Screen scroll={false}>
        <StateScreen emoji="🧳" title="No Trips Yet" message="Book a flight, hotel, or tour to see it here." actionLabel="Search Flights" onAction={() => navigation.navigate('FlightSearch')} />
      </Screen>
    );
  }

  return (
    <Screen scroll={false}>
      <Text style={[typography.h1 as any, { marginBottom: spacing.sm }]}>My Trips</Text>
      <View style={{ flexDirection: 'row', gap: spacing.sm, marginBottom: spacing.md }}>
        <Button label="Upcoming" size="sm" variant="secondary" onPress={() => navigation.navigate('UpcomingTrips')} accessibilityLabel="View upcoming trips" />
        <Button label="Completed" size="sm" variant="secondary" onPress={() => navigation.navigate('CompletedTrips')} accessibilityLabel="View completed trips" />
        <Button label="Cancelled" size="sm" variant="secondary" onPress={() => navigation.navigate('CancelledTrips')} accessibilityLabel="View cancelled trips" />
      </View>
      <FlatList
        data={bookings}
        keyExtractor={(b) => b.bookingId}
        renderItem={({ item }) => (
          <Card style={{ marginBottom: spacing.sm }} onPress={() => navigation.navigate('TripDetails', { bookingId: item.bookingId })}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <View style={{ flex: 1 }}>
                <Text style={typography.h3 as any}>{item.type === 'flight' ? 'Flight' : item.type === 'hotel' ? 'Hotel' : item.type}</Text>
                <Text style={typography.caption as any}>{item.pnr ? `PNR ${item.pnr}` : item.bookingId}</Text>
              </View>
              <StatusBadge status={item.status as any} />
            </View>
            <Text style={[typography.price as any, { marginTop: spacing.xs }]}>${item.totalPrice.toFixed(2)}</Text>
            {BookingService.isCancellable(item) && (
              <Button
                label="Cancel Ticket"
                variant="ghost"
                size="sm"
                onPress={() => setCancelTarget(item)}
                accessibilityLabel={`Cancel booking ${item.bookingId}`}
              />
            )}
          </Card>
        )}
      />
      <ConfirmDialog
        visible={!!cancelTarget}
        title="Cancel Booking?"
        message="This action cannot be undone. Are you sure you want to cancel this booking?"
        confirmLabel="Yes, Cancel"
        cancelLabel="Keep Booking"
        onConfirm={confirmCancel}
        onCancel={() => setCancelTarget(null)}
      />
    </Screen>
  );
};
