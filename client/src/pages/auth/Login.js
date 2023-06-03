import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {useFormik} from 'formik';
import CustomInput from '../../shared/components/CustomInput';
import { signInSchema } from '../../utils/schema/auth';
import CustomButton from '../../shared/components/CustomButton';

const loginInitialVal = {
  email: '',
  password: ''
}

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const {errors, handleBlur, handleChange, handleSubmit, values} = useFormik({
    initialValues: loginInitialVal,
    validationSchema: signInSchema,
    onSubmit:async () =>{
      setIsLoading(true);
      // 
      // TODO: add post api call
      // 

    }
  })

  return (
    <>
        <h3 className='text-4xl font-black text-white md:text-center'>Login</h3>
        <form className='gap-y-4 mx-6 mt-8' onSubmit={handleSubmit}>
            <CustomInput type="text" name="email" id="email" handleChange={handleChange} error={errors.email} value={values.email} handleBlur={handleBlur} placeholder={"Email Address"} />
            <CustomInput type="password" name="password"  handleChange={handleChange} error={errors.password} value={values.password} handleBlur={handleBlur} id="password" protectedField={true}  placeholder='Password' />
            <CustomButton title='Sign in' isLoading={isLoading}  loadingTitle='Signing in...' />
        <p className='text-gray-200 gap-1 mt-8'>Don't have an Account? <Link to={"/auth/signup"} className='ml-2  text-teal-300 hover:underline cursor-pointer'>Sign up now</Link></p>
        </form>
    </>
  )
}

export default Login