import React, { useEffect, useRef } from 'react';
import { Text, StyleSheet, Animated } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { AuthService } from '../../services';
import { colors } from '../../theme';
import { getItem } from '../../utils/storage';
import { STORAGE_KEYS } from '../../constants/storageKeys';

export const SplashScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const fade = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fade, { toValue: 1, duration: 500, useNativeDriver: true }).start();
    (async () => {
      const seenOnboarding = await getItem(STORAGE_KEYS.ONBOARDING_SEEN);
      const { token } = await AuthService.getSession();
      await new Promise((r) => setTimeout(r, 900));
      if (token) navigation.replace('Main');
      else if (seenOnboarding) navigation.replace('Welcome');
      else navigation.replace('Onboarding1');
    })();
  }, []);

  return (
    <LinearGradient colors={[colors.primary, colors.accent]} style={styles.container}>
      <Animated.View style={{ opacity: fade, alignItems: 'center' }}>
        <Text style={styles.logo}>LO</Text>
        <Text style={styles.tagline}>Travel, simplified.</Text>
      </Animated.View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  logo: { fontSize: 56, fontWeight: '800', color: colors.textInverse, letterSpacing: 2 },
  tagline: { fontSize: 14, color: colors.textInverse, marginTop: 8, opacity: 0.85 },
});
