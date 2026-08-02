import React from 'react';
import { Text } from 'react-native';
import { Screen, Card } from '../../components';
import { spacing, typography } from '../../theme';

/** Content screen: MaintenanceNotice */
export const MaintenanceNoticeScreen: React.FC<{ navigation: any }> = ({ navigation }) => (
  <Screen>
    <Text style={{ fontSize: 40, marginBottom: spacing.sm }}>🛠️</Text>
    <Text style={typography.h1 as any} accessibilityRole="header">Scheduled Maintenance</Text>
    <Card style={{ marginTop: spacing.lg }}>
      <Text style={typography.body as any}>LO is undergoing scheduled maintenance to improve reliability. Most features remain available.</Text>
    </Card>
    
  </Screen>
);
