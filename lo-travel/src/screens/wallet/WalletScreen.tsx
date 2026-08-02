import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { Screen, Card, Button, Skeleton } from '../../components';
import { WalletService, WalletTransaction } from '../../services/WalletService';
import { colors, spacing, typography } from '../../theme';

export const WalletScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [balance, setBalance] = useState<number | null>(null);
  const [txns, setTxns] = useState<WalletTransaction[]>([]);

  const load = async () => {
    const [b, t] = await Promise.all([WalletService.getBalance(), WalletService.getTransactions()]);
    setBalance(b.data.balance);
    setTxns(t.data);
  };

  useEffect(() => { load(); }, []);

  if (balance === null) return <Screen><Skeleton height={300} /></Screen>;

  return (
    <Screen scroll={false}>
      <Text style={[typography.h1 as any, { marginBottom: spacing.md }]}>Wallet</Text>
      <Card style={styles.balanceCard}>
        <Text style={{ color: colors.textInverse, opacity: 0.8 }}>Available Balance</Text>
        <Text style={[typography.h1 as any, { color: colors.textInverse }]}>${balance.toFixed(2)}</Text>
        <View style={{ flexDirection: 'row', gap: spacing.sm, marginTop: spacing.md }}>
          <View style={{ flex: 1 }}>
            <Button label="Add Funds" variant="secondary" onPress={async () => { await WalletService.topUp(50); load(); }} accessibilityLabel="Add funds to wallet" />
          </View>
          <View style={{ flex: 1 }}>
            <Button label="Withdraw" variant="secondary" onPress={async () => { await WalletService.withdraw(20); load(); }} accessibilityLabel="Withdraw from wallet" />
          </View>
        </View>
      </Card>

      <Text style={[typography.h3 as any, { marginTop: spacing.lg, marginBottom: spacing.sm }]}>Transactions</Text>
      <FlatList
        data={txns}
        keyExtractor={(t) => t.id}
        renderItem={({ item }) => (
          <View style={styles.txnRow}>
            <View>
              <Text style={typography.body as any}>{item.description}</Text>
              <Text style={typography.caption as any}>{new Date(item.createdAt).toLocaleDateString()}</Text>
            </View>
            <Text style={{ color: item.amount >= 0 ? colors.success : colors.error, fontWeight: '700' }}>
              {item.amount >= 0 ? '+' : ''}${item.amount.toFixed(2)}
            </Text>
          </View>
        )}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({
  balanceCard: { backgroundColor: colors.primary, borderWidth: 0 },
  txnRow: { flexDirection: 'row', justifyContent: 'space-between', paddingVertical: spacing.sm, borderBottomWidth: 1, borderBottomColor: colors.divider },
});
