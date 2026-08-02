import React from 'react';
import { Screen, StateScreen } from '../../components';

/** Error state screen: NotFound404 */
export const NotFound404Screen: React.FC<{ navigation: any }> = ({ navigation }) => (
  <Screen scroll={false}>
    <StateScreen
      emoji="🔍"
      title="Page Not Found"
      message="Please try again in a moment."
      actionLabel="Retry"
      onAction={() => navigation.goBack()}
    />
  </Screen>
);
