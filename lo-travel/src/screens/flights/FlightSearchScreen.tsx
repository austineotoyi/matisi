import React, { useState } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { Screen, Input, Button, Card } from '../../components';
import { useBookingDraftStore } from '../../store/bookingDraftStore';
import { flightSearchSchema } from '../../validators/bookingValidators';
import { colors, spacing, typography, radius } from '../../theme';

const TRIP_TYPES = ['oneway', 'roundtrip', 'multicity'] as const;
const CABINS = ['economy', 'business', 'first'] as const;

export const FlightSearchScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const draft = useBookingDraftStore();
  const [tripType, setTripType] = useState<typeof TRIP_TYPES[number]>('roundtrip');
  const [cabin, setCabin] = useState<typeof CABINS[number]>('economy');
  const [origin, setOrigin] = useState('NBO');
  const [destination, setDestination] = useState('DXB');
  const [departureDate, setDepartureDate] = useState('2026-08-14');
  const [returnDate, setReturnDate] = useState('2026-08-21');
  const [passengers, setPassengers] = useState(1);
  const [error, setError] = useState<string | null>(null);

  const onSearch = async () => {
    try {
      await flightSearchSchema.validate({ origin, destination, departureDate, passengers });
    } catch (validationError: any) {
      setError(validationError.message);
      return;
    }
    if (origin === destination) { setError('Departure and destination cannot be the same'); return; }
    setError(null);
    draft.setSearch({ tripType, origin, destination, departureDate, returnDate, passengerCount: passengers, cabinClass: cabin });
    navigation.navigate('FlightResults');
  };

  return (
    <Screen>
      <Text style={[typography.h1 as any, { marginBottom: spacing.md }]}>Search Flights</Text>

      <View style={styles.pillRow}>
        {TRIP_TYPES.map((t) => (
          <Pressable key={t} onPress={() => setTripType(t)} accessibilityRole="button" accessibilityLabel={`${t} trip type${tripType === t ? ', selected' : ''}`} style={[styles.pill, tripType === t && styles.pillActive]}>
            <Text style={[styles.pillText, tripType === t && styles.pillTextActive]}>
              {t === 'oneway' ? 'One Way' : t === 'roundtrip' ? 'Round Trip' : 'Multi-city'}
            </Text>
          </Pressable>
        ))}
      </View>

      <Pressable onPress={() => navigation.navigate('AirportSelect', { field: 'origin' })} accessibilityRole="button" accessibilityLabel="Choose departure airport">
        <Input label="From" value={origin} onChangeText={setOrigin} placeholder="Departure city or airport" />
      </Pressable>
      <Pressable onPress={() => navigation.navigate('AirportSelect', { field: 'destination' })} accessibilityRole="button" accessibilityLabel="Choose destination airport">
        <Input label="To" value={destination} onChangeText={setDestination} placeholder="Destination city or airport" />
      </Pressable>

      <View style={{ flexDirection: 'row', gap: spacing.sm }}>
        <View style={{ flex: 1 }}>
          <Input label="Departure" value={departureDate} onChangeText={setDepartureDate} placeholder="YYYY-MM-DD" />
        </View>
        {tripType === 'roundtrip' && (
          <View style={{ flex: 1 }}>
            <Input label="Return" value={returnDate} onChangeText={setReturnDate} placeholder="YYYY-MM-DD" />
          </View>
        )}
      </View>

      <Card style={{ marginBottom: spacing.md }}>
        <View style={styles.stepperRow}>
          <Text style={typography.body as any}>Passengers</Text>
          <View style={styles.stepper}>
            <Pressable onPress={() => setPassengers(Math.max(1, passengers - 1))} style={styles.stepperBtn} accessibilityRole="button" accessibilityLabel="Decrease passenger count"><Text>−</Text></Pressable>
            <Text style={{ marginHorizontal: spacing.md }}>{passengers}</Text>
            <Pressable onPress={() => setPassengers(passengers + 1)} style={styles.stepperBtn} accessibilityRole="button" accessibilityLabel="Increase passenger count"><Text>+</Text></Pressable>
          </View>
        </View>
        <View style={styles.pillRow}>
          {CABINS.map((c) => (
            <Pressable key={c} onPress={() => setCabin(c)} accessibilityRole="button" accessibilityLabel={`${c} cabin class${cabin === c ? ', selected' : ''}`} style={[styles.pill, cabin === c && styles.pillActive]}>
              <Text style={[styles.pillText, cabin === c && styles.pillTextActive]}>{c[0].toUpperCase() + c.slice(1)}</Text>
            </Pressable>
          ))}
        </View>
      </Card>

      {error ? <Text style={{ color: colors.error, marginBottom: spacing.sm }}>{error}</Text> : null}
      <Button label="Search Flights" onPress={onSearch} />
    </Screen>
  );
};

const styles = StyleSheet.create({
  pillRow: { flexDirection: 'row', gap: spacing.xs, marginBottom: spacing.md },
  pill: { paddingHorizontal: spacing.sm, paddingVertical: spacing.xs, borderRadius: radius.pill, backgroundColor: colors.backgroundSecondary },
  pillActive: { backgroundColor: colors.accent },
  pillText: { fontSize: 13, color: colors.textBody },
  pillTextActive: { color: colors.textInverse, fontWeight: '700' },
  stepperRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: spacing.sm },
  stepper: { flexDirection: 'row', alignItems: 'center' },
  stepperBtn: { width: 32, height: 32, borderRadius: 16, backgroundColor: colors.backgroundSecondary, alignItems: 'center', justifyContent: 'center' },
});
