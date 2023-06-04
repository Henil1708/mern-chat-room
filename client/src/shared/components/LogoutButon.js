import React from 'react'
import { useDispatch } from 'react-redux'
import { removeUser } from '../store/slices/userSlice';
import { useNavigate } from 'react-router-dom';

const LogoutButon = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const logout = () => {

        dispatch(removeUser());
        navigate('/auth')

    }

  return (
    <div onClick={logout} className='text-red-600 text-xl cursor-pointer bg-white text-center py-3 hover:bg-red-600 duration-100 hover:text-white'>
        Logout
    </div>
  )
}

export default LogoutButon