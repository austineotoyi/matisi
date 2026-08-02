import React from 'react';
import { Text } from 'react-native';
import { Screen, Card } from '../../components';
import { spacing, typography } from '../../theme';

/** Content screen: HotelCheckout */
export const HotelCheckoutScreen: React.FC<{ navigation: any }> = ({ navigation }) => (
  <Screen>
    
    <Text style={typography.h1 as any} accessibilityRole="header">Hotel Checkout</Text>
    <Card style={{ marginTop: spacing.lg }}>
      <Text style={typography.body as any}>Review your room, dates, and guest details before confirming payment for this stay.</Text>
    </Card>
    
  </Screen>
);
