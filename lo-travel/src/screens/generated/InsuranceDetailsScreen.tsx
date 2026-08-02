import React from 'react';
import { Text } from 'react-native';
import { Screen, Card } from '../../components';
import { spacing, typography } from '../../theme';

/** Content screen: InsuranceDetails */
export const InsuranceDetailsScreen: React.FC<{ navigation: any }> = ({ navigation }) => (
  <Screen>
    
    <Text style={typography.h1 as any} accessibilityRole="header">Plan Details</Text>
    <Card style={{ marginTop: spacing.lg }}>
      <Text style={typography.body as any}>Full terms for this plan: what's covered, exclusions, the claims process, and how to reach the 24/7 emergency assistance line.</Text>
    </Card>
    
  </Screen>
);
