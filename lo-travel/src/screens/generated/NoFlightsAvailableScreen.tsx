import React from 'react';
import { Screen, StateScreen } from '../../components';

/** Empty state screen: NoFlightsAvailable */
export const NoFlightsAvailableScreen: React.FC<{ navigation: any }> = ({ navigation }) => (
  <Screen scroll={false}>
    <StateScreen
      emoji="✈️"
      title="No Flights Available"
      message="Try different dates or airports."
      
    />
  </Screen>
);
