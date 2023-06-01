import React from 'react'
import reactLogo from "../logo.svg";
const AuthLayout = ({children}) => {
  return (
    <div>
      <div className='max-w-2xl  pt-24 w-16 flex justify-center mx-auto items-center text-white'>
        <img src={reactLogo} alt='react' />
        <p className='text-4xl font-bold'>Chatter</p>
      </div>
      <div className='max-w-2xl mx-auto mt-20'>
        {children}
      </div>
    </div>
  )
}

export default AuthLayout