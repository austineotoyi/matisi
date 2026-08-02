import React from 'react';
import { Text } from 'react-native';
import { Screen, Card } from '../../components';
import { spacing, typography } from '../../theme';

/** Content screen: CancelBooking */
export const CancelBookingScreen: React.FC<{ navigation: any }> = ({ navigation }) => (
  <Screen>
    
    <Text style={typography.h1 as any} accessibilityRole="header">Cancel Booking</Text>
    <Card style={{ marginTop: spacing.lg }}>
      <Text style={typography.body as any}>Review the cancellation policy before confirming — some fares are non-refundable.</Text>
    </Card>
    
  </Screen>
);
