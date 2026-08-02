import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Screen, Input, Button } from '../../components';
import { signupSchema } from '../../validators/authValidators';
import { AuthService } from '../../services';
import { spacing, typography } from '../../theme';

interface FormData { fullName: string; email: string; phone: string; password: string }

export const SignupScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [loading, setLoading] = useState(false);
  const { control, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: yupResolver(signupSchema),
    defaultValues: { fullName: '', email: '', phone: '', password: '' },
  });

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    await AuthService.register(data.fullName, data.email, data.phone, data.password);
    await AuthService.sendOtp(data.email);
    setLoading(false);
    navigation.navigate('VerifyOtp', { destination: data.email });
  };

  return (
    <Screen>
      <Text style={[typography.h1 as any, { marginTop: spacing.xl, marginBottom: spacing.lg }]}>Create Account</Text>
      <Controller control={control} name="fullName" render={({ field: { onChange, value } }) => (
        <Input label="Full Name" value={value} onChangeText={onChange} error={errors.fullName?.message} />
      )} />
      <Controller control={control} name="email" render={({ field: { onChange, value } }) => (
        <Input label="Email Address" value={value} onChangeText={onChange} autoCapitalize="none" keyboardType="email-address" error={errors.email?.message} />
      )} />
      <Controller control={control} name="phone" render={({ field: { onChange, value } }) => (
        <Input label="Phone Number" value={value} onChangeText={onChange} keyboardType="phone-pad" error={errors.phone?.message} />
      )} />
      <Controller control={control} name="password" render={({ field: { onChange, value } }) => (
        <Input label="Password" value={value} onChangeText={onChange} secureTextEntry error={errors.password?.message} />
      )} />
      <Button label="Sign Up" onPress={handleSubmit(onSubmit)} loading={loading} />
      <View style={{ height: spacing.sm }} />
      <Button label="Back to Log In" variant="ghost" onPress={() => navigation.navigate('Login')} />
    </Screen>
  );
};
