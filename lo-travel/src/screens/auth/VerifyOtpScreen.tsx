import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Screen, Input, Button } from '../../components';
import { AuthService } from '../../services';
import { otpSchema } from '../../validators/authValidators';
import { colors, spacing, typography } from '../../theme';

export const VerifyOtpScreen: React.FC<{ navigation: any; route: any }> = ({ navigation, route }) => {
  const destination = route.params?.destination ?? 'your email';
  const [code, setCode] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const onVerify = async () => {
    try {
      await otpSchema.validate({ code });
    } catch (validationError: any) {
      setError(validationError.message);
      return;
    }
    setError(null);
    setLoading(true);
    const res = await AuthService.verifyOtp(destination, code);
    setLoading(false);
    if (res.data.verified) navigation.replace('OtpSuccess');
    else setError('Incorrect code, please try again.');
  };

  return (
    <Screen>
      <Text style={[typography.h1 as any, { marginTop: spacing.xl }]}>Enter Verification Code</Text>
      <Text style={[typography.body as any, { color: colors.textSecondary, marginTop: spacing.xs, marginBottom: spacing.lg }]}>
        We sent a 4-digit code to {destination}.
      </Text>
      <Input label="Verification Code" value={code} onChangeText={setCode} keyboardType="number-pad" maxLength={4} error={error ?? undefined} />
      <Button label="Verify" onPress={onVerify} loading={loading} />
      <View style={{ height: spacing.sm }} />
      <Button label="Resend Code" variant="ghost" onPress={() => AuthService.sendOtp(destination)} />
    </Screen>
  );
};

export const VerifyEmailScreen: React.FC<{ navigation: any }> = ({ navigation }) => (
  <Screen scroll={false}>
    <View style={styles.center}>
      <Text style={{ fontSize: 64 }}>📧</Text>
      <Text style={[typography.h2 as any, { marginTop: spacing.md, textAlign: 'center' }]}>Verify Your Email</Text>
      <Text style={[typography.body as any, { color: colors.textSecondary, textAlign: 'center', marginTop: spacing.xs, marginBottom: spacing.lg }]}>
        We've sent a verification link to your inbox. Tap the link, or continue with the OTP.
      </Text>
      <Button label="Continue" onPress={() => navigation.navigate('VerifyOtp', {})} />
    </View>
  </Screen>
);

const styles = StyleSheet.create({ center: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: spacing.xl } });
