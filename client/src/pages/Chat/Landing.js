import React from 'react'
import GroupChatSvg from "../../group-chat.svg";

const Landing = () => {
  return (
    <div className='flex justify-center items-center w-full h-full'>
        <div className='flex items-center flex-col'>
            <img src={GroupChatSvg} alt='group chat'  /> 
            <p className='text-center mt-5 text-gray-400 text-2xl'>Starting chating and creating rooms</p>
        </div>
    </div>
  )
}

export default Landing