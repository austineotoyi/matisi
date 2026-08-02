import React, { useState } from 'react';
import { Text } from 'react-native';
import { Screen, Input, Button } from '../../components';
import { spacing, typography, colors } from '../../theme';

/** Form screen: PromoCode */
export const PromoCodeScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [code, setCode] = useState('');
  const [error, setError] = useState<string | null>(null);

  const onSubmit = () => {
    if (!code.trim()) {
      setError('This field is required');
      return;
    }
    setError(null);
    navigation.goBack();
  };

  return (
    <Screen>
      <Text style={[typography.h1 as any, { marginBottom: spacing.sm }]}>Apply Promo Code</Text>
      
      <Input label="Promo Code" value={code} onChangeText={setCode} accessibilityLabel="Promo Code input" />
      {error ? <Text style={{ color: colors.error, marginBottom: spacing.sm }}>{error}</Text> : null}
      <Button label="Apply Code" onPress={onSubmit} accessibilityLabel="Apply Code" />
    </Screen>
  );
};
