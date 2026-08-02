import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { Screen, Card, Button, BookingProgress, Skeleton } from '../../components';
import { InsuranceService } from '../../services';
import { useBookingDraftStore } from '../../store/bookingDraftStore';
import { colors, spacing, typography, radius } from '../../theme';

const STEPS = ['Flight', 'Passenger', 'Contact', 'Seats', 'Extras', 'Insurance', 'Payment'];

export const InsuranceOptionsScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const setInsurance = useBookingDraftStore((s) => s.setInsurance);
  const [plans, setPlans] = useState<any[]>([]);
  const [selected, setSelected] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => { InsuranceService.getPlans().then((r) => { setPlans(r.data); setLoading(false); }); }, []);

  const onContinue = (skip = false) => {
    const plan = plans.find((p) => p.planId === selected);
    if (!skip && plan) setInsurance(plan.planId, plan.price);
    navigation.navigate('BookingSummary');
  };

  if (loading) return <Screen><Skeleton height={300} /></Screen>;

  return (
    <Screen scroll={false}>
      <BookingProgress steps={STEPS} currentIndex={5} />
      <Text style={[typography.h1 as any, { marginBottom: spacing.md }]}>Protect Your Journey</Text>
      <FlatList
        data={plans}
        keyExtractor={(i) => i.planId}
        contentContainerStyle={{ paddingBottom: spacing.lg }}
        renderItem={({ item }) => (
          <Card selected={selected === item.planId} onPress={() => setSelected(item.planId)} style={{ marginBottom: spacing.sm }}>
            <View style={styles.row}>
              <Text style={typography.h3 as any}>{item.name}</Text>
              {item.badge && <View style={styles.badge}><Text style={styles.badgeText}>{item.badge}</Text></View>}
            </View>
            {item.coverage.map((c: string) => (
              <Text key={c} style={typography.bodySmall as any}>• {c}</Text>
            ))}
            <Text style={[typography.price as any, { marginTop: spacing.xs }]}>${item.price}</Text>
          </Card>
        )}
        ListFooterComponent={
          <View>
            <Button label="Add Insurance" onPress={() => onContinue(false)} accessibilityLabel="Add selected insurance plan" />
            <View style={{ height: spacing.sm }} />
            <Button label="Skip" variant="ghost" onPress={() => onContinue(true)} accessibilityLabel="Skip insurance" />
          </View>
        }
      />
    </Screen>
  );
};

const styles = StyleSheet.create({
  row: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  badge: { backgroundColor: colors.accent, paddingHorizontal: spacing.xs, paddingVertical: 2, borderRadius: radius.pill },
  badgeText: { color: colors.textInverse, fontSize: 10, fontWeight: '700' },
});
