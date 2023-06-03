import React from 'react'
import ChatListItem from './ChatListItem'

const ChatList = () => {
  return (
    <div className='top-0 h-full bg-white/90 overflow-y-auto divide-y-2 flex flex-col'>
      <ChatListItem roomDetails = {{
          id: "add",
          title: "Add Room",
        }} listitem= {false} />
        <ChatListItem roomDetails = {{
          id: "12232",
          title: "Roley"
        }} />
        <ChatListItem roomDetails = {{
          id: "12233",
          title: "Prodraft"
        }} />
        <ChatListItem roomDetails = {{
          id: "12234",
          title: "Backend Nerd"
        }} /> 
    </div>
  )
}

export default ChatList