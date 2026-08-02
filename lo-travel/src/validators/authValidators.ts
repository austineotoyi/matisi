import * as yup from 'yup';

export const loginSchema = yup.object({
  email: yup.string().email('Enter a valid email').required('Email is required'),
  password: yup.string().min(6, 'Minimum 6 characters').required('Password is required'),
});

export const signupSchema = yup.object({
  fullName: yup.string().min(2, 'Enter your full name').required('Full name is required'),
  email: yup.string().email('Enter a valid email').required('Email is required'),
  phone: yup.string().min(7, 'Enter a valid phone number').required('Phone is required'),
  password: yup.string().min(6, 'Minimum 6 characters').required('Password is required'),
});

export const otpSchema = yup.object({
  code: yup.string().length(4, 'Enter the 4-digit code').required('Code is required'),
});

export const forgotPasswordSchema = yup.object({
  email: yup.string().email('Enter a valid email').required('Email is required'),
});
