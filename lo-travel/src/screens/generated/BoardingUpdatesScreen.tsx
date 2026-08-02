import React from 'react';
import { Text } from 'react-native';
import { Screen, Card } from '../../components';
import { spacing, typography } from '../../theme';

/** Content screen: BoardingUpdates */
export const BoardingUpdatesScreen: React.FC<{ navigation: any }> = ({ navigation }) => (
  <Screen>
    
    <Text style={typography.h1 as any} accessibilityRole="header">Boarding Updates</Text>
    <Card style={{ marginTop: spacing.lg }}>
      <Text style={typography.body as any}>Boarding typically begins 45 minutes before departure. We'll send a push notification the moment your group is called.</Text>
    </Card>
    
  </Screen>
);
