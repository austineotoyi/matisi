import React from 'react';
import { Screen, StateScreen } from '../../components';

/** Error state screen: AirlineNotAvailable */
export const AirlineNotAvailableScreen: React.FC<{ navigation: any }> = ({ navigation }) => (
  <Screen scroll={false}>
    <StateScreen
      emoji="✈️"
      title="Airline Not Available"
      message="Please try again in a moment."
      actionLabel="Retry"
      onAction={() => navigation.goBack()}
    />
  </Screen>
);
