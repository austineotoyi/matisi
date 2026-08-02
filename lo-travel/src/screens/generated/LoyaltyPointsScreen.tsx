import React from 'react';
import { Text } from 'react-native';
import { Screen, Card } from '../../components';
import { spacing, typography } from '../../theme';

/** Content screen: LoyaltyPoints */
export const LoyaltyPointsScreen: React.FC<{ navigation: any }> = ({ navigation }) => (
  <Screen>
    
    <Text style={typography.h1 as any} accessibilityRole="header">Loyalty Points</Text>
    <Card style={{ marginTop: spacing.lg }}>
      <Text style={typography.body as any}>Earn points on every booking and redeem them for discounts on future trips.</Text>
    </Card>
    
  </Screen>
);
