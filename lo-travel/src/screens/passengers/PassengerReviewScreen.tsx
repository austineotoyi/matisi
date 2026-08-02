import React from 'react';
import { Text, View } from 'react-native';
import { Screen, Card, Button, BookingProgress, StatusBadge } from '../../components';
import { useBookingDraftStore } from '../../store/bookingDraftStore';
import { spacing, typography, colors } from '../../theme';

const STEPS = ['Flight', 'Passenger', 'Contact', 'Seats', 'Extras', 'Insurance', 'Payment'];

export const PassengerReviewScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const passengers = useBookingDraftStore((s) => s.passengers);
  const p = passengers[0];

  return (
    <Screen>
      <BookingProgress steps={STEPS} currentIndex={2} />
      <Text style={[typography.h1 as any, { marginBottom: spacing.md }]}>Review Passenger Information</Text>

      <Card style={{ marginBottom: spacing.md }}>
        <Text style={typography.h3 as any}>Personal Information</Text>
        <Text style={typography.body as any}>{p ? `${p.firstName} ${p.lastName}` : 'Traveler'}</Text>
        <Text style={typography.caption as any}>{p?.dob} · {p?.nationality}</Text>
      </Card>

      <Card style={{ marginBottom: spacing.md }}>
        <Text style={typography.h3 as any}>Passport</Text>
        <Text style={typography.body as any}>{p?.passportNumber ? `•••• ${p.passportNumber.slice(-3)}` : '—'}</Text>
      </Card>

      <View style={{ flexDirection: 'row', gap: spacing.xs, marginBottom: spacing.lg, flexWrap: 'wrap' }}>
        <StatusBadge status="confirmed" />
        <Text style={{ color: colors.success, alignSelf: 'center' }}>Identity Verified</Text>
      </View>

      <Button label="Continue to Seat Selection" onPress={() => navigation.navigate('SeatSelection')} accessibilityLabel="Continue to seat selection" />
    </Screen>
  );
};
