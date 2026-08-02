import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { Screen, Card, StateScreen, Skeleton } from '../../components';
import { FlightService } from '../../services';
import { useBookingDraftStore } from '../../store/bookingDraftStore';
import { colors, spacing, typography, radius } from '../../theme';

export const FlightResultsScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const draft = useBookingDraftStore();
  const [loading, setLoading] = useState(true);
  const [flights, setFlights] = useState<any[]>([]);

  useEffect(() => {
    FlightService.search({
      origin: draft.origin ?? 'NBO',
      destination: draft.destination ?? 'DXB',
      departureDate: draft.departureDate ?? '',
      passengers: draft.passengerCount,
      cabinClass: draft.cabinClass,
      tripType: draft.tripType,
    }).then((r) => { setFlights(r.data); setLoading(false); });
  }, []);

  const selectFlight = (flight: any) => {
    draft.setSelectedFlight(flight.flightId, flight.price);
    navigation.navigate('FlightDetails', { flightId: flight.flightId });
  };

  if (loading) {
    return (
      <Screen>
        <Skeleton height={100} style={{ marginBottom: spacing.sm }} />
        <Skeleton height={100} style={{ marginBottom: spacing.sm }} />
        <Skeleton height={100} />
      </Screen>
    );
  }

  if (flights.length === 0) {
    return <Screen scroll={false}><StateScreen emoji="✈️" title="No Flights Available" message="Try different dates or airports." actionLabel="New Search" onAction={() => navigation.navigate('FlightSearch')} /></Screen>;
  }

  return (
    <Screen scroll={false}>
      <View style={styles.headerRow}>
        <Text style={typography.h2 as any}>{draft.origin} → {draft.destination}</Text>
        <Text style={typography.caption as any}>{flights.length} results</Text>
      </View>
      <FlatList
        data={flights}
        keyExtractor={(i) => i.flightId}
        renderItem={({ item }) => (
          <Card style={{ marginBottom: spacing.sm }} onPress={() => selectFlight(item)}>
            <View style={styles.row}>
              <Text style={typography.h3 as any}>{item.airline}</Text>
              <Text style={typography.price as any}>${item.price.toFixed(2)}</Text>
            </View>
            <Text style={typography.body as any}>{item.originCity} → {item.destinationCity}</Text>
            <Text style={typography.caption as any}>
              {item.duration} · {item.stops === 0 ? 'Direct' : `${item.stops} stop (${item.stopCity})`}
            </Text>
            {item.refundable && <Text style={{ color: colors.success, fontSize: 12, marginTop: 4 }}>Refundable</Text>}
          </Card>
        )}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({
  headerRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: spacing.md },
  row: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
});
