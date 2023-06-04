import React from 'react'
import {GrRefresh} from 'react-icons/gr';
import {useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {removeUser} from "../../shared/store/slices/userSlice"
const Logout = () => {
  
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const handleLogout = async () => {

    dispatch(removeUser());
    localStorage.clear();
    navigate('/')

  }

  const handleRefresh = async () => {

    window.location.reload()

  }

  return (
    <div className='absolute w-full flex items-center justify-center h-full bg-white'>
        
        <div className="max-w-3xl shadow-xl p-7 w-full">
            <p className='text-center text-3xl text-red-800'>Something went wrong</p>
            <p className='text-center text-lg mt-2'>Not connected with the server</p>
            <div className='flex gap-10 mt-8'>
                <div onClick={handleRefresh} className='text-green-700 flex-1 flex justify-center items-center gap-3 px-5 py-2 border border-green-700 rounded-md hover:bg-green-700 hover:text-white cursor-pointer'>
                  <GrRefresh /> <p>Refresh</p>
                </div>
                <div onClick={handleLogout} className='text-red-700 flex-1 flex justify-center items-center gap-3 px-5 py-2 border border-red-700 rounded-md hover:bg-red-700 hover:text-white cursor-pointer'>
                   <p>Logout</p>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Logout