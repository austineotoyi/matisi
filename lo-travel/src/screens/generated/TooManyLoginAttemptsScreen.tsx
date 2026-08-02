import React from 'react';
import { Screen, StateScreen } from '../../components';

/** Error state screen: TooManyLoginAttempts */
export const TooManyLoginAttemptsScreen: React.FC<{ navigation: any }> = ({ navigation }) => (
  <Screen scroll={false}>
    <StateScreen
      emoji="🚫"
      title="Too Many Login Attempts"
      message="Please try again in a moment."
      actionLabel="Retry"
      onAction={() => navigation.goBack()}
    />
  </Screen>
);
