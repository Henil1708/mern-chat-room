import React from 'react'

const Message = ({
    float='right',
    message
}) => {
  return (
    <div className={`flex w-full flex-row ${float === "right"  ? "justify-end" : "mb-6"} my-3 `}>
        <div className={`${float === "right" ? "bg-green-700 text-white w-fit" : " bg-gray-200 w-fit" } block px-4 py-4 rounded-lg  md:max-w-2xl max-w-[250px] relative`}>
            <p>{message.title}</p>
            {
                float === 'left' && <div className='absolute -bottom-5 p-1 px-3 shadow -right-8 w-fit text-xs text-green-600 rounded-full bg-white font-bold min-w-fit'>Henil Mehta </div>
            }
        </div>
    </div>
  )
}

export default Message