import React from 'react';
import { Text } from 'react-native';
import { Screen, Card } from '../../components';
import { spacing, typography } from '../../theme';

/** Content screen: Goodbye */
export const GoodbyeScreen: React.FC<{ navigation: any }> = ({ navigation }) => (
  <Screen>
    <Text style={{ fontSize: 40, marginBottom: spacing.sm }}>👋</Text>
    <Text style={typography.h1 as any} accessibilityRole="header">See You Soon</Text>
    <Card style={{ marginTop: spacing.lg }}>
      <Text style={typography.body as any}>Thanks for traveling with LO — we hope to see you again soon.</Text>
    </Card>
    
  </Screen>
);
