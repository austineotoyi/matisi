import React, { useEffect, useState } from 'react';
import { Text, FlatList, View, ScrollView } from 'react-native';
import { Screen, Card, StatusBadge, StateScreen, Button } from '../../components';
import { BookingService } from '../../services/BookingService';
import { spacing, typography } from '../../theme';

const CATEGORIES: { route: string; label: string }[] = [
  { route: 'FlightHistory', label: 'Flights' },
  { route: 'HotelHistory', label: 'Hotels' },
  { route: 'TourHistory', label: 'Tours' },
  { route: 'CarRentalHistory', label: 'Cars' },
  { route: 'InsuranceHistory', label: 'Insurance' },
  { route: 'VisaApplicationHistory', label: 'Visa' },
  { route: 'PaymentHistory', label: 'Payments' },
  { route: 'RefundHistory', label: 'Refunds' },
];

export const BookingHistoryScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [bookings, setBookings] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => { BookingService.getBookings().then((r) => { setBookings(r.data); setLoading(false); }); }, []);

  return (
    <Screen scroll={false}>
      <Text style={[typography.h2 as any, { marginBottom: spacing.sm }]}>Booking History</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginBottom: spacing.md }}>
        {CATEGORIES.map((c) => (
          <View key={c.route} style={{ marginRight: spacing.xs }}>
            <Button label={c.label} size="sm" variant="secondary" fullWidth={false} onPress={() => navigation.navigate(c.route)} accessibilityLabel={`View ${c.label} history`} />
          </View>
        ))}
      </ScrollView>
      {!loading && bookings.length === 0 ? (
        <StateScreen emoji="🧾" title="No Booking History" message="Your past bookings will appear here." />
      ) : (
        <FlatList
          data={bookings}
          keyExtractor={(b) => b.bookingId}
          renderItem={({ item }) => (
            <Card style={{ marginBottom: spacing.sm }}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={typography.body as any}>{item.type} · {item.bookingId.slice(-6)}</Text>
                <StatusBadge status={item.status} />
              </View>
              <Text style={typography.price as any}>${item.totalPrice.toFixed(2)}</Text>
            </Card>
          )}
        />
      )}
    </Screen>
  );
};
