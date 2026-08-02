import React from 'react';
import { View, Text } from 'react-native';
import { Screen, Card, Button, BookingProgress } from '../../components';
import { useBookingDraftStore } from '../../store/bookingDraftStore';
import { spacing, typography, colors } from '../../theme';

const STEPS = ['Flight', 'Passenger', 'Contact', 'Seats', 'Extras', 'Insurance', 'Payment'];

export const BookingSummaryScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const draft = useBookingDraftStore();

  return (
    <Screen>
      <BookingProgress steps={STEPS} currentIndex={6} />
      <Text style={[typography.h1 as any, { marginBottom: spacing.md }]}>Booking Summary</Text>

      <Card style={{ marginBottom: spacing.sm }}>
        <Text style={typography.h3 as any}>Flight</Text>
        <Text style={typography.body as any}>{draft.origin} → {draft.destination}</Text>
        <Text style={typography.caption as any}>{draft.tripType} · {draft.cabinClass} · {draft.passengerCount} traveler(s)</Text>
      </Card>

      <Card style={{ marginBottom: spacing.sm }}>
        <Text style={typography.h3 as any}>Extras</Text>
        <Text style={typography.body as any}>Seat: {draft.selectedSeats.join(', ') || 'Not selected'}</Text>
        <Text style={typography.body as any}>Baggage: +{draft.extras.baggageKg}kg</Text>
        <Text style={typography.body as any}>Meal: {draft.extras.meal ?? 'Standard'}</Text>
      </Card>

      <Card style={{ marginBottom: spacing.lg }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={typography.h3 as any}>Total</Text>
          <Text style={typography.price as any}>${draft.totalPrice.toFixed(2)}</Text>
        </View>
      </Card>

      <Button label="Continue to Payment" onPress={() => navigation.navigate('PaymentMethod')} accessibilityLabel="Continue to payment method" />
    </Screen>
  );
};
