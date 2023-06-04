import React, { useCallback, useEffect, useState } from 'react'
import ChatListItem from '../../shared/components/ChatListItem'
import Spinner from '../../shared/components/Spinner';
import RoomListSkeleton from '../../shared/components/RoomListSkeleton';
import chat from '../../utils/services/chat';
import socket from '../../utils/config/socket';
import { useDispatch, useSelector } from 'react-redux';
import { addRoom, roomsList } from '../../shared/store/slices/roomSlice';
import LogoutButon from '../../shared/components/LogoutButon';

const ChatList = () => {

  const [isLoading, setIsLoading] = useState(true); 
  const roomList = useSelector(state=> state.room.rooms)
  const dispatch = useDispatch();

  useEffect(()=> {

    fetchRoomsList()

    socket.on('add_room', (data)=> {
      dispatch(addRoom(data))
    });

    socket.on('refresh_rooms', (data)=> {
      fetchRoomsList()
    });
    
  }, [])

  const fetchRoomsList = async () => {
    try {
      const rooms = await chat.listRooms();
      dispatch(roomsList(rooms));
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className='top-0 h-full relative bg-white/90 overflow-y-auto divide-y-2 flex flex-col'>
      
      {
        isLoading ? <RoomListSkeleton /> : <>
        {
          roomList.length > 0 ? <>
            {
              roomList.map((item, index)=>{
                return <ChatListItem key={item.uuid} roomDetails = {item} />
              })
            }
          </> : "Not data found"
        }
        </>
      }
        
        <div className='sticky bottom-0 left-0'>
        <ChatListItem roomDetails = {{
          uuid: "add",
          title: "Add Room",
        }} listitem= {false} />
        <LogoutButon />
      </div>
    </div>
  )
}

export default ChatList