import React from 'react';
import { Screen, StateScreen } from '../../components';

/** Error state screen: AccountNotVerified */
export const AccountNotVerifiedScreen: React.FC<{ navigation: any }> = ({ navigation }) => (
  <Screen scroll={false}>
    <StateScreen
      emoji="📧"
      title="Account Not Verified"
      message="Please try again in a moment."
      actionLabel="Retry"
      onAction={() => navigation.goBack()}
    />
  </Screen>
);
