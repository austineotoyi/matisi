import React from 'react';
import { Screen, StateScreen } from '../../components';

/** Error state screen: PriceChanged */
export const PriceChangedScreen: React.FC<{ navigation: any }> = ({ navigation }) => (
  <Screen scroll={false}>
    <StateScreen
      emoji="💲"
      title="Price Changed"
      message="The fare has changed since you started."
      actionLabel="Retry"
      onAction={() => navigation.goBack()}
    />
  </Screen>
);
