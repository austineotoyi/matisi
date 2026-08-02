import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { Screen, Card } from '../../components';
import { spacing, typography } from '../../theme';

const DATA = [{"a":"WELCOME10","b":"10% off your first booking","c":"Expires 2026-12-31"},{"a":"LOYALTY5","b":"$5 off any booking over $200","c":"Expires 2026-09-30"}];

/** List screen: Coupons */
export const CouponsScreen: React.FC<{ navigation: any }> = () => (
  <Screen scroll={false}>
    <Text style={[typography.h1 as any, { marginBottom: spacing.md }]}>Coupons</Text>
    <FlatList
      data={DATA}
      keyExtractor={(_, i) => String(i)}
      renderItem={({ item }) => (
        <Card style={{ marginBottom: spacing.sm }}>
          <View style={styles.row}>
            <View style={{ flex: 1 }}>
              <Text style={typography.body as any}>{item.a}</Text>
              {item.b ? <Text style={typography.caption as any}>{item.b}</Text> : null}
            </View>
            {item.c ? <Text style={typography.price as any}>{item.c}</Text> : null}
          </View>
        </Card>
      )}
    />
  </Screen>
);

const styles = StyleSheet.create({
  row: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
});
