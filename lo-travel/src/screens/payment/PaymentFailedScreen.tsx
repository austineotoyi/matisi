import React from 'react';
import { Screen, StateScreen } from '../../components';

export const PaymentFailedScreen: React.FC<{ navigation: any }> = ({ navigation }) => (
  <Screen scroll={false}>
    <StateScreen
      emoji="💳"
      title="Payment Failed"
      message="Your payment could not be processed. Please try a different payment method."
      actionLabel="Try Again"
      onAction={() => navigation.replace('PaymentMethod')}
    />
  </Screen>
);
