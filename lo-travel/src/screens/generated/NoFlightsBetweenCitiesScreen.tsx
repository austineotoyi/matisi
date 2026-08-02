import React from 'react';
import { Screen, StateScreen } from '../../components';

/** Empty state screen: NoFlightsBetweenCities */
export const NoFlightsBetweenCitiesScreen: React.FC<{ navigation: any }> = ({ navigation }) => (
  <Screen scroll={false}>
    <StateScreen
      emoji="✈️"
      title="No Flights Between Selected Cities"
      message="Nothing to show here yet."
      
    />
  </Screen>
);
