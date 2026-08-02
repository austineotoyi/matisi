export { SplashScreen } from './onboarding/SplashScreen';
export { OnboardingScreen } from './onboarding/OnboardingScreen';
export { WelcomeScreen } from './onboarding/WelcomeScreen';
export { ChooseLanguageScreen, ChooseCurrencyScreen } from './onboarding/ChooseLanguageCurrencyScreen';

export { LoginScreen } from './auth/LoginScreen';
export { SignupScreen } from './auth/SignupScreen';
export { VerifyOtpScreen, VerifyEmailScreen } from './auth/VerifyOtpScreen';
export { ForgotPasswordScreen, ResetPasswordScreen } from './auth/ForgotPasswordScreen';

export { HomeScreen } from './home/HomeScreen';
export { NotificationsScreen } from './home/NotificationsScreen';

export { FlightSearchScreen } from './flights/FlightSearchScreen';
export { AirportSelectScreen } from './flights/AirportSelectScreen';
export { FlightResultsScreen } from './flights/FlightResultsScreen';
export { FlightDetailsScreen } from './flights/FlightDetailsScreen';

export { PassengerInfoScreen } from './passengers/PassengerInfoScreen';
export { ContactInfoScreen, EmergencyContactScreen, TravelDocumentsScreen } from './passengers/ContactEmergencyDocumentsScreen';
export { PassengerReviewScreen } from './passengers/PassengerReviewScreen';

export { SeatSelectionScreen } from './extras/SeatSelectionScreen';
export { ExtraBaggageScreen, MealSelectionScreen, SpecialAssistanceScreen } from './extras/BaggageMealAssistanceScreen';
export { AirportTransferScreen } from './extras/AirportTransferScreen';

export { InsuranceOptionsScreen } from './insurance/InsuranceOptionsScreen';

export { BookingSummaryScreen } from './payment/BookingSummaryScreen';
export { PaymentMethodScreen } from './payment/PaymentMethodScreen';
export { ProcessingPaymentScreen } from './payment/ProcessingPaymentScreen';
export { PaymentFailedScreen } from './payment/PaymentFailedScreen';

export { BookingSuccessScreen } from './confirmation/BookingSuccessScreen';
export { ETicketScreen, ReceiptScreen } from './confirmation/ETicketReceiptScreen';

export { RecommendedHotelsScreen } from './hotels/RecommendedHotelsScreen';
export { HotelDetailsScreen, RoomSelectionScreen } from './hotels/HotelDetailsRoomsScreen';

export { RecommendedToursScreen, TourDetailsScreen } from './tours/ToursScreen';

export { CarRentalRecommendationsScreen } from './cars/CarsScreen';

export { VisaRequirementsScreen } from './visa/VisaScreen';

export { MyTripsScreen } from './trips/MyTripsScreen';

export { ProfileScreen } from './profile/ProfileScreen';
export { BookingHistoryScreen } from './profile/BookingHistoryScreen';

export { WalletScreen } from './wallet/WalletScreen';

export { HelpCenterScreen, LiveChatScreen, ContactUsScreen } from './support/SupportScreen';

export { SettingsScreen } from './settings/SettingsScreen';

