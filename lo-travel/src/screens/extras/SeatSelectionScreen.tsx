import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, Pressable, StyleSheet } from 'react-native';
import { Screen, Button, BookingProgress, Skeleton } from '../../components';
import { FlightService } from '../../services';
import { useBookingDraftStore } from '../../store/bookingDraftStore';
import { colors, spacing, typography, radius } from '../../theme';

const STEPS = ['Flight', 'Passenger', 'Contact', 'Seats', 'Extras', 'Insurance', 'Payment'];

export const SeatSelectionScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const draft = useBookingDraftStore();
  const [rows, setRows] = useState<any[]>([]);
  const [selected, setSelected] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    FlightService.getSeatMap(draft.selectedFlightId ?? '').then((r) => { setRows(r.data.rows); setLoading(false); });
  }, []);

  const seatColor = (seat: any) => {
    if (seat.status === 'occupied') return colors.seatOccupied;
    if (selected === seat.seatNumber) return colors.seatSelected;
    if (seat.premium) return colors.seatPremium;
    if (seat.exitRow) return colors.seatExitRow;
    return colors.seatAvailable;
  };

  const onContinue = () => {
    if (selected) draft.setSeats([selected]);
    navigation.navigate('ExtraBaggage');
  };

  if (loading) return <Screen><Skeleton height={300} /></Screen>;

  return (
    <Screen>
      <BookingProgress steps={STEPS} currentIndex={3} />
      <Text style={[typography.h1 as any, { marginBottom: spacing.sm }]}>Choose Your Seats</Text>

      <View style={styles.legendRow}>
        <LegendDot color={colors.seatAvailable} label="Available" />
        <LegendDot color={colors.seatSelected} label="Selected" />
        <LegendDot color={colors.seatPremium} label="Premium" />
        <LegendDot color={colors.seatOccupied} label="Occupied" />
        <LegendDot color={colors.seatExitRow} label="Exit Row" />
      </View>

      <ScrollView style={{ maxHeight: 380, marginBottom: spacing.md }} accessibilityLabel="Aircraft seat map">
        {rows.map((row: any) => (
          <View key={row.row} style={styles.seatRow}>
            <Text style={styles.rowLabel}>{row.row}</Text>
            {row.seats.map((seat: any) => (
              <Pressable
                key={seat.seatNumber}
                disabled={seat.status === 'occupied'}
                onPress={() => setSelected(seat.seatNumber)}
                accessibilityLabel={`Seat ${seat.seatNumber}, ${seat.status}${seat.premium ? ', premium' : ''}`}
                style={[styles.seat, { backgroundColor: seatColor(seat), borderColor: seat.status === 'occupied' ? colors.seatOccupied : colors.border }]}
              >
                <Text style={{ fontSize: 10, color: selected === seat.seatNumber || seat.premium ? colors.textInverse : colors.textBody }}>
                  {seat.seatNumber.slice(-1)}
                </Text>
              </Pressable>
            ))}
          </View>
        ))}
      </ScrollView>

      {selected && (
        <Text style={[typography.body as any, { marginBottom: spacing.sm }]}>
          Seat {selected} selected {rows.flatMap((r: any) => r.seats).find((s: any) => s.seatNumber === selected)?.price > 0 ? `(+$${rows.flatMap((r: any) => r.seats).find((s: any) => s.seatNumber === selected)?.price})` : '(Included)'}
        </Text>
      )}

      <Button label="Confirm Seats" onPress={onContinue} accessibilityLabel="Confirm seat selection" />
    </Screen>
  );
};

const LegendDot: React.FC<{ color: string; label: string }> = ({ color, label }) => (
  <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: spacing.sm, marginBottom: spacing.xs }}>
    <View style={{ width: 12, height: 12, borderRadius: 3, backgroundColor: color, borderWidth: 1, borderColor: colors.border, marginRight: 4 }} />
    <Text style={typography.caption as any}>{label}</Text>
  </View>
);

const styles = StyleSheet.create({
  legendRow: { flexDirection: 'row', flexWrap: 'wrap', marginBottom: spacing.sm },
  seatRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 6 },
  rowLabel: { width: 20, fontSize: 11, color: colors.textSecondary },
  seat: { width: 28, height: 28, borderRadius: 6, alignItems: 'center', justifyContent: 'center', marginRight: 4, borderWidth: 1 },
});
