import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Screen, Input, Button } from '../../components';
import { loginSchema } from '../../validators/authValidators';
import { useAuthStore } from '../../store/authStore';
import { colors, spacing, typography } from '../../theme';

interface FormData { email: string; password: string }

export const LoginScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const login = useAuthStore((s) => s.login);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const { control, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: yupResolver(loginSchema),
    defaultValues: { email: '', password: '' },
  });

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    setSubmitError(null);
    const ok = await login(data.email, data.password);
    setLoading(false);
    if (ok) navigation.replace('Main');
    else setSubmitError('Invalid email or password.');
  };

  return (
    <Screen>
      <Text style={[typography.h1 as any, { marginTop: spacing.xl, marginBottom: spacing.lg }]}>Log In</Text>

      <Controller
        control={control}
        name="email"
        render={({ field: { onChange, value } }) => (
          <Input label="Email Address" value={value} onChangeText={onChange} autoCapitalize="none" keyboardType="email-address" error={errors.email?.message} />
        )}
      />
      <Controller
        control={control}
        name="password"
        render={({ field: { onChange, value } }) => (
          <Input label="Password" value={value} onChangeText={onChange} secureTextEntry error={errors.password?.message} />
        )}
      />

      {submitError ? <Text style={{ color: colors.error, marginBottom: spacing.sm }}>{submitError}</Text> : null}

      <Button label="Log In" onPress={handleSubmit(onSubmit)} loading={loading} />
      <View style={{ height: spacing.sm }} />
      <Button label="Forgot Password?" variant="ghost" onPress={() => navigation.navigate('ForgotPassword')} />

      <View style={styles.footerRow}>
        <Text style={typography.body as any}>Don't have an account? </Text>
        <Text style={styles.link} onPress={() => navigation.navigate('Signup')}>Sign Up</Text>
      </View>

      <View style={{ height: spacing.md }} />
      <Button label="Use Face ID / Fingerprint" variant="secondary" onPress={() => navigation.navigate('BiometricLogin')} accessibilityLabel="Log in with Face ID or Fingerprint" />
    </Screen>
  );
};

const styles = StyleSheet.create({
  footerRow: { flexDirection: 'row', justifyContent: 'center', marginTop: spacing.lg },
  link: { color: colors.accent, fontWeight: '700' },
});
