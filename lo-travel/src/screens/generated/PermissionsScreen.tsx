import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';
import { Screen, Card, Button } from '../../components';
import { spacing, typography } from '../../theme';

/** Settings toggle screen: Permissions */
export const PermissionsScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [t0, setT0] = useState(true);
  const [t1, setT1] = useState(true);
  const [t2, setT2] = useState(true);
  return (
    <Screen>
      <Text style={[typography.h1 as any, { marginBottom: spacing.md }]}>Permissions</Text>
      <Card>
        <View style={styles.row}>
          <Text style={typography.body as any}>Location Access</Text>
          <Switch value={t0} onValueChange={setT0} accessibilityLabel="Location Access toggle" />
        </View>
        <View style={styles.row}>
          <Text style={typography.body as any}>Notifications</Text>
          <Switch value={t1} onValueChange={setT1} accessibilityLabel="Notifications toggle" />
        </View>
        <View style={styles.row}>
          <Text style={typography.body as any}>Camera (for document scanning)</Text>
          <Switch value={t2} onValueChange={setT2} accessibilityLabel="Camera (for document scanning) toggle" />
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
