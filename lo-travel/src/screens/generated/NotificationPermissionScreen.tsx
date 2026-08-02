import React from 'react';
import { Text, View } from 'react-native';
import { Screen, Card, Button } from '../../components';
import { spacing, typography } from '../../theme';

/** Content screen: NotificationPermission */
export const NotificationPermissionScreen: React.FC<{ navigation: any }> = ({ navigation }) => (
  <Screen>
    <Text style={{ fontSize: 40, marginBottom: spacing.sm }}>🔔</Text>
    <Text style={typography.h1 as any} accessibilityRole="header">Notification Permission Required</Text>
    <Card style={{ marginTop: spacing.lg }}>
      <Text style={typography.body as any}>More detail on notification permission required lives here.</Text>
    </Card>
    <View style={{ height: spacing.md }} />
    <Button label="Enable" onPress={() => navigation.goBack()} accessibilityLabel="Enable" />
  </Screen>
);
