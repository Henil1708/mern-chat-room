import * as Yup from "yup"

export const signInSchema = Yup.object().shape({
    email: Yup.string()
    .email("Email address should be a valid email")
    .required("Email address field is required"),
    password: Yup.string()
    .min(6, "Must be 6 characters or more")
    .required("Password field is required")
});

export const signUpSchema = Yup.object().shape({
    firstName: Yup.string('First name field must a valid string').required('First name field is required'),
    lastName: Yup.string('Last name field must a valid string').required('Last name field is required'),
    email: Yup.string()
    .email("Email address should be a valid email")
    .required("Email address field is required"),
    password: Yup.string()
    .min(6, "Must be 6 characters or more")
    .required("Password field is required"),
    confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords must match')
});