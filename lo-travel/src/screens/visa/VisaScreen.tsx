import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { Screen, Card, Button, Skeleton } from '../../components';
import { VisaService } from '../../services';
import { spacing, typography } from '../../theme';

export const VisaRequirementsScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [req, setReq] = useState<any>(null);

  useEffect(() => { VisaService.getRequirements('UAE').then((r) => setReq(r.data)); }, []);

  if (!req) return <Screen><Skeleton height={200} /></Screen>;

  return (
    <Screen>
      <Text style={[typography.h1 as any, { marginBottom: spacing.sm }]}>Visa Requirements</Text>
      <Card style={{ marginBottom: spacing.md }}>
        <Text style={typography.h3 as any}>{req.destinationCountry}</Text>
        <Text style={typography.body as any}>Processing time: {req.processingTime}</Text>
        <Text style={[typography.body as any, { marginTop: spacing.sm }]}>Required documents:</Text>
        {req.documents.map((d: string) => <Text key={d} style={typography.bodySmall as any}>• {d}</Text>)}
      </Card>
      <Button label="Start Visa Application" onPress={() => navigation.navigate('VisaApplication')} accessibilityLabel="Start visa application" />
    </Screen>
  );
};
