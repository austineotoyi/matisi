import React from 'react';
import { Screen, StateScreen } from '../../components';

/** Error state screen: ServerError500 */
export const ServerError500Screen: React.FC<{ navigation: any }> = ({ navigation }) => (
  <Screen scroll={false}>
    <StateScreen
      emoji="⚠️"
      title="Something Broke On Our End"
      message="Our team has been notified."
      actionLabel="Retry"
      onAction={() => navigation.goBack()}
    />
  </Screen>
);
