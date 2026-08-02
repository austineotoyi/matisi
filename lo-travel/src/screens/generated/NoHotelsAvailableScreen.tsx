import React from 'react';
import { Screen, StateScreen } from '../../components';

/** Empty state screen: NoHotelsAvailable */
export const NoHotelsAvailableScreen: React.FC<{ navigation: any }> = ({ navigation }) => (
  <Screen scroll={false}>
    <StateScreen
      emoji="🏨"
      title="No Hotels Available"
      message="Nothing to show here yet."
      
    />
  </Screen>
);
