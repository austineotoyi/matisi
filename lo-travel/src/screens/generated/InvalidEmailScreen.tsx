import React from 'react';
import { Screen, StateScreen } from '../../components';

/** Error state screen: InvalidEmail */
export const InvalidEmailScreen: React.FC<{ navigation: any }> = ({ navigation }) => (
  <Screen scroll={false}>
    <StateScreen
      emoji="✉️"
      title="Invalid Email"
      message="Please try again in a moment."
      actionLabel="Retry"
      onAction={() => navigation.goBack()}
    />
  </Screen>
);
