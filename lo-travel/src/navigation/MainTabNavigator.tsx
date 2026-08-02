import React from 'react';
import { Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from '../screens/home/HomeScreen';
import { FlightSearchScreen } from '../screens/flights/FlightSearchScreen';
import { RecommendedHotelsScreen } from '../screens/hotels/RecommendedHotelsScreen';
import { RecommendedToursScreen } from '../screens/tours/ToursScreen';
import { ProfileScreen } from '../screens/profile/ProfileScreen';
import { colors } from '../theme';

const Tab = createBottomTabNavigator();

const TAB_ICONS: Record<string, string> = {
  HomeTab: '🏠',
  FlightsTab: '✈️',
  HotelsTab: '🏨',
  ToursTab: '🌍',
  ProfileTab: '👤',
};

/** Bottom Navigation per spec: Home | Flights | Hotels | Tours | Profile. */
export const MainTabNavigator: React.FC = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      headerShown: false,
      tabBarActiveTintColor: colors.navActive,
      tabBarInactiveTintColor: colors.navInactive,
      tabBarIcon: () => <Text style={{ fontSize: 20 }}>{TAB_ICONS[route.name]}</Text>,
      tabBarAccessibilityLabel: route.name,
    })}
  >
    <Tab.Screen name="HomeTab" component={HomeScreen} options={{ tabBarLabel: 'Home' }} />
    <Tab.Screen name="FlightsTab" component={FlightSearchScreen} options={{ tabBarLabel: 'Flights' }} />
    <Tab.Screen name="HotelsTab" component={RecommendedHotelsScreen} options={{ tabBarLabel: 'Hotels' }} />
    <Tab.Screen name="ToursTab" component={RecommendedToursScreen} options={{ tabBarLabel: 'Tours' }} />
    <Tab.Screen name="ProfileTab" component={ProfileScreen} options={{ tabBarLabel: 'Profile' }} />
  </Tab.Navigator>
);
