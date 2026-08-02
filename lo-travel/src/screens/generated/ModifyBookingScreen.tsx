import React, { useState } from 'react';
import { Text } from 'react-native';
import { Screen, Input, Button } from '../../components';
import { spacing, typography, colors } from '../../theme';

/** Form screen: ModifyBooking */
export const ModifyBookingScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [change, setChange] = useState('');
  const [error, setError] = useState<string | null>(null);

  const onSubmit = () => {
    if (!change.trim()) {
      setError('This field is required');
      return;
    }
    setError(null);
    navigation.navigate('MyTrips');
  };

  return (
    <Screen>
      <Text style={[typography.h1 as any, { marginBottom: spacing.sm }]}>Modify Booking</Text>
      
      <Input label="What would you like to change?" value={change} onChangeText={setChange} accessibilityLabel="What would you like to change? input" />
      {error ? <Text style={{ color: colors.error, marginBottom: spacing.sm }}>{error}</Text> : null}
      <Button label="Submit Change Request" onPress={onSubmit} accessibilityLabel="Submit Change Request" />
    </Screen>
  );
};
