import React from 'react';
import { Screen, StateScreen } from '../../components';

/** Error state screen: ServerMaintenance */
export const ServerMaintenanceScreen: React.FC<{ navigation: any }> = ({ navigation }) => (
  <Screen scroll={false}>
    <StateScreen
      emoji="🛠️"
      title="Under Maintenance"
      message="Please try again in a moment."
      actionLabel="Retry"
      onAction={() => navigation.goBack()}
    />
  </Screen>
);
