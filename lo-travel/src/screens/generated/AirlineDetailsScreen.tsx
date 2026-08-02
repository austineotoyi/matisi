import React from 'react';
import { Text } from 'react-native';
import { Screen, Card } from '../../components';
import { spacing, typography } from '../../theme';

/** Content screen: AirlineDetails */
export const AirlineDetailsScreen: React.FC<{ navigation: any }> = ({ navigation }) => (
  <Screen>
    
    <Text style={typography.h1 as any} accessibilityRole="header">Airline Information</Text>
    <Card style={{ marginTop: spacing.lg }}>
      <Text style={typography.body as any}>Fleet, safety rating, and contact information for the operating airline on this flight.</Text>
    </Card>
    
  </Screen>
);
