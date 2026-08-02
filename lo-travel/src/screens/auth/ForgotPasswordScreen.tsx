import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Screen, Input, Button } from '../../components';
import { AuthService } from '../../services';
import { forgotPasswordSchema } from '../../validators/authValidators';
import { spacing, typography, colors } from '../../theme';

export const ForgotPasswordScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const onSubmit = async () => {
    try {
      await forgotPasswordSchema.validate({ email });
    } catch (validationError: any) {
      setError(validationError.message);
      return;
    }
    setError(null);
    setLoading(true);
    await AuthService.forgotPassword(email);
    setLoading(false);
    navigation.navigate('ResetPassword', { email });
  };

  return (
    <Screen>
      <Text style={[typography.h1 as any, { marginTop: spacing.xl, marginBottom: spacing.sm }]}>Forgot Password</Text>
      <Text style={[typography.body as any, { color: colors.textSecondary, marginBottom: spacing.lg }]}>
        Enter your email and we'll send you a reset code.
      </Text>
      <Input label="Email Address" value={email} onChangeText={setEmail} autoCapitalize="none" keyboardType="email-address" error={error ?? undefined} />
      <Button label="Send Reset Code" onPress={onSubmit} loading={loading} />
    </Screen>
  );
};

export const ResetPasswordScreen: React.FC<{ navigation: any; route: any }> = ({ navigation }) => {
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const onSubmit = async () => {
    if (password.length < 6) { setError('Minimum 6 characters'); return; }
    if (password !== confirm) { setError('Passwords do not match'); return; }
    setLoading(true);
    await AuthService.resetPassword('token', password);
    setLoading(false);
    navigation.replace('PasswordChanged');
  };

  return (
    <Screen>
      <Text style={[typography.h1 as any, { marginTop: spacing.xl, marginBottom: spacing.lg }]}>Reset Password</Text>
      <Input label="New Password" value={password} onChangeText={setPassword} secureTextEntry />
      <Input label="Confirm Password" value={confirm} onChangeText={setConfirm} secureTextEntry error={error ?? undefined} />
      <Button label="Change Password" onPress={onSubmit} loading={loading} />
    </Screen>
  );
};
