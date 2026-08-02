import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';
import { Screen, Card, Button } from '../../components';
import { spacing, typography } from '../../theme';

/** Settings toggle screen: NotificationSettings */
export const NotificationSettingsScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [t0, setT0] = useState(true);
  const [t1, setT1] = useState(true);
  const [t2, setT2] = useState(true);
  const [t3, setT3] = useState(true);
  return (
    <Screen>
      <Text style={[typography.h1 as any, { marginBottom: spacing.md }]}>Notification Settings</Text>
      <Card>
        <View style={styles.row}>
          <Text style={typography.body as any}>Booking Updates</Text>
          <Switch value={t0} onValueChange={setT0} accessibilityLabel="Booking Updates toggle" />
        </View>
        <View style={styles.row}>
          <Text style={typography.body as any}>Promotional Offers</Text>
          <Switch value={t1} onValueChange={setT1} accessibilityLabel="Promotional Offers toggle" />
        </View>
        <View style={styles.row}>
          <Text style={typography.body as any}>Flight Status Alerts</Text>
          <Switch value={t2} onValueChange={setT2} accessibilityLabel="Flight Status Alerts toggle" />
        </View>
        <View style={styles.row}>
          <Text style={typography.body as any}>Price Drop Alerts</Text>
          <Switch value={t3} onValueChange={setT3} accessibilityLabel="Price Drop Alerts toggle" />
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
