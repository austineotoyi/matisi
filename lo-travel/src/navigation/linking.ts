import { LinkingOptions } from '@react-navigation/native';
import { SCREEN_REGISTRY } from './screenRegistry';

/** Deep link every registered screen under lotravel://<RouteName>, prepared for future use. */
const screens: Record<string, string> = {};
SCREEN_REGISTRY.forEach((entry) => {
  screens[entry.route] = entry.route;
});

export const linking: LinkingOptions<any> = {
  prefixes: ['lotravel://', 'https://app.lotravel.com'],
  config: {
    screens: {
      Main: '',
      ...screens,
    },
  },
};
