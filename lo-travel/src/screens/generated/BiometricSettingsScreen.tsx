import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';
import { Screen, Card, Button } from '../../components';
import { spacing, typography } from '../../theme';

/** Settings toggle screen: BiometricSettings */
export const BiometricSettingsScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [t0, setT0] = useState(true);
  return (
    <Screen>
      <Text style={[typography.h1 as any, { marginBottom: spacing.md }]}>Biometric Settings</Text>
      <Card>
        <View style={styles.row}>
          <Text style={typography.body as any}>Enable Face ID / Fingerprint Login</Text>
          <Switch value={t0} onValueChange={setT0} accessibilityLabel="Enable Face ID / Fingerprint Login toggle" />
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
