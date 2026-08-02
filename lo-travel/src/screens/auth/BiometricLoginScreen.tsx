import React, { useEffect, useRef, useState } from 'react';
import { View, Text, Animated, StyleSheet } from 'react-native';
import { Screen, Button } from '../../components';
import { AuthService } from '../../services';
import { colors, spacing, typography } from '../../theme';

/** The actual Face ID / Fingerprint scan prompt shown during login — distinct
 * from BiometricSetup (the one-time settings toggle) and BiometricSettings
 * (the profile settings screen). */
export const BiometricLoginScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [status, setStatus] = useState<'scanning' | 'success' | 'failed'>('scanning');
  const pulse = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    const loop = Animated.loop(
      Animated.sequence([
        Animated.timing(pulse, { toValue: 1.15, duration: 500, useNativeDriver: true }),
        Animated.timing(pulse, { toValue: 1, duration: 500, useNativeDriver: true }),
      ]),
    );
    loop.start();

    const timer = setTimeout(async () => {
      loop.stop();
      const res = await AuthService.loginWithBiometrics();
      if (res.success) {
        setStatus('success');
        setTimeout(() => navigation.replace('Main'), 500);
      } else {
        setStatus('failed');
      }
    }, 1400);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Screen scroll={false}>
      <View style={styles.center} accessibilityLabel={status === 'scanning' ? 'Scanning biometrics' : status === 'success' ? 'Biometric login successful' : 'Biometric login failed'}>
        <Animated.Text style={[styles.icon, { transform: [{ scale: pulse }] }]}>
          {status === 'success' ? '✅' : status === 'failed' ? '❌' : '🆔'}
        </Animated.Text>
        <Text style={[typography.h2 as any, { marginTop: spacing.lg }]}>
          {status === 'scanning' ? 'Scanning…' : status === 'success' ? 'Verified!' : 'Not Recognized'}
        </Text>
        <Text style={[typography.body as any, { color: colors.textSecondary, marginTop: spacing.xs, textAlign: 'center' }]}>
          {status === 'scanning'
            ? 'Hold still while we confirm your identity.'
            : status === 'success'
            ? 'Signing you in…'
            : "We couldn't confirm your identity. Try again or use your password."}
        </Text>
        {status === 'failed' ? (
          <View style={{ marginTop: spacing.lg, width: '100%' }}>
            <Button label="Try Again" onPress={() => setStatus('scanning')} accessibilityLabel="Retry biometric scan" />
            <View style={{ height: spacing.sm }} />
            <Button label="Use Password Instead" variant="ghost" onPress={() => navigation.replace('Login')} accessibilityLabel="Use password instead" />
          </View>
        ) : null}
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  center: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: spacing.xl },
  icon: { fontSize: 72 },
});
