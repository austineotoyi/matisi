import React from 'react';
import { Screen, StateScreen } from '../../components';

/** Empty state screen: NoCarsAvailable */
export const NoCarsAvailableScreen: React.FC<{ navigation: any }> = ({ navigation }) => (
  <Screen scroll={false}>
    <StateScreen
      emoji="🚗"
      title="No Cars Available"
      message="Nothing to show here yet."
      
    />
  </Screen>
);
