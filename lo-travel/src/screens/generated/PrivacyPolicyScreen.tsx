import React from 'react';
import { Text } from 'react-native';
import { Screen, Card } from '../../components';
import { spacing, typography } from '../../theme';

/** Content screen: PrivacyPolicy */
export const PrivacyPolicyScreen: React.FC<{ navigation: any }> = ({ navigation }) => (
  <Screen>
    
    <Text style={typography.h1 as any} accessibilityRole="header">Privacy Policy</Text>
    <Card style={{ marginTop: spacing.lg }}>
      <Text style={typography.body as any}>LO collects only the data needed to process bookings, verify identity, and improve recommendations. You can request export or deletion of your data at any time from Privacy Settings.</Text>
    </Card>
    
  </Screen>
);
