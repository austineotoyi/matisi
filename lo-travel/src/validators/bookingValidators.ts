import * as yup from 'yup';

export const passengerSchema = yup.object({
  firstName: yup.string().required('First name is required'),
  lastName: yup.string().required('Last name is required'),
  dob: yup.string().required('Date of birth is required'),
  nationality: yup.string().required('Nationality is required'),
  passportNumber: yup.string().min(5, 'Enter a valid passport number').required('Passport number is required'),
});

export const contactSchema = yup.object({
  mobile: yup.string().min(7, 'Enter a valid mobile number').required('Mobile number is required'),
  email: yup.string().email('Enter a valid email').required('Email is required'),
  country: yup.string().required('Country is required'),
});

export const flightSearchSchema = yup.object({
  origin: yup.string().required('Departure airport is required'),
  destination: yup.string().required('Destination airport is required'),
  departureDate: yup.string().required('Departure date is required'),
  passengers: yup.number().min(1).required(),
});
