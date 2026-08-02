import React from 'react';
import { Screen, StateScreen } from '../../components';

/** Error state screen: SessionExpired */
export const SessionExpiredScreen: React.FC<{ navigation: any }> = ({ navigation }) => (
  <Screen scroll={false}>
    <StateScreen
      emoji="⏰"
      title="Session Expired"
      message="Please log in again."
      actionLabel="Log In"
      onAction={() => navigation.goBack()}
    />
  </Screen>
);
