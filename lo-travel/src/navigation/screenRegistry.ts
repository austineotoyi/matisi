/**
 * screenRegistry — single source of truth for every route in the app.
 *
 * Every entry has its own dedicated screen component (see src/screens/**
 * and src/screens/generated/**, wired up in customScreenMap.ts). There is
 * no generic/fallback renderer — scripts/audit.js fails the build if any
 * route here doesn't resolve to a real, exported component.
 *
 * kind: 'content' | 'empty' | 'error' | 'list' | 'form'
 * (kind still drives which template a screen's content follows conceptually,
 * even though each is now its own file rather than a shared runtime renderer.)
 */
export type ScreenKind = 'content' | 'empty' | 'error' | 'list' | 'form';

export interface ScreenEntry {
  route: string;
  title: string;
  subtitle?: string;
  emoji?: string;
  kind: ScreenKind;
  /** true = hand-authored bespoke screen; false = generated dedicated screen (still its own file/component, see scripts/generate_dedicated_screens.js) */
  custom: boolean;
  actionLabel?: string;
  actionRoute?: string;
}

export const SCREEN_REGISTRY: ScreenEntry[] = [
  // ---- 1. App Launch ----
  { route: 'Splash', title: 'LO', kind: 'content', custom: true },
  { route: 'Onboarding1', title: 'Search flights, hotels & tours in one place', kind: 'content', custom: true },
  { route: 'Onboarding2', title: 'Book with confidence', subtitle: 'Transparent pricing, instant confirmation.', kind: 'content', custom: true },
  { route: 'Onboarding3', title: 'Travel, your way', subtitle: 'Personalized recommendations at every destination.', kind: 'content', custom: true },
  { route: 'Welcome', title: 'Welcome to LO', kind: 'content', custom: true },
  { route: 'ChooseLanguage', title: 'Choose Language', kind: 'list', custom: true },
  { route: 'ChooseCurrency', title: 'Choose Currency', kind: 'list', custom: true },

  // ---- 2. Authentication ----
  { route: 'Login', title: 'Log In', kind: 'form', custom: true },
  { route: 'Signup', title: 'Create Account', kind: 'form', custom: true },
  { route: 'VerifyEmail', title: 'Verify Your Email', kind: 'form', custom: true },
  { route: 'VerifyOtp', title: 'Enter Verification Code', kind: 'form', custom: true },
  { route: 'OtpSuccess', title: 'Verified!', emoji: '✅', kind: 'content', custom: false },
  { route: 'ForgotPassword', title: 'Forgot Password', kind: 'form', custom: true },
  { route: 'ResetPassword', title: 'Reset Password', kind: 'form', custom: true },
  { route: 'PasswordChanged', title: 'Password Changed', subtitle: 'You can now log in with your new password.', emoji: '🔒', kind: 'content', custom: false },
  { route: 'BiometricSetup', title: 'Enable Biometric Login', subtitle: 'Use Face ID or Fingerprint to sign in faster.', emoji: '🔐', kind: 'content', custom: false, actionLabel: 'Enable' },
  { route: 'BiometricLogin', title: 'Face ID / Fingerprint Login', subtitle: 'Confirm your identity to continue.', emoji: '🆔', kind: 'content', custom: true },

  // ---- 3. Home ----
  { route: 'Home', title: 'Home', kind: 'content', custom: true },
  { route: 'GlobalSearch', title: 'Search LO', kind: 'form', custom: false },
  { route: 'Notifications', title: 'Notifications', kind: 'list', custom: true },

  // ---- 4. Flight Search ----
  { route: 'FlightSearch', title: 'Search Flights', kind: 'form', custom: true },
  { route: 'AirportSelect', title: 'Select Airport', kind: 'list', custom: true },
  { route: 'DatePicker', title: 'Select Dates', kind: 'form', custom: false },
  { route: 'PassengerSelect', title: 'Passengers & Class', kind: 'form', custom: false },
  { route: 'FlightFilters', title: 'Filter Flights', kind: 'form', custom: false },

  // ---- 5. Flight Results ----
  { route: 'FlightResults', title: 'Flight Results', kind: 'list', custom: true },
  { route: 'FlightSort', title: 'Sort Flights', kind: 'form', custom: false },
  { route: 'FlightCompare', title: 'Compare Flights', kind: 'list', custom: false },
  { route: 'FlightDetails', title: 'Flight Details', kind: 'content', custom: true },
  { route: 'FareRules', title: 'Fare Rules', kind: 'content', custom: false },
  { route: 'BaggageDetails', title: 'Baggage Details', kind: 'content', custom: false },
  { route: 'AirlineDetails', title: 'Airline Information', kind: 'content', custom: false },

  // ---- 6. Passenger Information ----
  { route: 'PassengerInfo', title: 'Passenger Information', kind: 'form', custom: true },
  { route: 'SavedTravelers', title: 'Saved Travelers', kind: 'list', custom: false },
  { route: 'AddTraveler', title: 'Add New Traveler', kind: 'form', custom: false },
  { route: 'ContactInfo', title: 'Contact Details', kind: 'form', custom: true },
  { route: 'EmergencyContact', title: 'Emergency Contact', kind: 'form', custom: true },
  { route: 'TravelDocuments', title: 'Additional Travel Documents', kind: 'form', custom: true },
  { route: 'PassengerReview', title: 'Review Passenger Information', kind: 'content', custom: true },

  // ---- 7. Extras ----
  { route: 'SeatSelection', title: 'Choose Your Seats', kind: 'content', custom: true },
  { route: 'ExtraBaggage', title: 'Add Baggage', kind: 'list', custom: true },
  { route: 'MealSelection', title: 'Choose Your Meal', kind: 'list', custom: true },
  { route: 'SpecialAssistance', title: 'Additional Travel Services', kind: 'form', custom: true },
  { route: 'AirportTransfer', title: 'Book Airport Transfer', kind: 'list', custom: true },
  { route: 'PriorityBoarding', title: 'Priority Boarding', kind: 'content', custom: false },
  { route: 'LoungeAccess', title: 'Lounge Access', kind: 'content', custom: false },

  // ---- 8. Insurance ----
  { route: 'InsuranceOptions', title: 'Protect Your Journey', kind: 'list', custom: true },
  { route: 'InsuranceDetails', title: 'Plan Details', kind: 'content', custom: false },
  { route: 'InsuranceConfirmation', title: 'Insurance Added', emoji: '🛡️', kind: 'content', custom: false },

  // ---- 9. Payment ----
  { route: 'BookingSummary', title: 'Booking Summary', kind: 'content', custom: true },
  { route: 'PromoCode', title: 'Apply Promo Code', kind: 'form', custom: false },
  { route: 'PaymentMethod', title: 'Choose Payment Method', kind: 'form', custom: true },
  { route: 'ProcessingPayment', title: 'Processing Payment…', kind: 'content', custom: true },

  // ---- 10. Booking Success ----
  { route: 'BookingSuccess', title: 'Booking Successful', kind: 'content', custom: true },
  { route: 'ETicket', title: 'Your E-Ticket', kind: 'content', custom: true },
  { route: 'ShareTicket', title: 'Share Ticket', kind: 'content', custom: false },
  { route: 'Receipt', title: 'Receipt', kind: 'content', custom: true },

  // ---- 11. Smart Recommendations ----
  { route: 'RecommendedHotels', title: 'Hotels Near Your Destination', kind: 'list', custom: true },
  { route: 'HotelDetails', title: 'Hotel Details', kind: 'content', custom: true },
  { route: 'RoomSelection', title: 'Select Your Room', kind: 'list', custom: true },
  { route: 'HotelCheckout', title: 'Hotel Checkout', kind: 'content', custom: false },
  { route: 'HotelBookingSuccess', title: 'Hotel Booked!', emoji: '🏨', kind: 'content', custom: false },
  { route: 'RecommendedTours', title: 'Things To Do', kind: 'list', custom: true },
  { route: 'TourDetails', title: 'Tour Details', kind: 'content', custom: true },
  { route: 'TourCheckout', title: 'Tour Checkout', kind: 'content', custom: false },
  { route: 'TourBookingSuccess', title: 'Tour Booked!', emoji: '🌍', kind: 'content', custom: false },
  { route: 'CarRentalRecommendations', title: 'Car Rentals', kind: 'list', custom: true },
  { route: 'CarDetails', title: 'Car Details', kind: 'content', custom: false },
  { route: 'CarCheckout', title: 'Car Checkout', kind: 'content', custom: false },
  { route: 'CarBookingSuccess', title: 'Car Booked!', emoji: '🚗', kind: 'content', custom: false },
  { route: 'VisaRecommendation', title: 'Visa Services', kind: 'content', custom: false },
  { route: 'VisaRequirements', title: 'Visa Requirements', kind: 'content', custom: true },
  { route: 'VisaApplication', title: 'Visa Application', kind: 'form', custom: false },

  // ---- 12. My Trips ----
  { route: 'MyTrips', title: 'My Trips', kind: 'list', custom: true },
  { route: 'TripDetails', title: 'Trip Details', kind: 'content', custom: false },
  { route: 'UpcomingTrips', title: 'Upcoming Trips', kind: 'list', custom: true },
  { route: 'CompletedTrips', title: 'Completed Trips', kind: 'list', custom: true },
  { route: 'CancelledTrips', title: 'Cancelled Trips', kind: 'list', custom: true },

  // ---- 13. Profile ----
  { route: 'Profile', title: 'My Profile', kind: 'content', custom: true },
  { route: 'EditProfile', title: 'Edit Profile', kind: 'form', custom: false },
  { route: 'PassportManagement', title: 'Passport Management', kind: 'list', custom: false },
  { route: 'PassportDetails', title: 'Passport Details', kind: 'content', custom: true },
  { route: 'SavedCards', title: 'Saved Cards', kind: 'list', custom: true },
  { route: 'SavedAddresses', title: 'Saved Addresses', kind: 'list', custom: true },
  { route: 'NotificationSettings', title: 'Notification Settings', kind: 'form', custom: false },
  { route: 'PrivacySettings', title: 'Privacy Settings', kind: 'form', custom: false },
  { route: 'SecuritySettings', title: 'Security Settings', kind: 'form', custom: false },
  { route: 'ChangePassword', title: 'Change Password', kind: 'form', custom: false },
  { route: 'BiometricSettings', title: 'Biometric Settings', kind: 'form', custom: false },

  // ---- 14. Booking History ----
  { route: 'BookingHistory', title: 'Booking History', kind: 'list', custom: true },
  { route: 'PaymentHistory', title: 'Payment History', kind: 'list', custom: false },
  { route: 'RefundHistory', title: 'Refund History', kind: 'list', custom: false },
  { route: 'FlightHistory', title: 'Flight History', kind: 'list', custom: true },
  { route: 'HotelHistory', title: 'Hotel History', kind: 'list', custom: true },
  { route: 'TourHistory', title: 'Tour History', kind: 'list', custom: true },
  { route: 'CarRentalHistory', title: 'Car Rental History', kind: 'list', custom: true },
  { route: 'InsuranceHistory', title: 'Insurance History', kind: 'list', custom: true },
  { route: 'VisaApplicationHistory', title: 'Visa Application History', kind: 'list', custom: true },

  // ---- 15. Favorites ----
  { route: 'SavedFlights', title: 'Saved Flights', kind: 'list', custom: true },
  { route: 'SavedHotels', title: 'Saved Hotels', kind: 'list', custom: true },
  { route: 'SavedTours', title: 'Saved Tours', kind: 'list', custom: true },
  { route: 'Favorites', title: 'Wishlist', kind: 'list', custom: false },

  // ---- 16. Wallet ----
  { route: 'Wallet', title: 'Wallet', kind: 'content', custom: true },
  { route: 'WalletTransactions', title: 'Transactions', kind: 'list', custom: false },
  { route: 'AddFunds', title: 'Add Funds', kind: 'form', custom: false },
  { route: 'Withdraw', title: 'Withdraw', kind: 'form', custom: false },
  { route: 'Coupons', title: 'Coupons', kind: 'list', custom: false },
  { route: 'LoyaltyPoints', title: 'Loyalty Points', kind: 'content', custom: false },

  // ---- 18. Customer Support ----
  { route: 'HelpCenter', title: 'Help Center', kind: 'list', custom: true },
  { route: 'FAQs', title: 'FAQs', kind: 'list', custom: false },
  { route: 'LiveChat', title: 'Live Chat', kind: 'content', custom: true },
  { route: 'CreateTicket', title: 'Create Support Ticket', kind: 'form', custom: false },
  { route: 'MyTickets', title: 'My Support Tickets', kind: 'list', custom: false },
  { route: 'TicketDetails', title: 'Ticket Details', kind: 'content', custom: false },
  { route: 'ContactUs', title: 'Contact Us', kind: 'content', custom: false },

  // ---- 19. Settings ----
  { route: 'Settings', title: 'Settings', kind: 'list', custom: true },
  { route: 'Appearance', title: 'Appearance', kind: 'form', custom: false },
  { route: 'Permissions', title: 'Permissions', kind: 'list', custom: false },
  { route: 'About', title: 'About LO', kind: 'content', custom: false },
  { route: 'TermsAndConditions', title: 'Terms & Conditions', kind: 'content', custom: false },
  { route: 'PrivacyPolicy', title: 'Privacy Policy', kind: 'content', custom: false },

  // ---- 20. Flight Status ----
  { route: 'TrackFlight', title: 'Track Flight', kind: 'content', custom: false },
  { route: 'LiveFlightStatus', title: 'Live Flight Status', kind: 'content', custom: false },
  { route: 'GateInformation', title: 'Gate Information', kind: 'content', custom: false },
  { route: 'BoardingUpdates', title: 'Boarding Updates', kind: 'content', custom: false },

  // ---- 21. Error & Empty States ----
  { route: 'NoInternet', title: 'No Internet Connection', subtitle: 'Check your connection and try again.', emoji: '📡', kind: 'error', custom: false, actionLabel: 'Retry' },
  { route: 'WeakNetwork', title: 'Weak Network', subtitle: 'Your connection seems slow right now.', emoji: '📶', kind: 'error', custom: false, actionLabel: 'Retry' },
  { route: 'ServerMaintenance', title: 'Under Maintenance', subtitle: "We're making things better. Please check back soon.", emoji: '🛠️', kind: 'error', custom: false },
  { route: 'ServerError500', title: 'Something Broke On Our End', subtitle: 'Our team has been notified.', emoji: '⚠️', kind: 'error', custom: false, actionLabel: 'Retry' },
  { route: 'ServiceUnavailable', title: 'Service Temporarily Unavailable', emoji: '⏳', kind: 'error', custom: false, actionLabel: 'Retry' },
  { route: 'RequestTimedOut', title: 'Request Timed Out', emoji: '⌛', kind: 'error', custom: false, actionLabel: 'Retry' },
  { route: 'SomethingWentWrong', title: 'Something Went Wrong', emoji: '😕', kind: 'error', custom: false, actionLabel: 'Retry' },
  { route: 'UpdateRequired', title: 'Update Required', subtitle: 'Please update the app to continue.', emoji: '⬆️', kind: 'error', custom: false, actionLabel: 'Update Now' },

  // ---- 22. Search Errors ----
  { route: 'NoFlightsAvailable', title: 'No Flights Available', subtitle: 'Try different dates or airports.', emoji: '✈️', kind: 'empty', custom: false },
  { route: 'NoHotelsAvailable', title: 'No Hotels Available', emoji: '🏨', kind: 'empty', custom: false },
  { route: 'NoToursAvailable', title: 'No Tours Available', emoji: '🌍', kind: 'empty', custom: false },
  { route: 'NoCarsAvailable', title: 'No Cars Available', emoji: '🚗', kind: 'empty', custom: false },
  { route: 'NoFlightsBetweenCities', title: 'No Flights Between Selected Cities', emoji: '✈️', kind: 'empty', custom: false },
  { route: 'DepartureAirportNotSupported', title: 'Departure Airport Not Supported', emoji: '🛫', kind: 'error', custom: false },
  { route: 'DestinationAirportNotSupported', title: 'Destination Airport Not Supported', emoji: '🛬', kind: 'error', custom: false },
  { route: 'InvalidTravelDates', title: 'Invalid Travel Dates', emoji: '📅', kind: 'error', custom: false },
  { route: 'ReturnDateBeforeDeparture', title: 'Return Date Before Departure', emoji: '📅', kind: 'error', custom: false },
  { route: 'SeatsSoldOut', title: 'Seats Sold Out', emoji: '💺', kind: 'error', custom: false },
  { route: 'FareExpired', title: 'Fare Expired', subtitle: 'Please search again for the latest price.', emoji: '⏱️', kind: 'error', custom: false, actionLabel: 'Search Again' },
  { route: 'PriceChanged', title: 'Price Changed', subtitle: 'The fare has changed since you started.', emoji: '💲', kind: 'error', custom: false },
  { route: 'AirlineNotAvailable', title: 'Airline Not Available', emoji: '✈️', kind: 'error', custom: false },
  { route: 'FlightCancelled', title: 'Flight Cancelled', emoji: '❌', kind: 'error', custom: false },
  { route: 'FlightDelayed', title: 'Flight Delayed', emoji: '🕓', kind: 'content', custom: false },

  // ---- 23. Payment Errors ----
  { route: 'PaymentFailed', title: 'Payment Failed', subtitle: 'Please try a different payment method.', emoji: '💳', kind: 'error', custom: true, actionLabel: 'Try Again' },
  { route: 'PaymentCancelled', title: 'Payment Cancelled', emoji: '🚫', kind: 'error', custom: false },
  { route: 'InsufficientFunds', title: 'Insufficient Funds', emoji: '💳', kind: 'error', custom: false },
  { route: 'CardDeclined', title: 'Card Declined', emoji: '💳', kind: 'error', custom: false },
  { route: 'OtpVerificationFailed', title: 'OTP Verification Failed', emoji: '🔑', kind: 'error', custom: false },
  { route: 'PaymentTimeout', title: 'Payment Timeout', emoji: '⌛', kind: 'error', custom: false },
  { route: 'DuplicatePaymentDetected', title: 'Duplicate Payment Detected', emoji: '⚠️', kind: 'error', custom: false },

  // ---- 24. Authentication Errors ----
  { route: 'InvalidEmail', title: 'Invalid Email', emoji: '✉️', kind: 'error', custom: false },
  { route: 'InvalidPassword', title: 'Invalid Password', emoji: '🔒', kind: 'error', custom: false },
  { route: 'IncorrectOtp', title: 'Incorrect Code', emoji: '🔑', kind: 'error', custom: false },
  { route: 'AccountNotVerified', title: 'Account Not Verified', emoji: '📧', kind: 'error', custom: false },
  { route: 'SessionExpired', title: 'Session Expired', subtitle: 'Please log in again.', emoji: '⏰', kind: 'error', custom: false, actionLabel: 'Log In' },
  { route: 'TooManyLoginAttempts', title: 'Too Many Login Attempts', emoji: '🚫', kind: 'error', custom: false },
  { route: 'AccountLocked', title: 'Account Locked', emoji: '🔒', kind: 'error', custom: false },

  // ---- 25. Booking Management ----
  { route: 'ModifyBooking', title: 'Modify Booking', kind: 'form', custom: false },
  { route: 'ChangeFlight', title: 'Change Flight', kind: 'form', custom: false },
  { route: 'CancelBooking', title: 'Cancel Booking', kind: 'content', custom: false },
  { route: 'RefundRequest', title: 'Refund Request', kind: 'form', custom: false },
  { route: 'RefundApproved', title: 'Refund Approved', emoji: '✅', kind: 'content', custom: false },
  { route: 'RefundRejected', title: 'Refund Rejected', emoji: '❌', kind: 'content', custom: false },

  // ---- 26. Miscellaneous ----
  { route: 'MaintenanceNotice', title: 'Scheduled Maintenance', emoji: '🛠️', kind: 'content', custom: false },
  { route: 'AppUpdateAvailable', title: 'App Update Available', emoji: '⬆️', kind: 'content', custom: false, actionLabel: 'Update' },
  { route: 'OfflineMode', title: "You're Offline", subtitle: 'Some features are limited without a connection.', emoji: '📴', kind: 'content', custom: false },
  { route: 'LocationPermission', title: 'Location Permission Required', emoji: '📍', kind: 'content', custom: false, actionLabel: 'Enable' },
  { route: 'NotificationPermission', title: 'Notification Permission Required', emoji: '🔔', kind: 'content', custom: false, actionLabel: 'Enable' },
  { route: 'NotFound404', title: 'Page Not Found', emoji: '🔍', kind: 'error', custom: false },
  { route: 'EmptyState', title: 'Nothing Here Yet', emoji: '📭', kind: 'empty', custom: false },
  { route: 'ComingSoon', title: 'Coming Soon', emoji: '🚧', kind: 'content', custom: false },
  { route: 'SessionTimeout', title: 'Session Timed Out', emoji: '⏰', kind: 'error', custom: false },
  { route: 'AccountDeleted', title: 'Account Deleted', emoji: '👋', kind: 'content', custom: false },
  { route: 'Goodbye', title: 'See You Soon', subtitle: 'Thanks for traveling with LO.', emoji: '👋', kind: 'content', custom: false },
];
