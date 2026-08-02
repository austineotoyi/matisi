import React from 'react';
import { Screen, StateScreen } from '../../components';

/** Error state screen: FareExpired */
export const FareExpiredScreen: React.FC<{ navigation: any }> = ({ navigation }) => (
  <Screen scroll={false}>
    <StateScreen
      emoji="⏱️"
      title="Fare Expired"
      message="Please search again for the latest price."
      actionLabel="Search Again"
      onAction={() => navigation.goBack()}
    />
  </Screen>
);
