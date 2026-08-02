import React from 'react';
import { Screen, StateScreen } from '../../components';

/** Error state screen: DepartureAirportNotSupported */
export const DepartureAirportNotSupportedScreen: React.FC<{ navigation: any }> = ({ navigation }) => (
  <Screen scroll={false}>
    <StateScreen
      emoji="🛫"
      title="Departure Airport Not Supported"
      message="Please try again in a moment."
      actionLabel="Retry"
      onAction={() => navigation.goBack()}
    />
  </Screen>
);
