import React from 'react';
import { Screen, StateScreen } from '../../components';

/** Error state screen: FlightCancelled */
export const FlightCancelledScreen: React.FC<{ navigation: any }> = ({ navigation }) => (
  <Screen scroll={false}>
    <StateScreen
      emoji="❌"
      title="Flight Cancelled"
      message="Please try again in a moment."
      actionLabel="Retry"
      onAction={() => navigation.goBack()}
    />
  </Screen>
);
