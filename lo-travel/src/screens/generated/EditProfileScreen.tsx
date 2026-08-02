import React, { useState } from 'react';
import { Text } from 'react-native';
import { Screen, Input, Button } from '../../components';
import { spacing, typography, colors } from '../../theme';

/** Form screen: EditProfile */
export const EditProfileScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState<string | null>(null);

  const onSubmit = () => {
    if (!fullName.trim()) {
      setError('This field is required');
      return;
    }
    setError(null);
    navigation.goBack();
  };

  return (
    <Screen>
      <Text style={[typography.h1 as any, { marginBottom: spacing.sm }]}>Edit Profile</Text>
      
      <Input label="Full Name" value={fullName} onChangeText={setFullName} accessibilityLabel="Full Name input" />
      <Input label="Email Address" value={email} onChangeText={setEmail} accessibilityLabel="Email Address input" />
      <Input label="Phone Number" value={phone} onChangeText={setPhone} accessibilityLabel="Phone Number input" />
      {error ? <Text style={{ color: colors.error, marginBottom: spacing.sm }}>{error}</Text> : null}
      <Button label="Save Changes" onPress={onSubmit} accessibilityLabel="Save Changes" />
    </Screen>
  );
};
