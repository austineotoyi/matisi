import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { Screen, Card, Button, Skeleton } from '../../components';
import { UserService } from '../../services';
import { spacing, typography, colors } from '../../theme';

interface Passport {
  number: string;
  issueCountry: string;
  issueDate: string;
  expiryDate: string;
}

export const PassportDetailsScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [passport, setPassport] = useState<Passport | null>(null);

  useEffect(() => {
    UserService.getProfile().then((r) => setPassport((r.data as any).passport ?? null));
  }, []);

  if (!passport) return <Screen><Skeleton height={160} /></Screen>;

  const expiringSoon = new Date(passport.expiryDate).getTime() - Date.now() < 1000 * 60 * 60 * 24 * 180;

  return (
    <Screen>
      <Text style={[typography.h1 as any, { marginBottom: spacing.md }]}>Passport Details</Text>
      <Card style={{ marginBottom: spacing.md }}>
        <Text style={typography.caption as any}>Passport Number</Text>
        <Text style={typography.h3 as any}>{`•••• ${passport.number.slice(-3)}`}</Text>
        <View style={{ marginTop: spacing.sm }}>
          <Text style={typography.caption as any}>Country of Issue</Text>
          <Text style={typography.body as any}>{passport.issueCountry}</Text>
        </View>
        <View style={{ marginTop: spacing.sm }}>
          <Text style={typography.caption as any}>Issue Date</Text>
          <Text style={typography.body as any}>{passport.issueDate}</Text>
        </View>
        <View style={{ marginTop: spacing.sm }}>
          <Text style={typography.caption as any}>Expiry Date</Text>
          <Text style={[typography.body as any, expiringSoon && { color: colors.warning, fontWeight: '700' }]}>
            {passport.expiryDate}{expiringSoon ? ' — expiring soon' : ''}
          </Text>
        </View>
      </Card>
      <Button label="Update Passport" onPress={() => navigation.navigate('PassportManagement')} accessibilityLabel="Update passport details" />
    </Screen>
  );
};
