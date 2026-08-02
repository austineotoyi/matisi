import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Pressable, StyleSheet } from 'react-native';
import { Screen, Input } from '../../components';
import { ReferenceDataService } from '../../services';
import { colors, spacing, typography, radius } from '../../theme';

export const AirportSelectScreen: React.FC<{ navigation: any; route: any }> = ({ navigation }) => {
  const [query, setQuery] = useState('');
  const [airports, setAirports] = useState<any[]>([]);

  useEffect(() => {
    ReferenceDataService.searchAirports(query).then((r) => setAirports(r.data));
  }, [query]);

  return (
    <Screen scroll={false}>
      <Text style={[typography.h2 as any, { marginBottom: spacing.sm }]}>Select Airport</Text>
      <Input label="Search city or airport code" value={query} onChangeText={setQuery} autoFocus />
      <FlatList
        data={airports}
        keyExtractor={(i) => i.code}
        renderItem={({ item }) => (
          <Pressable style={styles.row} onPress={() => navigation.goBack()} accessibilityRole="button" accessibilityLabel={`Select ${item.city}, ${item.code}`}>
            <View>
              <Text style={typography.body as any}>{item.city} ({item.code})</Text>
              <Text style={typography.caption as any}>{item.name}</Text>
            </View>
          </Pressable>
        )}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({
  row: { paddingVertical: spacing.md, borderBottomWidth: 1, borderBottomColor: colors.divider },
});
