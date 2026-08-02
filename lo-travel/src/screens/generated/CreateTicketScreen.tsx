import React, { useState } from 'react';
import { Text } from 'react-native';
import { Screen, Input, Button } from '../../components';
import { spacing, typography, colors } from '../../theme';

/** Form screen: CreateTicket */
export const CreateTicketScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [subject, setSubject] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState<string | null>(null);

  const onSubmit = () => {
    if (!subject.trim()) {
      setError('This field is required');
      return;
    }
    setError(null);
    navigation.navigate('MyTickets');
  };

  return (
    <Screen>
      <Text style={[typography.h1 as any, { marginBottom: spacing.sm }]}>Create Support Ticket</Text>
      
      <Input label="Subject" value={subject} onChangeText={setSubject} accessibilityLabel="Subject input" />
      <Input label="Describe the issue" value={description} onChangeText={setDescription} accessibilityLabel="Describe the issue input" />
      {error ? <Text style={{ color: colors.error, marginBottom: spacing.sm }}>{error}</Text> : null}
      <Button label="Submit Ticket" onPress={onSubmit} accessibilityLabel="Submit Ticket" />
    </Screen>
  );
};