// ---- Generated dedicated screens (Phase: removing the shared fallback renderer) ----
export { AboutScreen } from './generated/AboutScreen';
export { AccountDeletedScreen } from './generated/AccountDeletedScreen';
export { AccountLockedScreen } from './generated/AccountLockedScreen';
export { AccountNotVerifiedScreen } from './generated/AccountNotVerifiedScreen';
export { AddFundsScreen } from './generated/AddFundsScreen';
export { AddTravelerScreen } from './generated/AddTravelerScreen';
export { AirlineDetailsScreen } from './generated/AirlineDetailsScreen';
export { AirlineNotAvailableScreen } from './generated/AirlineNotAvailableScreen';
export { AppUpdateAvailableScreen } from './generated/AppUpdateAvailableScreen';
export { AppearanceScreen } from './generated/AppearanceScreen';
export { BaggageDetailsScreen } from './generated/BaggageDetailsScreen';
export { BiometricSettingsScreen } from './generated/BiometricSettingsScreen';
export { BiometricSetupScreen } from './generated/BiometricSetupScreen';
export { BoardingUpdatesScreen } from './generated/BoardingUpdatesScreen';
export { CancelBookingScreen } from './generated/CancelBookingScreen';
export { CarBookingSuccessScreen } from './generated/CarBookingSuccessScreen';
export { CarCheckoutScreen } from './generated/CarCheckoutScreen';
export { CarDetailsScreen } from './generated/CarDetailsScreen';
export { CardDeclinedScreen } from './generated/CardDeclinedScreen';
export { ChangeFlightScreen } from './generated/ChangeFlightScreen';
export { ChangePasswordScreen } from './generated/ChangePasswordScreen';
export { ComingSoonScreen } from './generated/ComingSoonScreen';
export { CouponsScreen } from './generated/CouponsScreen';
export { CreateTicketScreen } from './generated/CreateTicketScreen';
export { DatePickerScreen } from './generated/DatePickerScreen';
export { DepartureAirportNotSupportedScreen } from './generated/DepartureAirportNotSupportedScreen';
export { DestinationAirportNotSupportedScreen } from './generated/DestinationAirportNotSupportedScreen';
export { DuplicatePaymentDetectedScreen } from './generated/DuplicatePaymentDetectedScreen';
export { EditProfileScreen } from './generated/EditProfileScreen';
export { EmptyStateScreen } from './generated/EmptyStateScreen';
export { FAQsScreen } from './generated/FAQsScreen';
export { FareExpiredScreen } from './generated/FareExpiredScreen';
export { FareRulesScreen } from './generated/FareRulesScreen';
export { FavoritesScreen } from './generated/FavoritesScreen';
export { FlightCancelledScreen } from './generated/FlightCancelledScreen';
export { FlightCompareScreen } from './generated/FlightCompareScreen';
export { FlightDelayedScreen } from './generated/FlightDelayedScreen';
export { FlightFiltersScreen } from './generated/FlightFiltersScreen';
export { FlightSortScreen } from './generated/FlightSortScreen';
export { GateInformationScreen } from './generated/GateInformationScreen';
export { GlobalSearchScreen } from './generated/GlobalSearchScreen';
export { GoodbyeScreen } from './generated/GoodbyeScreen';
export { HotelBookingSuccessScreen } from './generated/HotelBookingSuccessScreen';
export { HotelCheckoutScreen } from './generated/HotelCheckoutScreen';
export { IncorrectOtpScreen } from './generated/IncorrectOtpScreen';
export { InsuranceConfirmationScreen } from './generated/InsuranceConfirmationScreen';
export { InsuranceDetailsScreen } from './generated/InsuranceDetailsScreen';
export { InsufficientFundsScreen } from './generated/InsufficientFundsScreen';
export { InvalidEmailScreen } from './generated/InvalidEmailScreen';
export { InvalidPasswordScreen } from './generated/InvalidPasswordScreen';
export { InvalidTravelDatesScreen } from './generated/InvalidTravelDatesScreen';
export { LiveFlightStatusScreen } from './generated/LiveFlightStatusScreen';
export { LocationPermissionScreen } from './generated/LocationPermissionScreen';
export { LoungeAccessScreen } from './generated/LoungeAccessScreen';
export { LoyaltyPointsScreen } from './generated/LoyaltyPointsScreen';
export { MaintenanceNoticeScreen } from './generated/MaintenanceNoticeScreen';
export { ModifyBookingScreen } from './generated/ModifyBookingScreen';
export { MyTicketsScreen } from './generated/MyTicketsScreen';
export { NoCarsAvailableScreen } from './generated/NoCarsAvailableScreen';
export { NoFlightsAvailableScreen } from './generated/NoFlightsAvailableScreen';
export { NoFlightsBetweenCitiesScreen } from './generated/NoFlightsBetweenCitiesScreen';
export { NoHotelsAvailableScreen } from './generated/NoHotelsAvailableScreen';
export { NoInternetScreen } from './generated/NoInternetScreen';
export { NoToursAvailableScreen } from './generated/NoToursAvailableScreen';
export { NotFound404Screen } from './generated/NotFound404Screen';
export { NotificationPermissionScreen } from './generated/NotificationPermissionScreen';
export { NotificationSettingsScreen } from './generated/NotificationSettingsScreen';
export { OfflineModeScreen } from './generated/OfflineModeScreen';
export { OtpSuccessScreen } from './generated/OtpSuccessScreen';
export { OtpVerificationFailedScreen } from './generated/OtpVerificationFailedScreen';
export { PassengerSelectScreen } from './generated/PassengerSelectScreen';
export { PassportManagementScreen } from './generated/PassportManagementScreen';
export { PasswordChangedScreen } from './generated/PasswordChangedScreen';
export { PaymentCancelledScreen } from './generated/PaymentCancelledScreen';
export { PaymentHistoryScreen } from './generated/PaymentHistoryScreen';
export { PaymentTimeoutScreen } from './generated/PaymentTimeoutScreen';
export { PermissionsScreen } from './generated/PermissionsScreen';
export { PriceChangedScreen } from './generated/PriceChangedScreen';
export { PriorityBoardingScreen } from './generated/PriorityBoardingScreen';
export { PrivacyPolicyScreen } from './generated/PrivacyPolicyScreen';
export { PrivacySettingsScreen } from './generated/PrivacySettingsScreen';
export { PromoCodeScreen } from './generated/PromoCodeScreen';
export { RefundApprovedScreen } from './generated/RefundApprovedScreen';
export { RefundHistoryScreen } from './generated/RefundHistoryScreen';
export { RefundRejectedScreen } from './generated/RefundRejectedScreen';
export { RefundRequestScreen } from './generated/RefundRequestScreen';
export { RequestTimedOutScreen } from './generated/RequestTimedOutScreen';
export { ReturnDateBeforeDepartureScreen } from './generated/ReturnDateBeforeDepartureScreen';
export { SavedTravelersScreen } from './generated/SavedTravelersScreen';
export { SecuritySettingsScreen } from './generated/SecuritySettingsScreen';
export { SeatsSoldOutScreen } from './generated/SeatsSoldOutScreen';
export { ServerError500Screen } from './generated/ServerError500Screen';
export { ServerMaintenanceScreen } from './generated/ServerMaintenanceScreen';
export { ServiceUnavailableScreen } from './generated/ServiceUnavailableScreen';
export { SessionExpiredScreen } from './generated/SessionExpiredScreen';
export { SessionTimeoutScreen } from './generated/SessionTimeoutScreen';
export { ShareTicketScreen } from './generated/ShareTicketScreen';
export { SomethingWentWrongScreen } from './generated/SomethingWentWrongScreen';
export { TicketDetailsScreen } from './generated/TicketDetailsScreen';
export { TermsAndConditionsScreen } from './generated/TermsAndConditionsScreen';
export { TooManyLoginAttemptsScreen } from './generated/TooManyLoginAttemptsScreen';
export { TourBookingSuccessScreen } from './generated/TourBookingSuccessScreen';
export { TourCheckoutScreen } from './generated/TourCheckoutScreen';
export { TrackFlightScreen } from './generated/TrackFlightScreen';
export { TripDetailsScreen } from './generated/TripDetailsScreen';
export { UpdateRequiredScreen } from './generated/UpdateRequiredScreen';
export { VisaApplicationScreen } from './generated/VisaApplicationScreen';
export { VisaRecommendationScreen } from './generated/VisaRecommendationScreen';
export { WalletTransactionsScreen } from './generated/WalletTransactionsScreen';
export { WeakNetworkScreen } from './generated/WeakNetworkScreen';
export { WithdrawScreen } from './generated/WithdrawScreen';

// ---- Screens added to close the 212-spec vs 163-registry gap ----
export { PassportDetailsScreen } from './profile/PassportDetailsScreen';
export { SavedCardsScreen } from './profile/SavedCardsScreen';
export { SavedAddressesScreen } from './profile/SavedAddressesScreen';
export { BiometricLoginScreen } from './auth/BiometricLoginScreen';
export { UpcomingTripsScreen, CompletedTripsScreen, CancelledTripsScreen } from './trips/TripFilterScreens';
export {
  FlightHistoryScreen,
  HotelHistoryScreen,
  TourHistoryScreen,
  CarRentalHistoryScreen,
  InsuranceHistoryScreen,
  VisaApplicationHistoryScreen,
} from './profile/CategoryHistoryScreens';
export { SavedFlightsScreen, SavedHotelsScreen, SavedToursScreen } from './trips/SavedItemsScreens';
