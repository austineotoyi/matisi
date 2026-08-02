import React from 'react';
import { Text } from 'react-native';
import { Screen, Card } from '../../components';
import { spacing, typography } from '../../theme';

/** Content screen: LoungeAccess */
export const LoungeAccessScreen: React.FC<{ navigation: any }> = ({ navigation }) => (
  <Screen>
    
    <Text style={typography.h1 as any} accessibilityRole="header">Lounge Access</Text>
    <Card style={{ marginTop: spacing.lg }}>
      <Text style={typography.body as any}>Relax before your flight with lounge access including complimentary food, WiFi, and showers where available.</Text>
    </Card>
    
  </Screen>
);
