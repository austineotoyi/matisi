import React from 'react';
import { Screen, StateScreen } from '../../components';

/** Error state screen: DuplicatePaymentDetected */
export const DuplicatePaymentDetectedScreen: React.FC<{ navigation: any }> = ({ navigation }) => (
  <Screen scroll={false}>
    <StateScreen
      emoji="⚠️"
      title="Duplicate Payment Detected"
      message="Please try again in a moment."
      actionLabel="Retry"
      onAction={() => navigation.goBack()}
    />
  </Screen>
);
