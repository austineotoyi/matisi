import React, { useState } from 'react';
import { Text } from 'react-native';
import { Screen, Input, Button } from '../../components';
import { spacing, typography, colors } from '../../theme';

/** Form screen: VisaApplication */
export const VisaApplicationScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [passport, setPassport] = useState('');
  const [purpose, setPurpose] = useState('');
  const [error, setError] = useState<string | null>(null);

  const onSubmit = () => {
    if (!passport.trim()) {
      setError('This field is required');
      return;
    }
    setError(null);
    navigation.navigate('MyTrips');
  };

  return (
    <Screen>
      <Text style={[typography.h1 as any, { marginBottom: spacing.sm }]}>Visa Application</Text>
      
      <Input label="Passport Number" value={passport} onChangeText={setPassport} accessibilityLabel="Passport Number input" />
      <Input label="Travel Purpose" value={purpose} onChangeText={setPurpose} accessibilityLabel="Travel Purpose input" />
      {error ? <Text style={{ color: colors.error, marginBottom: spacing.sm }}>{error}</Text> : null}
      <Button label="Submit Application" onPress={onSubmit} accessibilityLabel="Submit Application" />
    </Screen>
  );
};
