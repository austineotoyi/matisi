import React from 'react';
import { Screen, StateScreen } from '../../components';

/** Error state screen: UpdateRequired */
export const UpdateRequiredScreen: React.FC<{ navigation: any }> = ({ navigation }) => (
  <Screen scroll={false}>
    <StateScreen
      emoji="⬆️"
      title="Update Required"
      message="Please update the app to continue."
      actionLabel="Update Now"
      onAction={() => navigation.goBack()}
    />
  </Screen>
);
