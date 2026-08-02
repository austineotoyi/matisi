import React from 'react';
import { Screen, StateScreen } from '../../components';

/** Error state screen: CardDeclined */
export const CardDeclinedScreen: React.FC<{ navigation: any }> = ({ navigation }) => (
  <Screen scroll={false}>
    <StateScreen
      emoji="💳"
      title="Card Declined"
      message="Please try again in a moment."
      actionLabel="Retry"
      onAction={() => navigation.goBack()}
    />
  </Screen>
);
