import React from 'react';
import { Text } from 'react-native';
import { Screen, Card } from '../../components';
import { spacing, typography } from '../../theme';

/** Content screen: TermsAndConditions */
export const TermsAndConditionsScreen: React.FC<{ navigation: any }> = ({ navigation }) => (
  <Screen>
    
    <Text style={typography.h1 as any} accessibilityRole="header">Terms & Conditions</Text>
    <Card style={{ marginTop: spacing.lg }}>
      <Text style={typography.body as any}>By using LO, you agree to our booking terms, fare rules set by each supplier, and our cancellation and refund policies. Full legal text will be provided by Legal prior to launch.</Text>
    </Card>
    
  </Screen>
);
