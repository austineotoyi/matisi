import React from 'react';
import { Text } from 'react-native';
import { Screen, Card } from '../../components';
import { spacing, typography } from '../../theme';

/** Content screen: GateInformation */
export const GateInformationScreen: React.FC<{ navigation: any }> = ({ navigation }) => (
  <Screen>
    
    <Text style={typography.h1 as any} accessibilityRole="header">Gate Information</Text>
    <Card style={{ marginTop: spacing.lg }}>
      <Text style={typography.body as any}>Gate assignments can change up to boarding time — we'll notify you the moment it updates.</Text>
    </Card>
    
  </Screen>
);
