import * as yup from 'yup';
export const profileScreenSchema = yup.object().shape({
  fullname: yup.string().required('fullname is required'),
  nickname: yup.string().required('fullname is required'),
  dob: yup.string().required('dob is required'),
  email: yup
    .string()
    .email('Please enter valid email')
    .required('Email is required'),
  phonenumber: yup.string().required('phonenumber is required'),
  gender: yup.string().required('gender is required'),
  image: yup.string().notRequired(),
});
