import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TextInputProps } from 'react-native';
import { colors, radius, spacing, typography } from '../theme';

interface InputProps extends TextInputProps {
  label: string;
  error?: string;
  success?: boolean;
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
}

/** Shared text input: floating label, inline validation, leading/trailing icon slots.
 * Accessibility: defaults accessibilityLabel to the visible `label` text when the
 * caller doesn't pass one explicitly, so every field is screen-reader labeled. */
export const Input: React.FC<InputProps> = ({
  label,
  error,
  success,
  leadingIcon,
  trailingIcon,
  style,
  onFocus,
  onBlur,
  accessibilityLabel,
  ...rest
}) => {
  const [focused, setFocused] = useState(false);

  const borderColor = error ? colors.error : success ? colors.success : focused ? colors.accent : colors.border;

  return (
    <View style={styles.wrapper}>
      <Text style={styles.label}>{label}</Text>
      <View style={[styles.inputRow, { borderColor }]}>
        {leadingIcon}
        <TextInput
          style={[styles.input, typography.body as any, leadingIcon ? { marginLeft: spacing.xs } : null, style]}
          placeholderTextColor={colors.textDisabled}
          accessibilityLabel={accessibilityLabel ?? label}
          accessibilityState={{ disabled: !!rest.editable === false }}
          onFocus={(e) => {
            setFocused(true);
            onFocus?.(e);
          }}
          onBlur={(e) => {
            setFocused(false);
            onBlur?.(e);
          }}
          {...rest}
        />
        {trailingIcon}
      </View>
      {error ? <Text style={styles.errorText} accessibilityLiveRegion="polite">{error}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: { marginBottom: spacing.md },
  label: { ...(typography.caption as any), color: colors.textSecondary, marginBottom: spacing.xxs },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1.5,
    borderRadius: radius.md,
    paddingHorizontal: spacing.sm,
    height: 52,
    backgroundColor: colors.background,
  },
  input: { flex: 1, color: colors.textBody },
  errorText: { color: colors.error, fontSize: 12, marginTop: spacing.xxs },
});
