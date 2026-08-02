import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { Screen } from '../../components';
import { colors, spacing, typography } from '../../theme';

const GROUPS = [
  { title: 'Preferences', items: [
    { key: 'ChooseLanguage', label: 'Language' },
    { key: 'ChooseCurrency', label: 'Currency' },
    { key: 'Appearance', label: 'Appearance' },
  ]},
  { title: 'Notifications & Privacy', items: [
    { key: 'NotificationSettings', label: 'Notification Settings' },
    { key: 'PrivacySettings', label: 'Privacy Settings' },
    { key: 'SecuritySettings', label: 'Security Settings' },
    { key: 'BiometricSettings', label: 'Biometric Settings' },
  ]},
  { title: 'About', items: [
    { key: 'About', label: 'About LO' },
    { key: 'TermsAndConditions', label: 'Terms & Conditions' },
    { key: 'PrivacyPolicy', label: 'Privacy Policy' },
  ]},
];

export const SettingsScreen: React.FC<{ navigation: any }> = ({ navigation }) => (
  <Screen>
    <Text style={[typography.h1 as any, { marginBottom: spacing.md }]}>Settings</Text>
    {GROUPS.map((g) => (
      <View key={g.title} style={{ marginBottom: spacing.lg }}>
        <Text style={[typography.caption as any, { marginBottom: spacing.xs }]}>{g.title.toUpperCase()}</Text>
        {g.items.map((item) => (
          <Pressable key={item.key} style={styles.row} onPress={() => navigation.navigate(item.key)} accessibilityRole="button" accessibilityLabel={item.label}>
            <Text style={typography.body as any}>{item.label}</Text>
            <Text style={{ color: colors.textSecondary }}>›</Text>
          </Pressable>
        ))}
      </View>
    ))}
  </Screen>
);

const styles = StyleSheet.create({
  row: { flexDirection: 'row', justifyContent: 'space-between', paddingVertical: spacing.sm, borderBottomWidth: 1, borderBottomColor: colors.divider },
});
