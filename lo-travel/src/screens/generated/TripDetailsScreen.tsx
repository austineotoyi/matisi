import React from 'react';
import { Text } from 'react-native';
import { Screen, Card } from '../../components';
import { spacing, typography } from '../../theme';

/** Content screen: TripDetails */
export const TripDetailsScreen: React.FC<{ navigation: any }> = ({ navigation }) => (
  <Screen>
    
    <Text style={typography.h1 as any} accessibilityRole="header">Trip Details</Text>
    <Card style={{ marginTop: spacing.lg }}>
      <Text style={typography.body as any}>Full itinerary, documents, and support options for this trip.</Text>
    </Card>
    
  </Screen>
);
