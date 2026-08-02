import React, { useState } from 'react';
import { Text } from 'react-native';
import { Screen, Input, Button } from '../../components';
import { spacing, typography, colors } from '../../theme';

/** Form screen: GlobalSearch */
export const GlobalSearchScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [query, setQuery] = useState('');
  const [error, setError] = useState<string | null>(null);

  const onSubmit = () => {
    if (!query.trim()) {
      setError('This field is required');
      return;
    }
    setError(null);
    navigation.goBack();
  };

  return (
    <Screen>
      <Text style={[typography.h1 as any, { marginBottom: spacing.sm }]}>Search LO</Text>
      
      <Input label="Search flights, hotels, tours…" value={query} onChangeText={setQuery} accessibilityLabel="Search flights, hotels, tours… input" />
      {error ? <Text style={{ color: colors.error, marginBottom: spacing.sm }}>{error}</Text> : null}
      <Button label="Search" onPress={onSubmit} accessibilityLabel="Search" />
    </Screen>
  );
};
