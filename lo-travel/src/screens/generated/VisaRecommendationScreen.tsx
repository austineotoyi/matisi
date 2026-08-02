import React from 'react';
import { Text } from 'react-native';
import { Screen, Card } from '../../components';
import { spacing, typography } from '../../theme';

/** Content screen: VisaRecommendation */
export const VisaRecommendationScreen: React.FC<{ navigation: any }> = ({ navigation }) => (
  <Screen>
    
    <Text style={typography.h1 as any} accessibilityRole="header">Visa Services</Text>
    <Card style={{ marginTop: spacing.lg }}>
      <Text style={typography.body as any}>Based on your destination, a visa may be required. We can guide you through the requirements and application.</Text>
    </Card>
    
  </Screen>
);
