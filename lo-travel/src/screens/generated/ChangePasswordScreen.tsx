import React, { useState } from 'react';
import { Text } from 'react-native';
import { Screen, Input, Button } from '../../components';
import { spacing, typography, colors } from '../../theme';

/** Form screen: ChangePassword */
export const ChangePasswordScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [current, setCurrent] = useState('');
  const [newPass, setNewPass] = useState('');
  const [confirm, setConfirm] = useState('');
  const [error, setError] = useState<string | null>(null);

  const onSubmit = () => {
    if (!current.trim()) {
      setError('This field is required');
      return;
    }
    setError(null);
    navigation.goBack();
  };

  return (
    <Screen>
      <Text style={[typography.h1 as any, { marginBottom: spacing.sm }]}>Change Password</Text>
      
      <Input label="Current Password" value={current} onChangeText={setCurrent} secureTextEntry accessibilityLabel="Current Password input" />
      <Input label="New Password" value={newPass} onChangeText={setNewPass} secureTextEntry accessibilityLabel="New Password input" />
      <Input label="Confirm New Password" value={confirm} onChangeText={setConfirm} secureTextEntry accessibilityLabel="Confirm New Password input" />
      {error ? <Text style={{ color: colors.error, marginBottom: spacing.sm }}>{error}</Text> : null}
      <Button label="Update Password" onPress={onSubmit} accessibilityLabel="Update Password" />
    </Screen>
  );
};
