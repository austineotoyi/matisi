import React, { useState } from 'react';
import { Text } from 'react-native';
import { Screen, Input, Button } from '../../components';
import { spacing, typography, colors } from '../../theme';

/** Form screen: AddFunds */
export const AddFundsScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [amount, setAmount] = useState('');
  const [error, setError] = useState<string | null>(null);

  const onSubmit = () => {
    if (!amount.trim()) {
      setError('This field is required');
      return;
    }
    setError(null);
    navigation.navigate('Wallet');
  };

  return (
    <Screen>
      <Text style={[typography.h1 as any, { marginBottom: spacing.sm }]}>Add Funds</Text>
      
      <Input label="Amount (USD)" value={amount} onChangeText={setAmount} accessibilityLabel="Amount (USD) input" />
      {error ? <Text style={{ color: colors.error, marginBottom: spacing.sm }}>{error}</Text> : null}
      <Button label="Add Funds" onPress={onSubmit} accessibilityLabel="Add Funds" />
    </Screen>
  );
};
