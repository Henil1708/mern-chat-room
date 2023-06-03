import React from 'react'
import {BsPlus } from 'react-icons/bs';
import { Link, useLocation } from 'react-router-dom'

const ChatListItem = ({
  roomDetails,
  listitem = true
}) => {

  const location = useLocation();

  return (
    <Link to={`/room/${roomDetails.id}`}>
        <div className={`px-5 py-5 flex items-center  ${(location.pathname === "/room/"+roomDetails.id || location.pathname === "/room/"+roomDetails.id+"/") ? "bg-white/70": ""} ${!listitem ? "bg-teal-500 shadow-md font-bold  justify-center text-teal-700 hover:bg-teal-500 hover:text-white" : "hover:bg-white/70" } duration-150`}>
            {!listitem && <p className='text-4xl mr-2'><BsPlus /></p>}<p className='text-xl'>{roomDetails.title}</p>
        </div>
    </Link>
  )
}

export default ChatListItem