import React from 'react';
import { Screen, StateScreen } from '../../components';

/** Error state screen: ServiceUnavailable */
export const ServiceUnavailableScreen: React.FC<{ navigation: any }> = ({ navigation }) => (
  <Screen scroll={false}>
    <StateScreen
      emoji="⏳"
      title="Service Temporarily Unavailable"
      message="Please try again in a moment."
      actionLabel="Retry"
      onAction={() => navigation.goBack()}
    />
  </Screen>
);
