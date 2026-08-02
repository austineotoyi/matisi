import React from 'react';
import { View, Text, FlatList, Pressable, StyleSheet } from 'react-native';
import { Screen } from '../../components';
import { colors, spacing, typography, radius } from '../../theme';
import { useAppStore } from '../../store/appStore';

const LANGUAGES = [
  { code: 'en', label: 'English' },
  { code: 'sw', label: 'Kiswahili' },
  { code: 'fr', label: 'Français' },
  { code: 'ar', label: 'العربية' },
];
const CURRENCIES = [
  { code: 'USD', label: 'US Dollar ($)' },
  { code: 'EUR', label: 'Euro (€)' },
  { code: 'GBP', label: 'British Pound (£)' },
  { code: 'KES', label: 'Kenyan Shilling (KSh)' },
];

export const ChooseLanguageScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const setLanguage = useAppStore((s) => s.setLanguage);
  const language = useAppStore((s) => s.language);
  return (
    <Screen scroll={false}>
      <Text style={[typography.h2 as any, { marginBottom: spacing.md }]}>Choose Language</Text>
      <FlatList
        data={LANGUAGES}
        keyExtractor={(i) => i.code}
        renderItem={({ item }) => (
          <Pressable
            style={[styles.row, item.code === language && styles.rowActive]}
            onPress={() => { setLanguage(item.code); navigation.goBack(); }}
            accessibilityRole="button"
            accessibilityLabel={`${item.label}${item.code === language ? ', selected' : ''}`}
          >
            <Text style={typography.body as any}>{item.label}</Text>
            {item.code === language && <Text style={{ color: colors.accent }}>✓</Text>}
          </Pressable>
        )}
      />
    </Screen>
  );
};

export const ChooseCurrencyScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const setCurrency = useAppStore((s) => s.setCurrency);
  const currency = useAppStore((s) => s.currency);
  return (
    <Screen scroll={false}>
      <Text style={[typography.h2 as any, { marginBottom: spacing.md }]}>Choose Currency</Text>
      <FlatList
        data={CURRENCIES}
        keyExtractor={(i) => i.code}
        renderItem={({ item }) => (
          <Pressable
            style={[styles.row, item.code === currency && styles.rowActive]}
            onPress={() => { setCurrency(item.code); navigation.goBack(); }}
            accessibilityRole="button"
            accessibilityLabel={`${item.label}${item.code === currency ? ', selected' : ''}`}
          >
            <Text style={typography.body as any}>{item.label}</Text>
            {item.code === currency && <Text style={{ color: colors.accent }}>✓</Text>}
          </Pressable>
        )}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',
    paddingVertical: spacing.md, paddingHorizontal: spacing.md,
    borderRadius: radius.md, marginBottom: spacing.xs, backgroundColor: colors.backgroundSecondary,
  },
  rowActive: { borderWidth: 1.5, borderColor: colors.accent },
});
