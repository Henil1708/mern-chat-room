import React from 'react'
import AuthLayout from '../layouts/AuthLayout'
import { Link } from 'react-router-dom'

const Login = () => {

  return (
    <AuthLayout>
        <h3 className='text-xl text-white text-center'>Login</h3>
        <form className='gap-y-4 mx-6 mt-8'>
            <input type="email" name="email" id="email" className='w-full mb-3 py-3 px-2 border-none outline-none rounded-sm' placeholder='Email address' />
            <input type="password" name="password" id="password" className='w-full mb-3 py-3 px-2 border-none outline-none rounded-sm' placeholder='Password' />
            <button type='submit' className='w-full text-white bg-blue-500 py-3 mt-3'>Login</button>
        <p className='text-gray-200 gap-1 mt-8'>Don't have an Account? <span className='ml-2  text-blue-300 hover:underline cursor-pointer'>Sign up now</span></p>
        </form>
    </AuthLayout>
  )
}

export default Login