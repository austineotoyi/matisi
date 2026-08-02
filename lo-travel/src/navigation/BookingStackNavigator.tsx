/**
 * BookingStackNavigator — documents the flight-booking route group, in the
 * exact order defined by the Booking Progress stepper. Registered inside
 * RootNavigator's flattened stack; listed here for reference/future split.
 */
export const BOOKING_ROUTES = [
  'FlightSearch',
  'AirportSelect',
  'FlightResults',
  'FlightDetails',
  'FareRules',
  'BaggageDetails',
  'PassengerInfo',
  'SavedTravelers',
  'AddTraveler',
  'ContactInfo',
  'EmergencyContact',
  'TravelDocuments',
  'PassengerReview',
  'SeatSelection',
  'ExtraBaggage',
  'MealSelection',
  'SpecialAssistance',
  'InsuranceOptions',
  'BookingSummary',
  'PromoCode',
  'PaymentMethod',
  'ProcessingPayment',
  'BookingSuccess',
  'ETicket',
  'Receipt',
] as const;
