import React from 'react';
import { Text } from 'react-native';
import { Screen, Card } from '../../components';
import { spacing, typography } from '../../theme';

/** Content screen: TicketDetails */
export const TicketDetailsScreen: React.FC<{ navigation: any }> = ({ navigation }) => (
  <Screen>
    
    <Text style={typography.h1 as any} accessibilityRole="header">Ticket Details</Text>
    <Card style={{ marginTop: spacing.lg }}>
      <Text style={typography.body as any}>Full conversation history and status for this support ticket.</Text>
    </Card>
    
  </Screen>
);
