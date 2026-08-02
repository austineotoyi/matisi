import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';
import { Screen, Card, Button } from '../../components';
import { spacing, typography } from '../../theme';

/** Settings toggle screen: PrivacySettings */
export const PrivacySettingsScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [t0, setT0] = useState(true);
  const [t1, setT1] = useState(true);
  const [t2, setT2] = useState(true);
  return (
    <Screen>
      <Text style={[typography.h1 as any, { marginBottom: spacing.md }]}>Privacy Settings</Text>
      <Card>
        <View style={styles.row}>
          <Text style={typography.body as any}>Share data for personalized offers</Text>
          <Switch value={t0} onValueChange={setT0} accessibilityLabel="Share data for personalized offers toggle" />
        </View>
        <View style={styles.row}>
          <Text style={typography.body as any}>Allow analytics tracking</Text>
          <Switch value={t1} onValueChange={setT1} accessibilityLabel="Allow analytics tracking toggle" />
        </View>
        <View style={styles.row}>
          <Text style={typography.body as any}>Show profile to support agents</Text>
          <Switch value={t2} onValueChange={setT2} accessibilityLabel="Show profile to support agents toggle" />
        </View>
      </Card>
      <View style={{ height: spacing.md }} />
      <Button label="Save" onPress={() => navigation.goBack()} accessibilityLabel="Save settings" />
    </Screen>
  );
};

const styles = StyleSheet.create({
  row: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: spacing.sm },
});
