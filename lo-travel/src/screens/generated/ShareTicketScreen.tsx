import React from 'react';
import { Text } from 'react-native';
import { Screen, Card } from '../../components';
import { spacing, typography } from '../../theme';

/** Content screen: ShareTicket */
export const ShareTicketScreen: React.FC<{ navigation: any }> = ({ navigation }) => (
  <Screen>
    
    <Text style={typography.h1 as any} accessibilityRole="header">Share Ticket</Text>
    <Card style={{ marginTop: spacing.lg }}>
      <Text style={typography.body as any}>Share your e-ticket via message, email, or any installed app.</Text>
    </Card>
    
  </Screen>
);
