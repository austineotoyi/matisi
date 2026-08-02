import React, { useState } from 'react';
import { Text } from 'react-native';
import { Screen, Input, Button } from '../../components';
import { spacing, typography, colors } from '../../theme';

/** Form screen: ChangeFlight */
export const ChangeFlightScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [date, setDate] = useState('');
  const [error, setError] = useState<string | null>(null);

  const onSubmit = () => {
    if (!date.trim()) {
      setError('This field is required');
      return;
    }
    setError(null);
    navigation.navigate('FlightResults');
  };

  return (
    <Screen>
      <Text style={[typography.h1 as any, { marginBottom: spacing.sm }]}>Change Flight</Text>
      
      <Input label="New Departure Date" value={date} onChangeText={setDate} accessibilityLabel="New Departure Date input" />
      {error ? <Text style={{ color: colors.error, marginBottom: spacing.sm }}>{error}</Text> : null}
      <Button label="Search New Flight" onPress={onSubmit} accessibilityLabel="Search New Flight" />
    </Screen>
  );
};
