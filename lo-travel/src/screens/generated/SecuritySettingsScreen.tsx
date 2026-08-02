import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';
import { Screen, Card, Button } from '../../components';
import { spacing, typography } from '../../theme';

/** Settings toggle screen: SecuritySettings */
export const SecuritySettingsScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [t0, setT0] = useState(true);
  const [t1, setT1] = useState(true);
  const [t2, setT2] = useState(true);
  return (
    <Screen>
      <Text style={[typography.h1 as any, { marginBottom: spacing.md }]}>Security Settings</Text>
      <Card>
        <View style={styles.row}>
          <Text style={typography.body as any}>Require biometric for payments</Text>
          <Switch value={t0} onValueChange={setT0} accessibilityLabel="Require biometric for payments toggle" />
        </View>
        <View style={styles.row}>
          <Text style={typography.body as any}>Email me on new device login</Text>
          <Switch value={t1} onValueChange={setT1} accessibilityLabel="Email me on new device login toggle" />
        </View>
        <View style={styles.row}>
          <Text style={typography.body as any}>Two-factor authentication</Text>
          <Switch value={t2} onValueChange={setT2} accessibilityLabel="Two-factor authentication toggle" />
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
