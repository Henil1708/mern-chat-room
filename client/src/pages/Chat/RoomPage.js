import React, { useEffect, useRef, useState } from 'react'
import { AiFillMessage } from 'react-icons/ai'
import Message from './Message'
import {BsThreeDotsVertical} from 'react-icons/bs'
import { Link, useParams } from 'react-router-dom'
import AddMember from './AddMember';

const RoomPage = () => {
    const {roomId} = useParams();
    const scrollRef = useRef(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isAddMember, setIsAddMember] = useState(false);
    useEffect(() => {
        scrollRef.current.scrollIntoView({ behavior: 'smooth' });
        if(isAddMember){
            handlIsAddMember()
        }
    }, [roomId]);

    const handleMenuToggle = async () => {

        setIsMenuOpen(!isMenuOpen);

    }

    const handlIsAddMember = ()=>{
        setIsAddMember(!isAddMember);
    }
  return (
    <div className='flex h-full flex-col '>
        <div className='p-8 bg-teal-800 relative text-gray-700 flex justify-between items-center' >
            <h4 className='text-white'>Roley</h4>
            <div className='text-white text-2xl cursor-pointer' onClick={handleMenuToggle}><BsThreeDotsVertical /></div>
        {
            isMenuOpen && <div className='bg-white right-8 rounded-b-md z-50 max-w-[250px] w-full shadow-2xl absolute top-[100%]'>
            <ul className='divide-y-[1px]' onClick={handleMenuToggle}>
                <li className='p-5 hover:bg-gray-100 cursor-pointer' onClick={handlIsAddMember}>Add member</li>
                <li className=''><Link to={`/room/${roomId}/edit`}><p className='p-5 hover:bg-gray-100 cursor-pointer'>Edit room name</p></Link></li>
                <li className='p-5 hover:bg-gray-100 cursor-pointer text-red-500'>Delete room</li>
            </ul>
        </div>
        }
        </div>
        <div className='flex-grow flex flex-col px-4 bg-gray-100 overflow-y-auto' ref={scrollRef}>
            {
                isAddMember ? <AddMember roomId={roomId} />: 
                <>
                <Message float={'right'} message={{
                title: "Hey! How are you ? Are you doing well",
                created_at: "2023-05-03"
            }} />
            <Message float={'left'} message={{
                title: "Hsldjf lkaslkfjalf sfds fdsf s!",
                created_at: "2023-05-03"
            }} />
            <Message float={'right'} message={{
                title: "Hey! How are you ? Are you doing well",
                created_at: "2023-05-03"
            }} />
            <Message float={'right'} message={{
                title: "Hey! How are you ? Are you doing well",
                created_at: "2023-05-03"
            }} />
            <Message float={'left'} message={{
                title: "Hsldjf!",
                created_at: "2023-05-03"
            }} />
            <Message float={'right'} message={{
                title: "Hey! How are you ? Are you doing well",
                created_at: "2023-05-03"
            }} />
            <Message float={'left'} message={{
                title: "Hsldjf!",
                created_at: "2023-05-03"
            }} />
            <Message float={'right'} message={{
                title: "Hey! How are you ? Are you doing well",
                created_at: "2023-05-03"
            }} />
            <Message float={'right'} message={{
                title: "Hey! How are you ? Are you doing well",
                created_at: "2023-05-03"
            }} />
            <Message float={'left'} message={{
                title: "Hsldjf!",
                created_at: "2023-05-03"
            }} />
            <Message float={'right'} message={{
                title: "Hey! How are you ? Are you doing well",
                created_at: "2023-05-03"
            }} />
            <Message float={'left'} message={{
                title: "Hsldjf!",
                created_at: "2023-05-03"
            }} />
            <Message float={'right'} message={{
                title: "Hey! How are you ? Are you doing well",
                created_at: "2023-05-03"
            }} />
            <Message float={'right'} message={{
                title: "Hey! How are you ? Are you doing well",
                created_at: "2023-05-03"
            }} />
            <Message float={'left'} message={{
                title: "Hsldjf!",
                created_at: "2023-05-03"
            }} />
                </>
            }
        </div>
        {!isAddMember && <div className='p-4 pb-10 bg-slate-100 flex gap-x-8 border-t-[1px] border-t-gray-300'>
            <textarea  className='bg-white shadow w-full flex-grow rounded-full p-3 pl-5 border-none outline-none' rows={1}  placeholder='Write a message'></textarea>
            <button className='bg-teal-400 text-white text-4xl p-4 rounded-full hover:bg-teal-500'><AiFillMessage /></button>
        </div> }
        
    </div>
  )
}

export default RoomPage