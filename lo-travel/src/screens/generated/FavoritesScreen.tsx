import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { Screen, Card } from '../../components';
import { colors, spacing, typography } from '../../theme';

// NOTE: hand-maintained after generation — do not overwrite by re-running
// scripts/generate_dedicated_screens.js for this specific route. Favorites
// is now a hub linking to the three category screens (Saved Flights/Hotels/Tours)
// added to close the spec-vs-registry gap.
const CATEGORIES: { route: string; label: string; emoji: string }[] = [
  { route: 'SavedFlights', label: 'Saved Flights', emoji: '✈️' },
  { route: 'SavedHotels', label: 'Saved Hotels', emoji: '🏨' },
  { route: 'SavedTours', label: 'Saved Tours', emoji: '🌍' },
];

export const FavoritesScreen: React.FC<{ navigation: any }> = ({ navigation }) => (
  <Screen scroll={false}>
    <Text style={[typography.h1 as any, { marginBottom: spacing.md }]}>Wishlist</Text>
    {CATEGORIES.map((c) => (
      <Pressable
        key={c.route}
        onPress={() => navigation.navigate(c.route)}
        accessibilityRole="button"
        accessibilityLabel={c.label}
      >
        <Card style={{ marginBottom: spacing.sm }}>
          <View style={styles.row}>
            <Text style={{ fontSize: 20, marginRight: spacing.sm }}>{c.emoji}</Text>
            <Text style={[typography.body as any, { flex: 1 }]}>{c.label}</Text>
            <Text style={{ color: colors.textSecondary }}>›</Text>
          </View>
        </Card>
      </Pressable>
    ))}
  </Screen>
);

const styles = StyleSheet.create({
  row: { flexDirection: 'row', alignItems: 'center' },
});
