import React from 'react';
import { Screen, StateScreen } from '../../components';

/** Error state screen: NoInternet */
export const NoInternetScreen: React.FC<{ navigation: any }> = ({ navigation }) => (
  <Screen scroll={false}>
    <StateScreen
      emoji="📡"
      title="No Internet Connection"
      message="Check your connection and try again."
      actionLabel="Retry"
      onAction={() => navigation.goBack()}
    />
  </Screen>
);
