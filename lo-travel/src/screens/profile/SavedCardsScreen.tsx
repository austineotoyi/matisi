import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { Screen, Card, Button, StateScreen, Skeleton } from '../../components';
import { UserService } from '../../services';
import { spacing, typography, colors, radius } from '../../theme';

interface SavedCard { id: string; brand: string; last4: string; expiry: string }

export const SavedCardsScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [cards, setCards] = useState<SavedCard[] | null>(null);

  useEffect(() => {
    UserService.getProfile().then((r) => setCards((r.data as any).savedCards ?? []));
  }, []);

  if (cards === null) return <Screen><Skeleton height={200} /></Screen>;
  if (cards.length === 0) {
    return <Screen scroll={false}><StateScreen emoji="💳" title="No Saved Cards" message="Add a card at checkout to save it here for next time." /></Screen>;
  }

  return (
    <Screen scroll={false}>
      <Text style={[typography.h1 as any, { marginBottom: spacing.md }]}>Saved Cards</Text>
      <FlatList
        data={cards}
        keyExtractor={(c) => c.id}
        renderItem={({ item }) => (
          <Card style={{ marginBottom: spacing.sm }}>
            <View style={styles.row}>
              <View>
                <Text style={typography.h3 as any}>{item.brand} •••• {item.last4}</Text>
                <Text style={typography.caption as any}>Expires {item.expiry}</Text>
              </View>
              <Button label="Remove" variant="ghost" size="sm" fullWidth={false} onPress={() => {}} accessibilityLabel={`Remove ${item.brand} card ending ${item.last4}`} />
            </View>
          </Card>
        )}
        ListFooterComponent={<Button label="Add New Card" variant="secondary" onPress={() => navigation.navigate('PaymentMethod')} accessibilityLabel="Add new card" />}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({ row: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' } });
