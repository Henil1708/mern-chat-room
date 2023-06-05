import React, { useEffect } from 'react'
import reactLogo from "../assets/logo.svg";
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import "../App.css"
const AuthLayout = () => {

  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    
    if(location.pathname === "/auth" || location.pathname === "/auth/"){
      navigate("signin")
    }

  }, [navigate, location]);

  return (
    <div className='App'>
      <div className='max-w-md md:pt-24 pt-8 w-16 flex md:justify-center md:mx-auto  items-center text-white'>

        <img src={reactLogo} alt='react' />
        <p className='text-4xl font-bold'>Chatter</p>
      </div>
      <div className='md:max-w-md mx-auto mt-20'>
        <Outlet />
      </div>
    </div>
  )
}

export default AuthLayout