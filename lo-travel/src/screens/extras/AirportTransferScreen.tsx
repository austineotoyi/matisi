import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { Screen, Card, Button, Skeleton } from '../../components';
import { TransferService } from '../../services';
import { colors, spacing, typography } from '../../theme';

export const AirportTransferScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [transfers, setTransfers] = useState<any[]>([]);
  const [selected, setSelected] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => { TransferService.search().then((r) => { setTransfers(r.data); setLoading(false); }); }, []);

  if (loading) return <Screen><Skeleton height={280} /></Screen>;

  return (
    <Screen scroll={false}>
      <Text style={[typography.h1 as any, { marginBottom: spacing.md }]}>Book Airport Transfer</Text>
      <FlatList
        data={transfers}
        keyExtractor={(i) => i.transferId}
        contentContainerStyle={{ paddingBottom: spacing.xl }}
        renderItem={({ item }) => (
          <Card selected={selected === item.transferId} onPress={() => setSelected(item.transferId)} style={{ marginBottom: spacing.sm }}>
            <View style={styles.row}>
              <View>
                <Text style={typography.h3 as any}>{item.type}</Text>
                <Text style={typography.caption as any}>{item.capacity} passengers · {item.bags} bags · ETA {item.pickupEta}</Text>
              </View>
              <Text style={typography.price as any}>${item.price}</Text>
            </View>
          </Card>
        )}
        ListFooterComponent={<Button label="Reserve Transfer" onPress={() => navigation.navigate('RecommendedHotels')} accessibilityLabel="Reserve transfer and continue" />}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({ row: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' } });
