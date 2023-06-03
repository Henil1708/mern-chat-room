import React from 'react'
import ChatList from '../pages/Chat/ChatList'
import { Outlet } from 'react-router-dom'
// import { Outlet } from 'react-router-dom'

const ChatLayout = () => {
  return (
    <div className='md:max-w-[1450px] overflow-x-hidden flex items-center mx-auto h-screen bg-gray-700'>
      <div className='flex-[0.3] md:left-100 h-full'>
        <ChatList />
      </div>
      <div className='flex-[0.7] h-full bg-white'>
        <Outlet />
      </div> 
    </div>
  )
}

export default ChatLayout