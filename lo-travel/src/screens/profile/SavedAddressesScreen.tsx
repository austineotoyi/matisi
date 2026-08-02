import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { Screen, Card, Button, StateScreen, Skeleton } from '../../components';
import { UserService } from '../../services';
import { spacing, typography, colors } from '../../theme';

interface SavedAddress { id: string; label: string; line1: string; city: string; country: string }

export const SavedAddressesScreen: React.FC<{ navigation: any }> = () => {
  const [addresses, setAddresses] = useState<SavedAddress[] | null>(null);

  useEffect(() => {
    UserService.getProfile().then((r) => setAddresses((r.data as any).savedAddresses ?? []));
  }, []);

  if (addresses === null) return <Screen><Skeleton height={200} /></Screen>;
  if (addresses.length === 0) {
    return <Screen scroll={false}><StateScreen emoji="📍" title="No Saved Addresses" message="Save a billing or delivery address to speed up checkout." /></Screen>;
  }

  return (
    <Screen scroll={false}>
      <Text style={[typography.h1 as any, { marginBottom: spacing.md }]}>Saved Addresses</Text>
      <FlatList
        data={addresses}
        keyExtractor={(a) => a.id}
        renderItem={({ item }) => (
          <Card style={{ marginBottom: spacing.sm }}>
            <Text style={typography.h3 as any}>{item.label}</Text>
            <Text style={typography.body as any}>{item.line1}</Text>
            <Text style={typography.caption as any}>{item.city}, {item.country}</Text>
          </Card>
        )}
        ListFooterComponent={<Button label="Add New Address" variant="secondary" onPress={() => {}} accessibilityLabel="Add new address" />}
      />
    </Screen>
  );
};
