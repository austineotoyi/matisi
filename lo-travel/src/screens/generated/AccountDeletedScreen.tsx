import React from 'react';
import { Text } from 'react-native';
import { Screen, Card } from '../../components';
import { spacing, typography } from '../../theme';

/** Content screen: AccountDeleted */
export const AccountDeletedScreen: React.FC<{ navigation: any }> = ({ navigation }) => (
  <Screen>
    <Text style={{ fontSize: 40, marginBottom: spacing.sm }}>👋</Text>
    <Text style={typography.h1 as any} accessibilityRole="header">Account Deleted</Text>
    <Card style={{ marginTop: spacing.lg }}>
      <Text style={typography.body as any}>Your account and personal data have been permanently removed, in line with our privacy policy.</Text>
    </Card>
    
  </Screen>
);
