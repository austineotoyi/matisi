import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';
import { Screen, Card, Button } from '../../components';
import { spacing, typography } from '../../theme';

/** Settings toggle screen: Appearance */
export const AppearanceScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [t0, setT0] = useState(true);
  const [t1, setT1] = useState(true);
  return (
    <Screen>
      <Text style={[typography.h1 as any, { marginBottom: spacing.md }]}>Appearance</Text>
      <Card>
        <View style={styles.row}>
          <Text style={typography.body as any}>Use system theme</Text>
          <Switch value={t0} onValueChange={setT0} accessibilityLabel="Use system theme toggle" />
        </View>
        <View style={styles.row}>
          <Text style={typography.body as any}>Dark mode</Text>
          <Switch value={t1} onValueChange={setT1} accessibilityLabel="Dark mode toggle" />
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
