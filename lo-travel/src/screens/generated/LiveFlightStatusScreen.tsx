import React from 'react';
import { Text } from 'react-native';
import { Screen, Card } from '../../components';
import { spacing, typography } from '../../theme';

/** Content screen: LiveFlightStatus */
export const LiveFlightStatusScreen: React.FC<{ navigation: any }> = ({ navigation }) => (
  <Screen>
    
    <Text style={typography.h1 as any} accessibilityRole="header">Live Flight Status</Text>
    <Card style={{ marginTop: spacing.lg }}>
      <Text style={typography.body as any}>Live status is pulled from the airline in real time, including gate, estimated departure, and any delay codes.</Text>
    </Card>
    
  </Screen>
);
