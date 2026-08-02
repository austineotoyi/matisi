import React from 'react';
import { Screen, StateScreen } from '../../components';

/** Error state screen: RequestTimedOut */
export const RequestTimedOutScreen: React.FC<{ navigation: any }> = ({ navigation }) => (
  <Screen scroll={false}>
    <StateScreen
      emoji="⌛"
      title="Request Timed Out"
      message="Please try again in a moment."
      actionLabel="Retry"
      onAction={() => navigation.goBack()}
    />
  </Screen>
);
