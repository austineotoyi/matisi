import React from 'react';
import { Text } from 'react-native';
import { Screen, Card } from '../../components';
import { spacing, typography } from '../../theme';

/** Content screen: PasswordChanged */
export const PasswordChangedScreen: React.FC<{ navigation: any }> = ({ navigation }) => (
  <Screen>
    <Text style={{ fontSize: 40, marginBottom: spacing.sm }}>🔒</Text>
    <Text style={typography.h1 as any} accessibilityRole="header">Password Changed</Text>
    <Card style={{ marginTop: spacing.lg }}>
      <Text style={typography.body as any}>You can now log in with your new password.</Text>
    </Card>
    
  </Screen>
);
