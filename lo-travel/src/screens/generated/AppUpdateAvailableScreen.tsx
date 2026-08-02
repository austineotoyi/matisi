import React from 'react';
import { Text, View } from 'react-native';
import { Screen, Card, Button } from '../../components';
import { spacing, typography } from '../../theme';

/** Content screen: AppUpdateAvailable */
export const AppUpdateAvailableScreen: React.FC<{ navigation: any }> = ({ navigation }) => (
  <Screen>
    <Text style={{ fontSize: 40, marginBottom: spacing.sm }}>⬆️</Text>
    <Text style={typography.h1 as any} accessibilityRole="header">App Update Available</Text>
    <Card style={{ marginTop: spacing.lg }}>
      <Text style={typography.body as any}>More detail on app update available lives here.</Text>
    </Card>
    <View style={{ height: spacing.md }} />
    <Button label="Update" onPress={() => navigation.goBack()} accessibilityLabel="Update" />
  </Screen>
);
