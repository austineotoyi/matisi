import React from 'react';
import { Screen, StateScreen } from '../../components';

/** Error state screen: IncorrectOtp */
export const IncorrectOtpScreen: React.FC<{ navigation: any }> = ({ navigation }) => (
  <Screen scroll={false}>
    <StateScreen
      emoji="🔑"
      title="Incorrect Code"
      message="Please try again in a moment."
      actionLabel="Retry"
      onAction={() => navigation.goBack()}
    />
  </Screen>
);
