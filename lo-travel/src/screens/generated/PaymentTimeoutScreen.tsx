import React from 'react';
import { Screen, StateScreen } from '../../components';

/** Error state screen: PaymentTimeout */
export const PaymentTimeoutScreen: React.FC<{ navigation: any }> = ({ navigation }) => (
  <Screen scroll={false}>
    <StateScreen
      emoji="⌛"
      title="Payment Timeout"
      message="Please try again in a moment."
      actionLabel="Retry"
      onAction={() => navigation.goBack()}
    />
  </Screen>
);
