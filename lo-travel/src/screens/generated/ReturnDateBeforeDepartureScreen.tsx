import React from 'react';
import { Screen, StateScreen } from '../../components';

/** Error state screen: ReturnDateBeforeDeparture */
export const ReturnDateBeforeDepartureScreen: React.FC<{ navigation: any }> = ({ navigation }) => (
  <Screen scroll={false}>
    <StateScreen
      emoji="📅"
      title="Return Date Before Departure"
      message="Please try again in a moment."
      actionLabel="Retry"
      onAction={() => navigation.goBack()}
    />
  </Screen>
);
