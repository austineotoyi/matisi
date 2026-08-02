import React from 'react';
import { Screen, StateScreen } from '../../components';

/** Error state screen: InvalidTravelDates */
export const InvalidTravelDatesScreen: React.FC<{ navigation: any }> = ({ navigation }) => (
  <Screen scroll={false}>
    <StateScreen
      emoji="📅"
      title="Invalid Travel Dates"
      message="Please try again in a moment."
      actionLabel="Retry"
      onAction={() => navigation.goBack()}
    />
  </Screen>
);
