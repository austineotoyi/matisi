import React from 'react';
import { Screen, StateScreen } from '../../components';

/** Error state screen: SomethingWentWrong */
export const SomethingWentWrongScreen: React.FC<{ navigation: any }> = ({ navigation }) => (
  <Screen scroll={false}>
    <StateScreen
      emoji="😕"
      title="Something Went Wrong"
      message="Please try again in a moment."
      actionLabel="Retry"
      onAction={() => navigation.goBack()}
    />
  </Screen>
);
