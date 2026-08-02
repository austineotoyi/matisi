import React from 'react';
import { Text } from 'react-native';
import { Screen, Card } from '../../components';
import { spacing, typography } from '../../theme';

/** Content screen: InsuranceConfirmation */
export const InsuranceConfirmationScreen: React.FC<{ navigation: any }> = ({ navigation }) => (
  <Screen>
    <Text style={{ fontSize: 40, marginBottom: spacing.sm }}>🛡️</Text>
    <Text style={typography.h1 as any} accessibilityRole="header">Insurance Added</Text>
    <Card style={{ marginTop: spacing.lg }}>
      <Text style={typography.body as any}>Your policy documents have been emailed and saved under My Trips → Insurance.</Text>
    </Card>
    
  </Screen>
);
