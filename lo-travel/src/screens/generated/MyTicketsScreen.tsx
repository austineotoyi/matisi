import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { Screen, Card } from '../../components';
import { spacing, typography } from '../../theme';

const DATA = [{"a":"Refund not received","b":"Open","c":"High"},{"a":"Change passenger name","b":"Resolved","c":"Medium"}];

/** List screen: MyTickets */
export const MyTicketsScreen: React.FC<{ navigation: any }> = () => (
  <Screen scroll={false}>
    <Text style={[typography.h1 as any, { marginBottom: spacing.md }]}>My Support Tickets</Text>
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
