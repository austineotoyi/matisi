import React from 'react';
import { Screen, StateScreen } from '../../components';

/** Error state screen: PaymentCancelled */
export const PaymentCancelledScreen: React.FC<{ navigation: any }> = ({ navigation }) => (
  <Screen scroll={false}>
    <StateScreen
      emoji="🚫"
      title="Payment Cancelled"
      message="Please try again in a moment."
      actionLabel="Retry"
      onAction={() => navigation.goBack()}
    />
  </Screen>
);
