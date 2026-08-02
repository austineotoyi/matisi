import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { Button } from '../../components';
import { colors, spacing, typography } from '../../theme';
import { setItem } from '../../utils/storage';
import { STORAGE_KEYS } from '../../constants/storageKeys';

const { width } = Dimensions.get('window');

const CONTENT: Record<string, { emoji: string; title: string; subtitle: string; next: string }> = {
  Onboarding1: { emoji: '🔍', title: 'Search flights, hotels & tours in one place', subtitle: 'Compare prices across airlines and providers instantly.', next: 'Onboarding2' },
  Onboarding2: { emoji: '🛡️', title: 'Book with confidence', subtitle: 'Transparent pricing, instant confirmation, and 24/7 support.', next: 'Onboarding3' },
  Onboarding3: { emoji: '🌍', title: 'Travel, your way', subtitle: 'Personalized hotel and tour recommendations at every destination.', next: 'Welcome' },
};

export const OnboardingScreen: React.FC<{ navigation: any; route: any }> = ({ navigation, route }) => {
  const data = CONTENT[route.name];
  const isLast = data.next === 'Welcome';

  const handleNext = async () => {
    if (isLast) await setItem(STORAGE_KEYS.ONBOARDING_SEEN, true);
    navigation.replace(data.next);
  };

  return (
    <View style={styles.container}>
      <View style={styles.dots}>
        {['Onboarding1', 'Onboarding2', 'Onboarding3'].map((r) => (
          <View key={r} style={[styles.dot, r === route.name && styles.dotActive]} />
        ))}
      </View>
      <Text style={styles.emoji}>{data.emoji}</Text>
      <Text style={[typography.h1 as any, styles.title]}>{data.title}</Text>
      <Text style={[typography.body as any, styles.subtitle]}>{data.subtitle}</Text>
      <View style={styles.footer}>
        <Button label={isLast ? 'Get Started' : 'Next'} onPress={handleNext} />
        {!isLast && (
          <Button label="Skip" variant="ghost" onPress={async () => {
            await setItem(STORAGE_KEYS.ONBOARDING_SEEN, true);
            navigation.replace('Welcome');
          }} />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background, alignItems: 'center', justifyContent: 'center', padding: spacing.xl },
  dots: { flexDirection: 'row', position: 'absolute', top: 80 },
  dot: { width: 8, height: 8, borderRadius: 4, backgroundColor: colors.border, marginHorizontal: 4 },
  dotActive: { backgroundColor: colors.accent, width: 20 },
  emoji: { fontSize: 84, marginBottom: spacing.lg },
  title: { textAlign: 'center' },
  subtitle: { textAlign: 'center', marginTop: spacing.sm, color: colors.textSecondary, maxWidth: width * 0.8 },
  footer: { position: 'absolute', bottom: spacing.xxl, width: '100%', paddingHorizontal: spacing.xl, gap: spacing.sm },
});
