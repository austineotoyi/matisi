import React from 'react';
import { Text } from 'react-native';
import { Screen, Card } from '../../components';
import { spacing, typography } from '../../theme';

/** Content screen: BaggageDetails */
export const BaggageDetailsScreen: React.FC<{ navigation: any }> = ({ navigation }) => (
  <Screen>
    
    <Text style={typography.h1 as any} accessibilityRole="header">Baggage Details</Text>
    <Card style={{ marginTop: spacing.lg }}>
      <Text style={typography.body as any}>Checked and cabin baggage allowances for every passenger on this itinerary, including excess baggage rates.</Text>
    </Card>
    
  </Screen>
);
