import React, { useEffect, useState } from 'react'
import ChatList from '../pages/Chat/ChatList'
import { Outlet, useLocation } from 'react-router-dom'
import Spinner from '../shared/components/Spinner';
import { fetchUser } from '../shared/store/slices/userSlice';
import { useDispatch } from 'react-redux';
import socket from '../utils/config/socket'
import Logout from '../pages/commons/Logout';
const ChatLayout = () => {

  const [appLoading, setAppLoading] = useState(true);
  const [isSocketConnected, setIsSocketConnected] = useState(true);

  const dispatch = useDispatch();
  const location = useLocation();
  useEffect(()=> {

    try {

      socket.on('connect', () => {

        setIsSocketConnected(true);
      });

      socket.on('disconnect', () => {

        setIsSocketConnected(false);
      });

      fetchUser(dispatch);
      
      // Clean up the socket connection when the component unmounts
      return () => {
        socket.disconnect();
      };
    } finally{
      setAppLoading(false)
    }
  }, [])
  return (
    <div className='md:max-w-[1450px] relative overflow-x-hidden flex items-center mx-auto h-screen bg-gray-700'>
      {
          appLoading ? <Spinner /> :
          <>
            {
              isSocketConnected ? 
              <>
                <div className={`md:flex-[0.3] ${location.pathname !== '/' ? "md:block hidden  ":"flex-1"} md:left-100 h-full`}>
                  <ChatList />
                </div>
                <div className={`md:flex-[0.7] h-full bg-white ${location.pathname === '/' ? "md:block hidden ":"flex-1"}`}>
                  <Outlet />
                </div> 
              </> : <Logout />
            }
          </>
      }

      
    </div>
  )
}

export default ChatLayout