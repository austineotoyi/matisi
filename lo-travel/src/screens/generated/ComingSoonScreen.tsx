import React from 'react';
import { Text } from 'react-native';
import { Screen, Card } from '../../components';
import { spacing, typography } from '../../theme';

/** Content screen: ComingSoon */
export const ComingSoonScreen: React.FC<{ navigation: any }> = ({ navigation }) => (
  <Screen>
    <Text style={{ fontSize: 40, marginBottom: spacing.sm }}>🚧</Text>
    <Text style={typography.h1 as any} accessibilityRole="header">Coming Soon</Text>
    <Card style={{ marginTop: spacing.lg }}>
      <Text style={typography.body as any}>This feature is on our roadmap and will be available in an upcoming release.</Text>
    </Card>
    
  </Screen>
);
