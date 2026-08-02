import React from 'react';
import { Text } from 'react-native';
import { Screen, Card } from '../../components';
import { spacing, typography } from '../../theme';

/** Content screen: TourCheckout */
export const TourCheckoutScreen: React.FC<{ navigation: any }> = ({ navigation }) => (
  <Screen>
    
    <Text style={typography.h1 as any} accessibilityRole="header">Tour Checkout</Text>
    <Card style={{ marginTop: spacing.lg }}>
      <Text style={typography.body as any}>Review your selected time slot and participant count before confirming payment for this activity.</Text>
    </Card>
    
  </Screen>
);
