import * as Yup from 'yup';

const FormSchema = Yup.object({
  email: Yup.string()
    .email('Invalid email address')
    .required('Username is required'),
  password: Yup.string().min(8).required('Password is required'),
  date: Yup.string().required('Date is required'),
  time: Yup.string().required('TIme is required'),
  description: Yup.string().required('Description is required'),
  gender: Yup.string().required('Gender is required'),
});

export default FormSchema;
