import * as yup from 'yup';
export const emailSchema = {
  email: yup
    .string()
    .email('Please enter valid email')
    .required('Email is required'),
};
