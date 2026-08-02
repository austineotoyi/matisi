import React from 'react';
import { Screen, StateScreen } from '../../components';

/** Error state screen: InsufficientFunds */
export const InsufficientFundsScreen: React.FC<{ navigation: any }> = ({ navigation }) => (
  <Screen scroll={false}>
    <StateScreen
      emoji="💳"
      title="Insufficient Funds"
      message="Please try again in a moment."
      actionLabel="Retry"
      onAction={() => navigation.goBack()}
    />
  </Screen>
);
