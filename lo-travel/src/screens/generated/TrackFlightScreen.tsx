import React from 'react';
import { Text } from 'react-native';
import { Screen, Card } from '../../components';
import { spacing, typography } from '../../theme';

/** Content screen: TrackFlight */
export const TrackFlightScreen: React.FC<{ navigation: any }> = ({ navigation }) => (
  <Screen>
    
    <Text style={typography.h1 as any} accessibilityRole="header">Track Flight</Text>
    <Card style={{ marginTop: spacing.lg }}>
      <Text style={typography.body as any}>Enter a flight number or select an upcoming trip to see live status, gate changes, and delay alerts.</Text>
    </Card>
    
  </Screen>
);
