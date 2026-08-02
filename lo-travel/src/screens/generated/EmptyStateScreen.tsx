import React from 'react';
import { Screen, StateScreen } from '../../components';

/** Empty state screen: EmptyState */
export const EmptyStateScreen: React.FC<{ navigation: any }> = ({ navigation }) => (
  <Screen scroll={false}>
    <StateScreen
      emoji="📭"
      title="Nothing Here Yet"
      message="Nothing to show here yet."
      
    />
  </Screen>
);
