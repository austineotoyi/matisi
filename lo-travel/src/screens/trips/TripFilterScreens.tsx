import React, { useCallback, useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { Screen, Card, StatusBadge, StateScreen } from '../../components';
import { BookingService, Booking } from '../../services/BookingService';
import { spacing, typography } from '../../theme';

const CONFIRMED_STATUSES = ['confirmed', 'processing', 'ticket_processing', 'paid'];
const COMPLETED_STATUSES = ['refunded'];
const CANCELLED_STATUSES = ['cancelled', 'failed', 'cancellation_processing'];

function useFilteredBookings(statuses: string[], isUpcoming = false) {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);

  const load = useCallback(async () => {
    const res = await BookingService.getBookings();
    const now = Date.now();
    const filtered = res.data.filter((b) => {
      const statusMatch = statuses.includes(b.status);
      if (!isUpcoming) return statusMatch;
      const flight = (b as any).flight;
      const departureTime = flight?.departureTime ? new Date(flight.departureTime).getTime() : Infinity;
      return statusMatch && departureTime >= now;
    });
    setBookings(filtered);
    setLoading(false);
  }, [statuses, isUpcoming]);

  useFocusEffect(useCallback(() => { load(); }, [load]));
  return { bookings, loading };
}

function TripList({ bookings, emptyEmoji, emptyTitle, emptyMessage }: { bookings: Booking[]; emptyEmoji: string; emptyTitle: string; emptyMessage: string }) {
  if (bookings.length === 0) {
    return <Screen scroll={false}><StateScreen emoji={emptyEmoji} title={emptyTitle} message={emptyMessage} /></Screen>;
  }
  return (
    <FlatList
      data={bookings}
      keyExtractor={(b) => b.bookingId}
      renderItem={({ item }) => (
        <Card style={{ marginBottom: spacing.sm }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <View style={{ flex: 1 }}>
              <Text style={typography.h3 as any}>{item.type === 'flight' ? 'Flight' : item.type}</Text>
              <Text style={typography.caption as any}>{item.pnr ? `PNR ${item.pnr}` : item.bookingId}</Text>
            </View>
            <StatusBadge status={item.status as any} />
          </View>
          <Text style={[typography.price as any, { marginTop: spacing.xs }]}>${item.totalPrice.toFixed(2)}</Text>
        </Card>
      )}
    />
  );
}

export const UpcomingTripsScreen: React.FC = () => {
  const { bookings, loading } = useFilteredBookings(CONFIRMED_STATUSES, true);
  if (loading) return <Screen scroll={false}><View /></Screen>;
  return (
    <Screen scroll={false}>
      <Text style={[typography.h1 as any, { marginBottom: spacing.md }]}>Upcoming Trips</Text>
      <TripList bookings={bookings} emptyEmoji="🧳" emptyTitle="No Upcoming Trips" emptyMessage="Book a flight, hotel, or tour to see it here." />
    </Screen>
  );
};

export const CompletedTripsScreen: React.FC = () => {
  const { bookings, loading } = useFilteredBookings(COMPLETED_STATUSES);
  if (loading) return <Screen scroll={false}><View /></Screen>;
  return (
    <Screen scroll={false}>
      <Text style={[typography.h1 as any, { marginBottom: spacing.md }]}>Completed Trips</Text>
      <TripList bookings={bookings} emptyEmoji="✅" emptyTitle="No Completed Trips Yet" emptyMessage="Trips you've finished will appear here." />
    </Screen>
  );
};

export const CancelledTripsScreen: React.FC = () => {
  const { bookings, loading } = useFilteredBookings(CANCELLED_STATUSES);
  if (loading) return <Screen scroll={false}><View /></Screen>;
  return (
    <Screen scroll={false}>
      <Text style={[typography.h1 as any, { marginBottom: spacing.md }]}>Cancelled Trips</Text>
      <TripList bookings={bookings} emptyEmoji="🚫" emptyTitle="No Cancelled Trips" emptyMessage="Bookings you cancel will be listed here." />
    </Screen>
  );
};
