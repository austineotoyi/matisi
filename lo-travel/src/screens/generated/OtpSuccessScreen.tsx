import React from 'react';
import { Text } from 'react-native';
import { Screen, Card } from '../../components';
import { spacing, typography } from '../../theme';

/** Content screen: OtpSuccess */
export const OtpSuccessScreen: React.FC<{ navigation: any }> = ({ navigation }) => (
  <Screen>
    <Text style={{ fontSize: 40, marginBottom: spacing.sm }}>✅</Text>
    <Text style={typography.h1 as any} accessibilityRole="header">Verified!</Text>
    <Card style={{ marginTop: spacing.lg }}>
      <Text style={typography.body as any}>More detail on verified! lives here.</Text>
    </Card>
    
  </Screen>
);
