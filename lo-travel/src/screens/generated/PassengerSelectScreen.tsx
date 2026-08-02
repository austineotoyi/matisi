import React, { useState } from 'react';
import { Text } from 'react-native';
import { Screen, Input, Button } from '../../components';
import { spacing, typography, colors } from '../../theme';

/** Form screen: PassengerSelect */
export const PassengerSelectScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [value, setValue] = useState('');
  const [error, setError] = useState<string | null>(null);

  const onSubmit = () => {
    if (!value.trim()) {
      setError('This field is required');
      return;
    }
    setError(null);
    navigation.goBack();
  };

  return (
    <Screen>
      <Text style={[typography.h1 as any, { marginBottom: spacing.sm }]}>Passengers & Class</Text>
      
      <Input label="Details" value={value} onChangeText={setValue} accessibilityLabel="Details input" />
      {error ? <Text style={{ color: colors.error, marginBottom: spacing.sm }}>{error}</Text> : null}
      <Button label="Continue" onPress={onSubmit} accessibilityLabel="Continue" />
    </Screen>
  );
};
