import React from 'react';
import { Text } from 'react-native';
import { Screen, Card } from '../../components';
import { spacing, typography } from '../../theme';

/** Content screen: About */
export const AboutScreen: React.FC<{ navigation: any }> = ({ navigation }) => (
  <Screen>
    
    <Text style={typography.h1 as any} accessibilityRole="header">About LO</Text>
    <Card style={{ marginTop: spacing.lg }}>
      <Text style={typography.body as any}>LO is a travel super app that brings flights, hotels, tours, car rentals, visas, and travel insurance into one place, backed by 24/7 support and a loyalty rewards program.</Text>
    </Card>
    
  </Screen>
);
