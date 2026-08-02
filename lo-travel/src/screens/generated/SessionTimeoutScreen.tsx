import React from 'react';
import { Screen, StateScreen } from '../../components';

/** Error state screen: SessionTimeout */
export const SessionTimeoutScreen: React.FC<{ navigation: any }> = ({ navigation }) => (
  <Screen scroll={false}>
    <StateScreen
      emoji="⏰"
      title="Session Timed Out"
      message="Please try again in a moment."
      actionLabel="Retry"
      onAction={() => navigation.goBack()}
    />
  </Screen>
);
