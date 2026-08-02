import React from 'react';
import { Screen, StateScreen } from '../../components';

/** Error state screen: SeatsSoldOut */
export const SeatsSoldOutScreen: React.FC<{ navigation: any }> = ({ navigation }) => (
  <Screen scroll={false}>
    <StateScreen
      emoji="💺"
      title="Seats Sold Out"
      message="Please try again in a moment."
      actionLabel="Retry"
      onAction={() => navigation.goBack()}
    />
  </Screen>
);
