import React from 'react';
import { Text } from 'react-native';
import { Screen, Card } from '../../components';
import { spacing, typography } from '../../theme';

/** Content screen: TourBookingSuccess */
export const TourBookingSuccessScreen: React.FC<{ navigation: any }> = ({ navigation }) => (
  <Screen>
    <Text style={{ fontSize: 40, marginBottom: spacing.sm }}>🌍</Text>
    <Text style={typography.h1 as any} accessibilityRole="header">Tour Booked!</Text>
    <Card style={{ marginTop: spacing.lg }}>
      <Text style={typography.body as any}>More detail on tour booked! lives here.</Text>
    </Card>
    
  </Screen>
);
