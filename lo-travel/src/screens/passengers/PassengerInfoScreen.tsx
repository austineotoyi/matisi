import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Screen, Input, Button, BookingProgress } from '../../components';
import { passengerSchema } from '../../validators/bookingValidators';
import { useBookingDraftStore } from '../../store/bookingDraftStore';
import { spacing, typography } from '../../theme';

const STEPS = ['Flight', 'Passenger', 'Contact', 'Seats', 'Extras', 'Insurance', 'Payment'];

interface FormData { firstName: string; lastName: string; dob: string; nationality: string; passportNumber: string }

export const PassengerInfoScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const setPassengers = useBookingDraftStore((s) => s.setPassengers);
  const { control, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: yupResolver(passengerSchema),
    defaultValues: { firstName: '', lastName: '', dob: '', nationality: '', passportNumber: '' },
  });

  const onSubmit = (data: FormData) => {
    setPassengers([data]);
    navigation.navigate('ContactInfo');
  };

  return (
    <Screen>
      <BookingProgress steps={STEPS} currentIndex={1} />
      <Text style={[typography.h1 as any, { marginBottom: spacing.md }]}>Passenger Information</Text>

      <Controller control={control} name="firstName" render={({ field: { onChange, value } }) => (
        <Input label="First Name" value={value} onChangeText={onChange} error={errors.firstName?.message} accessibilityLabel="First name input" />
      )} />
      <Controller control={control} name="lastName" render={({ field: { onChange, value } }) => (
        <Input label="Last Name" value={value} onChangeText={onChange} error={errors.lastName?.message} accessibilityLabel="Last name input" />
      )} />
      <Controller control={control} name="dob" render={({ field: { onChange, value } }) => (
        <Input label="Date of Birth" value={value} onChangeText={onChange} placeholder="YYYY-MM-DD" error={errors.dob?.message} accessibilityLabel="Date of birth input" />
      )} />
      <Controller control={control} name="nationality" render={({ field: { onChange, value } }) => (
        <Input label="Nationality" value={value} onChangeText={onChange} error={errors.nationality?.message} accessibilityLabel="Nationality input" />
      )} />
      <Controller control={control} name="passportNumber" render={({ field: { onChange, value } }) => (
        <Input label="Passport Number" value={value} onChangeText={onChange} error={errors.passportNumber?.message} accessibilityLabel="Passport number input" />
      )} />

      <Button label="Continue" onPress={handleSubmit(onSubmit)} accessibilityLabel="Continue to contact details" />
    </Screen>
  );
};
