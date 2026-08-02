import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Screen, Input, Button, BookingProgress, Card } from '../../components';
import { contactSchema } from '../../validators/bookingValidators';
import { colors, spacing, typography } from '../../theme';

const STEPS = ['Flight', 'Passenger', 'Contact', 'Seats', 'Extras', 'Insurance', 'Payment'];

export const ContactInfoScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [updates, setUpdates] = useState(true);
  const [promos, setPromos] = useState(false);
  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(contactSchema),
    defaultValues: { mobile: '', email: '', country: 'Kenya' },
  });

  return (
    <Screen>
      <BookingProgress steps={STEPS} currentIndex={2} />
      <Text style={[typography.h1 as any, { marginBottom: spacing.md }]}>Contact Details</Text>

      <Controller control={control} name="mobile" render={({ field: { onChange, value } }) => (
        <Input label="Mobile Number" value={value} onChangeText={onChange} keyboardType="phone-pad" error={errors.mobile?.message} accessibilityLabel="Mobile number input" />
      )} />
      <Controller control={control} name="email" render={({ field: { onChange, value } }) => (
        <Input label="Email Address" value={value} onChangeText={onChange} autoCapitalize="none" keyboardType="email-address" error={errors.email?.message} accessibilityLabel="Email input" />
      )} />
      <Controller control={control} name="country" render={({ field: { onChange, value } }) => (
        <Input label="Country of Residence" value={value} onChangeText={onChange} error={errors.country?.message} accessibilityLabel="Country input" />
      )} />

      <Card style={{ marginBottom: spacing.md }}>
        <View style={styles.switchRow}>
          <Text style={typography.body as any}>Receive Booking Updates</Text>
          <Switch value={updates} onValueChange={setUpdates} accessibilityLabel="Toggle booking update notifications" />
        </View>
        <View style={styles.switchRow}>
          <Text style={typography.body as any}>Receive Promotional Offers</Text>
          <Switch value={promos} onValueChange={setPromos} accessibilityLabel="Toggle promotional notifications" />
        </View>
      </Card>

      <Button label="Continue" onPress={handleSubmit(() => navigation.navigate('EmergencyContact'))} accessibilityLabel="Continue to emergency contact" />
    </Screen>
  );
};

export const EmergencyContactScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [name, setName] = useState('');
  const [relationship, setRelationship] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState<string | null>(null);

  const onSave = () => {
    if (!name || !relationship || !phone) { setError('Please fill in all required fields'); return; }
    navigation.navigate('TravelDocuments');
  };

  return (
    <Screen>
      <BookingProgress steps={STEPS} currentIndex={2} />
      <Text style={[typography.h1 as any, { marginBottom: spacing.md }]}>Emergency Contact</Text>
      <Input label="Full Name" value={name} onChangeText={setName} accessibilityLabel="Emergency contact name" />
      <Input label="Relationship" value={relationship} onChangeText={setRelationship} accessibilityLabel="Relationship to passenger" />
      <Input label="Mobile Number" value={phone} onChangeText={setPhone} keyboardType="phone-pad" error={error ?? undefined} accessibilityLabel="Emergency contact phone" />
      <Card style={{ marginBottom: spacing.md }}>
        <Text style={typography.bodySmall as any}>Emergency contacts are recommended for international travel and are used only if we're unable to reach you directly.</Text>
      </Card>
      <Button label="Save Contact" onPress={onSave} accessibilityLabel="Save emergency contact" />
    </Screen>
  );
};

export const TravelDocumentsScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [uploaded, setUploaded] = useState<Record<string, boolean>>({});
  const docs = ['National ID', 'Visa', 'Vaccination Certificate', 'Travel Authorization'];

  return (
    <Screen>
      <BookingProgress steps={STEPS} currentIndex={2} />
      <Text style={[typography.h1 as any, { marginBottom: spacing.md }]}>Additional Travel Documents</Text>
      {docs.map((d) => (
        <Card key={d} style={{ marginBottom: spacing.sm }}>
          <View style={styles.switchRow}>
            <Text style={typography.body as any}>{d}</Text>
            <Button
              label={uploaded[d] ? 'Uploaded ✓' : 'Upload'}
              variant={uploaded[d] ? 'selected' : 'secondary'}
              size="sm"
              fullWidth={false}
              onPress={() => setUploaded((u) => ({ ...u, [d]: true }))}
              accessibilityLabel={`Upload ${d}`}
            />
          </View>
        </Card>
      ))}
      <Button label="Continue" onPress={() => navigation.navigate('PassengerReview')} accessibilityLabel="Continue to passenger review" />
    </Screen>
  );
};

const styles = StyleSheet.create({
  switchRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: spacing.sm },
});
