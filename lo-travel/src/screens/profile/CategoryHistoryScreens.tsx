import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { Screen, Card, StatusBadge, StateScreen, Skeleton } from '../../components';
import { BookingService, Booking } from '../../services/BookingService';
import { spacing, typography } from '../../theme';

function useHistoryByType(type: Booking['type']) {
  const [bookings, setBookings] = useState<Booking[] | null>(null);
  useEffect(() => {
    BookingService.getBookings().then((r) => setBookings(r.data.filter((b) => b.type === type)));
  }, [type]);
  return bookings;
}

function HistoryList({ title, emoji, emptyLabel, bookings }: { title: string; emoji: string; emptyLabel: string; bookings: Booking[] | null }) {
  if (bookings === null) return <Screen><Skeleton height={200} /></Screen>;
  if (bookings.length === 0) {
    return <Screen scroll={false}><StateScreen emoji={emoji} title={`No ${emptyLabel} Yet`} message={`Your ${emptyLabel.toLowerCase()} will show up here once you've booked one.`} /></Screen>;
  }
  return (
    <Screen scroll={false}>
      <Text style={[typography.h1 as any, { marginBottom: spacing.md }]}>{title}</Text>
      <FlatList
        data={bookings}
        keyExtractor={(b) => b.bookingId}
        renderItem={({ item }) => (
          <Card style={{ marginBottom: spacing.sm }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={typography.body as any}>{item.bookingId.slice(-6)}</Text>
              <StatusBadge status={item.status as any} />
            </View>
            <Text style={typography.price as any}>${item.totalPrice.toFixed(2)}</Text>
          </Card>
        )}
      />
    </Screen>
  );
}

export const FlightHistoryScreen: React.FC = () => {
  const bookings = useHistoryByType('flight');
  return <HistoryList title="Flight History" emoji="✈️" emptyLabel="Flights" bookings={bookings} />;
};

export const HotelHistoryScreen: React.FC = () => {
  const bookings = useHistoryByType('hotel');
  return <HistoryList title="Hotel History" emoji="🏨" emptyLabel="Hotel Bookings" bookings={bookings} />;
};

export const TourHistoryScreen: React.FC = () => {
  const bookings = useHistoryByType('tour');
  return <HistoryList title="Tour History" emoji="🌍" emptyLabel="Tour Bookings" bookings={bookings} />;
};

export const CarRentalHistoryScreen: React.FC = () => {
  const bookings = useHistoryByType('car');
  return <HistoryList title="Car Rental History" emoji="🚗" emptyLabel="Car Rentals" bookings={bookings} />;
};

export const InsuranceHistoryScreen: React.FC = () => {
  const [items, setItems] = useState<{ id: string; plan: string; bookedFor: string; price: number }[] | null>(null);
  useEffect(() => {
    // Insurance is attached to a flight booking rather than its own booking type,
    // so this reads from the same bookings list and surfaces the ones with a plan.
    BookingService.getBookings().then((r) => {
      const withInsurance = r.data.filter((b: any) => b.insurancePlanId).map((b: any) => ({
        id: b.bookingId, plan: b.insurancePlanId, bookedFor: b.bookingId.slice(-6), price: 24,
      }));
      setItems(withInsurance);
    });
  }, []);

  if (items === null) return <Screen><Skeleton height={200} /></Screen>;
  if (items.length === 0) {
    return <Screen scroll={false}><StateScreen emoji="🛡️" title="No Insurance History" message="Travel insurance you've purchased will appear here." /></Screen>;
  }
  return (
    <Screen scroll={false}>
      <Text style={[typography.h1 as any, { marginBottom: spacing.md }]}>Insurance History</Text>
      <FlatList
        data={items}
        keyExtractor={(i) => i.id}
        renderItem={({ item }) => (
          <Card style={{ marginBottom: spacing.sm }}>
            <Text style={typography.body as any}>Plan: {item.plan}</Text>
            <Text style={typography.caption as any}>Booking {item.bookedFor}</Text>
            <Text style={typography.price as any}>${item.price.toFixed(2)}</Text>
          </Card>
        )}
      />
    </Screen>
  );
};

export const VisaApplicationHistoryScreen: React.FC = () => (
  <Screen scroll={false}>
    <StateScreen emoji="📄" title="No Visa Applications Yet" message="Applications you submit from Visa Services will appear here with their status." />
  </Screen>
);
