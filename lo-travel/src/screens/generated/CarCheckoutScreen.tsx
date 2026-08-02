import React from 'react';
import { Text } from 'react-native';
import { Screen, Card } from '../../components';
import { spacing, typography } from '../../theme';

/** Content screen: CarCheckout */
export const CarCheckoutScreen: React.FC<{ navigation: any }> = ({ navigation }) => (
  <Screen>
    
    <Text style={typography.h1 as any} accessibilityRole="header">Car Checkout</Text>
    <Card style={{ marginTop: spacing.lg }}>
      <Text style={typography.body as any}>Review pickup/drop-off location, dates, and driver details before confirming your rental.</Text>
    </Card>
    
  </Screen>
);
