import React from 'react';
import { Text } from 'react-native';
import { Screen, Card } from '../../components';
import { spacing, typography } from '../../theme';

/** Content screen: PriorityBoarding */
export const PriorityBoardingScreen: React.FC<{ navigation: any }> = ({ navigation }) => (
  <Screen>
    
    <Text style={typography.h1 as any} accessibilityRole="header">Priority Boarding</Text>
    <Card style={{ marginTop: spacing.lg }}>
      <Text style={typography.body as any}>Board ahead of general boarding and secure overhead bin space — available for $18 on this flight.</Text>
    </Card>
    
  </Screen>
);
