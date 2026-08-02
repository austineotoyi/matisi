import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MainTabNavigator } from './MainTabNavigator';
import { customScreenMap } from './customScreenMap';
import { SCREEN_REGISTRY } from './screenRegistry';
import { linking } from './linking';

const Stack = createNativeStackNavigator();

// Routes rendered by MainTabNavigator itself — don't double-register as top-level stack screens.
const TAB_OWNED_ROUTES = new Set(['Home']);

/**
 * RootNavigator — every screen named in the functional spec has its own
 * dedicated component (see src/screens/**), registered here via
 * customScreenMap. There is no generic/fallback renderer: customScreenMap is
 * exhaustive over screenRegistry.ts by construction, and scripts/audit.js
 * fails the build if that ever stops being true.
 */
export const RootNavigator: React.FC = () => (
  <NavigationContainer linking={linking}>
    <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Main" component={MainTabNavigator} />
      {SCREEN_REGISTRY.filter((s) => !TAB_OWNED_ROUTES.has(s.route)).map((entry) => (
        <Stack.Screen
          key={entry.route}
          name={entry.route}
          component={customScreenMap[entry.route]}
          options={{ animation: 'slide_from_right' }}
        />
      ))}
    </Stack.Navigator>
  </NavigationContainer>
);
