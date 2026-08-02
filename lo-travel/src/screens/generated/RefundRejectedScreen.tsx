import React from 'react';
import { Text } from 'react-native';
import { Screen, Card } from '../../components';
import { spacing, typography } from '../../theme';

/** Content screen: RefundRejected */
export const RefundRejectedScreen: React.FC<{ navigation: any }> = ({ navigation }) => (
  <Screen>
    <Text style={{ fontSize: 40, marginBottom: spacing.sm }}>❌</Text>
    <Text style={typography.h1 as any} accessibilityRole="header">Refund Rejected</Text>
    <Card style={{ marginTop: spacing.lg }}>
      <Text style={typography.body as any}>This booking's fare rules don't permit a refund. You can contact support if you believe this is incorrect.</Text>
    </Card>
    
  </Screen>
);
