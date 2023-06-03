import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import CustomInput from '../../shared/components/CustomInput';
import { signUpSchema } from '../../utils/schema/auth';
import { useFormik } from 'formik';
import CustomButton from '../../shared/components/CustomButton';
import auth from '../../utils/services/auth';
import { errorResponseHelper } from '../../utils/helpers/response';

const signUpInitialVal = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: ''
}


const Signup = () => {
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false);
  const {errors, handleBlur, handleChange, handleSubmit, values} = useFormik({
    initialValues: signUpInitialVal,
    validationSchema: signUpSchema,
    onSubmit:async (values) =>{
      try {
        setIsLoading(true);
        const {access_token} = await auth.signUp(values)
        localStorage.setItem('access_token', access_token)
        navigate("/")
      }finally{

        setIsLoading(false);

      }
    }
  })

  return (
    <>
        <form className='gap-y-4 mx-6 ' onSubmit={handleSubmit}>
            <h3 className='text-4xl font-black text-white md:text-center mt-8 mb-10'>Signup</h3>
            <CustomInput handleChange={handleChange} error={errors.firstName} value={values.firstName} handleBlur={handleBlur} type="text" name="firstName" id="firstName" placeholder={"First Name*"} />
            <CustomInput handleChange={handleChange} error={errors.lastName} value={values.lastName} handleBlur={handleBlur} type="text" name="lastName" id="lastName" placeholder={"Last Name"} />
            <CustomInput handleChange={handleChange} error={errors.email} value={values.email} handleBlur={handleBlur} type="text" name="email" id="email" placeholder={"Email Address"} />
            <CustomInput handleChange={handleChange} error={errors.password} value={values.password} handleBlur={handleBlur} type="password" name="password" id="password" protectedField={true}  placeholder='Password' />
            <CustomInput handleChange={handleChange} error={errors.confirmPassword} value={values.confirmPassword} handleBlur={handleBlur} type="password" name="confirmPassword" id="confirmPassword" placeholder='Confirm Password' />
            <CustomButton title='Sign up' type='submit' isLoading={isLoading} loadingTitle='Signing in...' />
        <p className='text-gray-200 gap-1 mt-8'>Already have an Account? <Link to={"/auth/signin"} className='ml-1  text-teal-300 hover:underline cursor-pointer'>Sign in now</Link></p>
        </form>
    </>
  )
}

export default Signup