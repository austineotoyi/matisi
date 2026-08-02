import React from 'react';
import { Screen, StateScreen } from '../../components';

/** Error state screen: OtpVerificationFailed */
export const OtpVerificationFailedScreen: React.FC<{ navigation: any }> = ({ navigation }) => (
  <Screen scroll={false}>
    <StateScreen
      emoji="🔑"
      title="OTP Verification Failed"
      message="Please try again in a moment."
      actionLabel="Retry"
      onAction={() => navigation.goBack()}
    />
  </Screen>
);
