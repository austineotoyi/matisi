/**
 * AuthNavigator — documents the authentication route group.
 * These routes are registered inside RootNavigator's single flattened stack
 * (so any screen can navigate to any other without nested-navigator ref
 * juggling), but are listed here as the canonical "auth flow" for reference
 * and for any future split into a dedicated navigator.
 */
export const AUTH_ROUTES = [
  'Splash',
  'Onboarding1',
  'Onboarding2',
  'Onboarding3',
  'Welcome',
  'ChooseLanguage',
  'ChooseCurrency',
  'Login',
  'Signup',
  'VerifyEmail',
  'VerifyOtp',
  'OtpSuccess',
  'ForgotPassword',
  'ResetPassword',
  'PasswordChanged',
  'BiometricSetup',
] as const;
