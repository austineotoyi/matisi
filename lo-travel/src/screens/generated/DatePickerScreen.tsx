import React, { useState } from 'react';
import { Text } from 'react-native';
import { Screen, Input, Button } from '../../components';
import { spacing, typography, colors } from '../../theme';

/** Form screen: DatePicker */
export const DatePickerScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [departure, setDeparture] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [error, setError] = useState<string | null>(null);

  const onSubmit = () => {
    if (!departure.trim()) {
      setError('This field is required');
      return;
    }
    setError(null);
    navigation.goBack();
  };

  return (
    <Screen>
      <Text style={[typography.h1 as any, { marginBottom: spacing.sm }]}>Select Dates</Text>
      
      <Input label="Departure Date" value={departure} onChangeText={setDeparture} accessibilityLabel="Departure Date input" />
      <Input label="Return Date" value={returnDate} onChangeText={setReturnDate} accessibilityLabel="Return Date input" />
      {error ? <Text style={{ color: colors.error, marginBottom: spacing.sm }}>{error}</Text> : null}
      <Button label="Confirm Dates" onPress={onSubmit} accessibilityLabel="Confirm Dates" />
    </Screen>
  );
};
