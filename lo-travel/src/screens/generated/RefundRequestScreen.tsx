import React, { useState } from 'react';
import { Text } from 'react-native';
import { Screen, Input, Button } from '../../components';
import { spacing, typography, colors } from '../../theme';

/** Form screen: RefundRequest */
export const RefundRequestScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [reason, setReason] = useState('');
  const [error, setError] = useState<string | null>(null);

  const onSubmit = () => {
    if (!reason.trim()) {
      setError('This field is required');
      return;
    }
    setError(null);
    navigation.navigate('RefundHistory');
  };

  return (
    <Screen>
      <Text style={[typography.h1 as any, { marginBottom: spacing.sm }]}>Refund Request</Text>
      
      <Input label="Reason for Refund" value={reason} onChangeText={setReason} accessibilityLabel="Reason for Refund input" />
      {error ? <Text style={{ color: colors.error, marginBottom: spacing.sm }}>{error}</Text> : null}
      <Button label="Submit Request" onPress={onSubmit} accessibilityLabel="Submit Request" />
    </Screen>
  );
};
