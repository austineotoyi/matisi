import React from 'react';
import { Screen, StateScreen } from '../../components';

/** Empty state screen: NoToursAvailable */
export const NoToursAvailableScreen: React.FC<{ navigation: any }> = ({ navigation }) => (
  <Screen scroll={false}>
    <StateScreen
      emoji="🌍"
      title="No Tours Available"
      message="Nothing to show here yet."
      
    />
  </Screen>
);
