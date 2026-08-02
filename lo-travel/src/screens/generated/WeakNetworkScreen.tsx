import React from 'react';
import { Screen, StateScreen } from '../../components';

/** Error state screen: WeakNetwork */
export const WeakNetworkScreen: React.FC<{ navigation: any }> = ({ navigation }) => (
  <Screen scroll={false}>
    <StateScreen
      emoji="📶"
      title="Weak Network"
      message="Your connection seems slow right now."
      actionLabel="Retry"
      onAction={() => navigation.goBack()}
    />
  </Screen>
);
