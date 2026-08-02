import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Screen, Card, Button, Skeleton } from '../../components';
import { BookingService, TicketService } from '../../services';
import { colors, spacing, typography, radius } from '../../theme';

/** Simple visual QR-code stand-in built from a deterministic grid (no external QR lib dependency required). */
const QrPlaceholder: React.FC<{ payload: string }> = ({ payload }) => {
  const size = 10;
  const cells = Array.from({ length: size * size }, (_, i) => {
    const seed = payload.charCodeAt(i % payload.length) + i;
    return seed % 3 === 0;
  });
  return (
    <View style={styles.qrWrap} accessibilityLabel="Boarding pass QR code">
      {cells.map((filled, i) => (
        <View key={i} style={[styles.qrCell, filled && styles.qrCellFilled]} />
      ))}
    </View>
  );
};

export const ETicketScreen: React.FC<{ navigation: any; route: any }> = ({ route }) => {
  const { bookingId } = route.params ?? {};
  const [pass, setPass] = useState<any>(null);

  useEffect(() => {
    (async () => {
      const bookingRes = await BookingService.getBookingById(bookingId);
      const passRes = await TicketService.generateBoardingPass(bookingRes.data, 'Amara Otieno');
      setPass(passRes.data);
    })();
  }, [bookingId]);

  if (!pass) return <Screen><Skeleton height={320} /></Screen>;

  return (
    <Screen>
      <Text style={[typography.h1 as any, { marginBottom: spacing.md }]}>Your E-Ticket</Text>
      <Card style={{ marginBottom: spacing.md }}>
        <Text style={typography.caption as any}>Passenger</Text>
        <Text style={typography.h3 as any}>{pass.passengerName}</Text>
        <View style={styles.row}>
          <View>
            <Text style={typography.caption as any}>PNR</Text>
            <Text style={typography.body as any}>{pass.pnr}</Text>
          </View>
          <View>
            <Text style={typography.caption as any}>Flight</Text>
            <Text style={typography.body as any}>{pass.flightNumber}</Text>
          </View>
          <View>
            <Text style={typography.caption as any}>Seat</Text>
            <Text style={typography.body as any}>{pass.seat}</Text>
          </View>
        </View>
        <View style={styles.row}>
          <View>
            <Text style={typography.caption as any}>Gate</Text>
            <Text style={typography.body as any}>{pass.gate}</Text>
          </View>
          <View>
            <Text style={typography.caption as any}>Boarding</Text>
            <Text style={typography.body as any}>{new Date(pass.boardingTime).toLocaleTimeString()}</Text>
          </View>
        </View>
      </Card>

      <View style={{ alignItems: 'center', marginBottom: spacing.lg }}>
        <QrPlaceholder payload={pass.qrPayload} />
        <Text style={[typography.caption as any, { marginTop: spacing.xs }]}>{pass.barcodeIata}</Text>
      </View>

      <Button label="Download PDF" onPress={() => {}} accessibilityLabel="Download boarding pass as PDF" />
      <View style={{ height: spacing.sm }} />
      <Button label="Share Ticket" variant="secondary" onPress={() => {}} accessibilityLabel="Share ticket" />
    </Screen>
  );
};

export const ReceiptScreen: React.FC<{ navigation: any; route: any }> = ({ route }) => {
  const { bookingId } = route.params ?? {};
  const [receipt, setReceipt] = useState<any>(null);

  useEffect(() => {
    (async () => {
      const bookingRes = await BookingService.getBookingById(bookingId);
      const receiptRes = await TicketService.generateReceipt(bookingRes.data);
      setReceipt(receiptRes.data);
    })();
  }, [bookingId]);

  if (!receipt) return <Screen><Skeleton height={200} /></Screen>;

  return (
    <Screen>
      <Text style={[typography.h1 as any, { marginBottom: spacing.md }]}>Receipt</Text>
      <Card>
        <Text style={typography.caption as any}>Receipt #{receipt.receiptId}</Text>
        {receipt.items.map((it: any, idx: number) => (
          <View key={idx} style={styles.row}>
            <Text style={typography.body as any}>{it.label}</Text>
            <Text style={typography.body as any}>${it.amount.toFixed(2)}</Text>
          </View>
        ))}
        <View style={[styles.row, { marginTop: spacing.sm, borderTopWidth: 1, borderTopColor: colors.divider, paddingTop: spacing.sm }]}>
          <Text style={typography.h3 as any}>Total</Text>
          <Text style={typography.price as any}>${receipt.total.toFixed(2)} {receipt.currency}</Text>
        </View>
      </Card>
      <View style={{ height: spacing.md }} />
      <Button label="Download Receipt" onPress={() => {}} accessibilityLabel="Download receipt" />
    </Screen>
  );
};

const styles = StyleSheet.create({
  row: { flexDirection: 'row', justifyContent: 'space-between', marginTop: spacing.xs },
  qrWrap: { width: 140, height: 140, flexDirection: 'row', flexWrap: 'wrap', backgroundColor: colors.background, borderWidth: 1, borderColor: colors.border, borderRadius: radius.md, padding: 6 },
  qrCell: { width: '10%', height: '10%' },
  qrCellFilled: { backgroundColor: colors.primary },
});
