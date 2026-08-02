import React from 'react';
import { Text } from 'react-native';
import { Screen, Card } from '../../components';
import { spacing, typography } from '../../theme';

/** Content screen: CarDetails */
export const CarDetailsScreen: React.FC<{ navigation: any }> = ({ navigation }) => (
  <Screen>
    
    <Text style={typography.h1 as any} accessibilityRole="header">Car Details</Text>
    <Card style={{ marginTop: spacing.lg }}>
      <Text style={typography.body as any}>Full specifications, mileage policy, and included insurance for this rental vehicle.</Text>
    </Card>
    
  </Screen>
);
