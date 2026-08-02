import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { Screen, Card } from '../../components';
import { spacing, typography } from '../../theme';

const DATA = [{"a":"How do I cancel a booking?","b":"Tap Cancel Ticket from My Trips before the cancellation window closes.","c":""},{"a":"How do refunds work?","b":"Refunds are processed to your original payment method within 5–10 business days.","c":""},{"a":"Can I change my flight date?","b":"Yes, subject to the fare rules of your ticket.","c":""}];

/** List screen: FAQs */
export const FAQsScreen: React.FC<{ navigation: any }> = () => (
  <Screen scroll={false}>
    <Text style={[typography.h1 as any, { marginBottom: spacing.md }]}>FAQs</Text>
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
