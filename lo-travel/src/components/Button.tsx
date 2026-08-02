import React from 'react';
import {
  Pressable,
  Text,
  StyleSheet,
  ActivityIndicator,
  View,
  GestureResponderEvent,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { colors, radius, spacing, typography } from '../theme';

export type ButtonVariant = 'primary' | 'secondary' | 'selected' | 'ghost';
export type ButtonSize = 'lg' | 'md' | 'sm';

interface ButtonProps {
  label: string;
  onPress: (e: GestureResponderEvent) => void;
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  loading?: boolean;
  fullWidth?: boolean;
  icon?: React.ReactNode;
  testID?: string;
  accessibilityLabel?: string;
}

/**
 * Shared Button. Handles the Deep Blue -> Vibrant Purple gradient primary CTA,
 * outlined secondary, filled "selected" state, and a text-only ghost variant.
 * All screens must use this instead of raw Pressable/TouchableOpacity.
 *
 * Accessibility: always exposes accessibilityRole="button" and falls back to
 * the visible `label` text as the accessibilityLabel when one isn't passed
 * explicitly, so every button in the app is screen-reader labeled by default.
 */
export const Button: React.FC<ButtonProps> = ({
  label,
  onPress,
  variant = 'primary',
  size = 'lg',
  disabled = false,
  loading = false,
  fullWidth = true,
  icon,
  testID,
  accessibilityLabel,
}) => {
  const height = size === 'lg' ? 56 : size === 'md' ? 48 : 40;
  const content = loading ? (
    <ActivityIndicator color={variant === 'secondary' || variant === 'ghost' ? colors.primary : colors.textInverse} />
  ) : (
    <View style={styles.row}>
      {icon}
      <Text
        style={[
          typography.button as any,
          variant === 'secondary' || variant === 'ghost'
            ? { color: colors.primary }
            : { color: colors.textInverse },
          icon ? { marginLeft: spacing.xs } : null,
        ]}
      >
        {label}
      </Text>
    </View>
  );

  if (variant === 'primary') {
    return (
      <Pressable
        testID={testID}
        onPress={onPress}
        disabled={disabled || loading}
        accessibilityRole="button"
        accessibilityLabel={accessibilityLabel ?? label}
        accessibilityState={{ disabled: disabled || loading, busy: loading }}
        style={({ pressed }) => [
          fullWidth && styles.fullWidth,
          { opacity: disabled ? 0.5 : pressed ? 0.85 : 1 },
        ]}
        android_ripple={{ color: 'rgba(255,255,255,0.2)', borderless: false }}
      >
        <LinearGradient
          colors={[colors.primary, colors.accent]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={[styles.base, { height, borderRadius: radius.lg }]}
        >
          {content}
        </LinearGradient>
      </Pressable>
    );
  }

  const variantStyle =
    variant === 'secondary'
      ? { backgroundColor: colors.background, borderWidth: 1.5, borderColor: colors.primary }
      : variant === 'selected'
      ? { backgroundColor: colors.accent }
      : { backgroundColor: 'transparent' };

  return (
    <Pressable
      testID={testID}
      onPress={onPress}
      disabled={disabled || loading}
      accessibilityRole="button"
      accessibilityLabel={accessibilityLabel ?? label}
      accessibilityState={{ disabled: disabled || loading, busy: loading }}
      style={({ pressed }) => [
        styles.base,
        variantStyle,
        { height, borderRadius: radius.lg },
        fullWidth && styles.fullWidth,
        { opacity: disabled ? 0.5 : pressed ? 0.7 : 1 },
      ]}
    >
      {content}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  base: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: spacing.lg,
  },
  fullWidth: { width: '100%' },
  row: { flexDirection: 'row', alignItems: 'center' },
});
