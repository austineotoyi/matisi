import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { colors, spacing, typography } from '../theme';

/** "Recommended Hotels" / "Things To Do" style header with optional "See all" action. */
export const SectionHeader: React.FC<{ title: string; onSeeAll?: () => void }> = ({ title, onSeeAll }) => (
  <View style={styles.row}>
    <Text style={typography.h3 as any}>{title}</Text>
    {onSeeAll ? (
      <Pressable onPress={onSeeAll}>
        <Text style={{ color: colors.accent, fontWeight: '600' }}>See all</Text>
      </Pressable>
    ) : null}
  </View>
);

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: spacing.lg,
    marginBottom: spacing.sm,
  },
});
