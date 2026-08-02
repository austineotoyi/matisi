import React from 'react';
import { Text } from 'react-native';
import { Screen, Card } from '../../components';
import { spacing, typography } from '../../theme';

/** Content screen: OfflineMode */
export const OfflineModeScreen: React.FC<{ navigation: any }> = ({ navigation }) => (
  <Screen>
    <Text style={{ fontSize: 40, marginBottom: spacing.sm }}>📴</Text>
    <Text style={typography.h1 as any} accessibilityRole="header">Some features are limited without a connection.</Text>
    <Card style={{ marginTop: spacing.lg }}>
      <Text style={typography.body as any}>Some features are limited without a connection.</Text>
    </Card>
    
  </Screen>
);
