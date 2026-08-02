import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Screen, Card, Button, BookingProgress } from '../../components';
import { PaymentService, PaymentMethod } from '../../services/PaymentService';
import { BookingService } from '../../services/BookingService';
import { useBookingDraftStore } from '../../store/bookingDraftStore';
import { colors, spacing, typography } from '../../theme';

const STEPS = ['Flight', 'Passenger', 'Contact', 'Seats', 'Extras', 'Insurance', 'Payment'];
const METHODS: { id: PaymentMethod; label: string; emoji: string }[] = [
  { id: 'card', label: 'Credit / Debit Card', emoji: '💳' },
  { id: 'mobileMoney', label: 'Mobile Money', emoji: '📱' },
  { id: 'bankTransfer', label: 'Bank Transfer', emoji: '🏦' },
  { id: 'wallet', label: 'LO Wallet', emoji: '👛' },
  { id: 'paypal', label: 'PayPal', emoji: '🅿️' },
];

export const PaymentMethodScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const draft = useBookingDraftStore();
  const [method, setMethod] = useState<PaymentMethod>('card');

  const onPay = () => {
    navigation.navigate('ProcessingPayment', { method });
  };

  return (
    <Screen>
      <BookingProgress steps={STEPS} currentIndex={6} />
      <Text style={[typography.h1 as any, { marginBottom: spacing.md }]}>Choose Payment Method</Text>
      {METHODS.map((m) => (
        <Card key={m.id} selected={method === m.id} onPress={() => setMethod(m.id)} style={{ marginBottom: spacing.sm }}>
          <View style={styles.row}>
            <Text style={{ fontSize: 20, marginRight: spacing.sm }}>{m.emoji}</Text>
            <Text style={typography.body as any}>{m.label}</Text>
          </View>
        </Card>
      ))}
      <Text style={[typography.price as any, { marginBottom: spacing.md }]}>Total: ${draft.totalPrice.toFixed(2)}</Text>
      <Button label="Pay Now" onPress={onPay} accessibilityLabel="Pay now" />
    </Screen>
  );
};

const styles = StyleSheet.create({ row: { flexDirection: 'row', alignItems: 'center' } });
