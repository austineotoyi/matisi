import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Screen, Card, Button, BookingProgress } from '../../components';
import { useBookingDraftStore } from '../../store/bookingDraftStore';
import { colors, spacing, typography } from '../../theme';

const STEPS = ['Flight', 'Passenger', 'Contact', 'Seats', 'Extras', 'Insurance', 'Payment'];

const BAGGAGE_OPTIONS = [
  { kg: 10, price: 25 },
  { kg: 20, price: 42 },
  { kg: 30, price: 58 },
];

export const ExtraBaggageScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const setExtras = useBookingDraftStore((s) => s.setExtras);
  const addToTotal = useBookingDraftStore((s) => s.addToTotal);
  const [selected, setSelected] = useState<number | null>(null);

  const onContinue = () => {
    const opt = BAGGAGE_OPTIONS.find((o) => o.kg === selected);
    setExtras({ baggageKg: selected ?? 0 });
    if (opt) addToTotal(opt.price);
    navigation.navigate('MealSelection');
  };

  return (
    <Screen>
      <BookingProgress steps={STEPS} currentIndex={4} />
      <Text style={[typography.h1 as any, { marginBottom: spacing.sm }]}>Add Baggage</Text>
      <Text style={[typography.body as any, { color: colors.textSecondary, marginBottom: spacing.md }]}>Your ticket includes 23kg checked baggage.</Text>
      {BAGGAGE_OPTIONS.map((opt) => (
        <Card key={opt.kg} selected={selected === opt.kg} onPress={() => setSelected(opt.kg)} style={{ marginBottom: spacing.sm }}>
          <View style={styles.row}>
            <Text style={typography.h3 as any}>+{opt.kg} kg</Text>
            <Text style={typography.price as any}>${opt.price}</Text>
          </View>
        </Card>
      ))}
      <Button label="Continue" onPress={onContinue} accessibilityLabel="Continue to meal selection" />
    </Screen>
  );
};

const MEALS = [
  { id: 'standard', name: 'Standard', badge: 'Complimentary' },
  { id: 'vegetarian', name: 'Vegetarian', badge: 'Complimentary' },
  { id: 'vegan', name: 'Vegan', badge: undefined },
  { id: 'halal', name: 'Halal', badge: undefined },
  { id: 'kosher', name: 'Kosher', badge: undefined },
  { id: 'glutenfree', name: 'Gluten-Free', badge: undefined },
  { id: 'child', name: "Children's Meal", badge: 'Popular Choice' },
];

export const MealSelectionScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const setExtras = useBookingDraftStore((s) => s.setExtras);
  const [selected, setSelected] = useState('standard');

  return (
    <Screen>
      <BookingProgress steps={STEPS} currentIndex={4} />
      <Text style={[typography.h1 as any, { marginBottom: spacing.md }]}>Choose Your Meal</Text>
      {MEALS.map((m) => (
        <Card key={m.id} selected={selected === m.id} onPress={() => setSelected(m.id)} style={{ marginBottom: spacing.sm }}>
          <View style={styles.row}>
            <Text style={typography.body as any}>{m.name}</Text>
            {m.badge && <Text style={{ color: colors.success, fontSize: 12 }}>{m.badge}</Text>}
          </View>
        </Card>
      ))}
      <Button label="Save Meal Selection" onPress={() => { setExtras({ meal: selected }); navigation.navigate('SpecialAssistance'); }} accessibilityLabel="Save meal and continue" />
    </Screen>
  );
};

const SERVICES = ['Wheelchair Assistance', 'Medical Assistance', 'Unaccompanied Minor', 'Extra Time Boarding', 'Priority Boarding'];

export const SpecialAssistanceScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const setExtras = useBookingDraftStore((s) => s.setExtras);
  const [picked, setPicked] = useState<string[]>([]);

  const toggle = (s: string) => setPicked((p) => (p.includes(s) ? p.filter((x) => x !== s) : [...p, s]));

  return (
    <Screen>
      <BookingProgress steps={STEPS} currentIndex={4} />
      <Text style={[typography.h1 as any, { marginBottom: spacing.md }]}>Additional Travel Services</Text>
      {SERVICES.map((s) => (
        <Card key={s} selected={picked.includes(s)} onPress={() => toggle(s)} style={{ marginBottom: spacing.sm }}>
          <Text style={typography.body as any}>{s}</Text>
        </Card>
      ))}
      <Button
        label="Continue to Insurance"
        onPress={() => { setExtras({ assistance: picked }); navigation.navigate('InsuranceOptions'); }}
        accessibilityLabel="Continue to insurance options"
      />
    </Screen>
  );
};

const styles = StyleSheet.create({ row: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' } });
