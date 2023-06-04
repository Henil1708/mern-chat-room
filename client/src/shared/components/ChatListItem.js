import React from 'react'
import {BsPlus } from 'react-icons/bs';
import { Link, useParams } from 'react-router-dom'
import date from '../../utils/helpers/date';

const ChatListItem = ({
  roomDetails,
  listitem = true
}) => {

  const {roomId} = useParams();

  return (
    <Link to={`/room/${roomDetails.uuid}`}>
        <div className={`px-5 py-5 flex items-center relative ${roomId === roomDetails.uuid ? "bg-white": ""} ${!listitem ? "bg-teal-500 shadow-md font-bold  justify-center  hover:bg-teal-600 text-white" : "hover:bg-white/70" } hover:shadow-md duration-150`}>
            <div>
              <div className='flex items-center'>
              {!listitem && <p className='text-4xl mr-2'><BsPlus /></p>}<p className='text-xl'>{roomDetails.title}</p>
              </div>

              {listitem && <div className='mt-4 text-gray-400 text-sm'>Created at: {date.convertFormat(roomDetails.created_at)}</div>}
            </div>
        </div>
    </Link>
  )
}

export default ChatListItem