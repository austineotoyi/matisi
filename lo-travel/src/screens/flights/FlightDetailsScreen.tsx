import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Screen, Card, Button, Skeleton } from '../../components';
import { FlightService } from '../../services';
import { colors, spacing, typography } from '../../theme';

export const FlightDetailsScreen: React.FC<{ navigation: any; route: any }> = ({ navigation, route }) => {
  const { flightId } = route.params ?? {};
  const [flight, setFlight] = useState<any>(null);

  useEffect(() => { FlightService.getDetails(flightId).then((r) => setFlight(r.data)); }, [flightId]);

  if (!flight) return <Screen><Skeleton height={200} /></Screen>;

  return (
    <Screen>
      <Text style={typography.h1 as any}>{flight.airline}</Text>
      <Text style={[typography.caption as any, { marginBottom: spacing.md }]}>{flight.flightNumber}</Text>

      <Card style={{ marginBottom: spacing.md }}>
        <Text style={typography.h3 as any}>{flight.originCity} → {flight.destinationCity}</Text>
        <Text style={typography.body as any}>Departs {new Date(flight.departureTime).toLocaleString()}</Text>
        <Text style={typography.body as any}>Arrives {new Date(flight.arrivalTime).toLocaleString()}</Text>
        <Text style={typography.caption as any}>{flight.duration} · {flight.stops === 0 ? 'Direct flight' : `${flight.stops} stop`}</Text>
      </Card>

      <Card style={{ marginBottom: spacing.md }}>
        <Text style={typography.h3 as any}>Baggage</Text>
        <Text style={typography.body as any}>{flight.baggage}</Text>
      </Card>

      <Card style={{ marginBottom: spacing.lg }}>
        <View style={styles.row}>
          <Text style={typography.h3 as any}>Total Price</Text>
          <Text style={typography.price as any}>${flight.price.toFixed(2)}</Text>
        </View>
        <Text style={typography.caption as any}>{flight.refundable ? 'Refundable fare' : 'Non-refundable fare'}</Text>
      </Card>

      <Button label="Continue" onPress={() => navigation.navigate('PassengerInfo')} />
    </Screen>
  );
};

const styles = StyleSheet.create({ row: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' } });
