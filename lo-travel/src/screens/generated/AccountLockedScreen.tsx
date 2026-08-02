import React from 'react';
import { Screen, StateScreen } from '../../components';

/** Error state screen: AccountLocked */
export const AccountLockedScreen: React.FC<{ navigation: any }> = ({ navigation }) => (
  <Screen scroll={false}>
    <StateScreen
      emoji="🔒"
      title="Account Locked"
      message="Please try again in a moment."
      actionLabel="Retry"
      onAction={() => navigation.goBack()}
    />
  </Screen>
);
