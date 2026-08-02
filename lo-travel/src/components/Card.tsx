import React from 'react';
import { View, StyleSheet, ViewStyle, Pressable } from 'react-native';
import { colors, radius, spacing, shadow } from '../theme';

interface CardProps {
  children: React.ReactNode;
  style?: ViewStyle;
  onPress?: () => void;
  selected?: boolean;
  padded?: boolean;
  testID?: string;
  accessibilityLabel?: string;
}

/** Shared 20px-radius card with soft shadow. Used for flight cards, hotel cards, list items, etc.
 * Accessibility: when `onPress` is provided, the card is exposed as a button with a
 * "selected" state so screen readers announce selectable cards (seat options, plans, etc). */
export const Card: React.FC<CardProps> = ({ children, style, onPress, selected, padded = true, testID, accessibilityLabel }) => {
  const content = (
    <View
      style={[
        styles.base,
        padded && { padding: spacing.md },
        selected && styles.selected,
        style,
      ]}
    >
      {children}
    </View>
  );

  if (onPress) {
    return (
      <Pressable
        testID={testID}
        onPress={onPress}
        accessibilityRole="button"
        accessibilityLabel={accessibilityLabel}
        accessibilityState={{ selected: !!selected }}
        style={({ pressed }) => ({ opacity: pressed ? 0.9 : 1 })}
      >
        {content}
      </Pressable>
    );
  }
  return content;
};

const styles = StyleSheet.create({
  base: {
    backgroundColor: colors.card,
    borderRadius: radius.xl,
    borderWidth: 1,
    borderColor: colors.border,
    ...shadow.card,
  },
  selected: {
    borderColor: colors.accent,
    borderWidth: 1.5,
  },
});
