import React from 'react';
import { Text } from 'react-native';
import { Screen, Card } from '../../components';
import { spacing, typography } from '../../theme';

/** Content screen: FareRules */
export const FareRulesScreen: React.FC<{ navigation: any }> = ({ navigation }) => (
  <Screen>
    
    <Text style={typography.h1 as any} accessibilityRole="header">Fare Rules</Text>
    <Card style={{ marginTop: spacing.lg }}>
      <Text style={typography.body as any}>This fare's change and cancellation conditions, exactly as issued by the airline for this booking class.</Text>
    </Card>
    
  </Screen>
);
