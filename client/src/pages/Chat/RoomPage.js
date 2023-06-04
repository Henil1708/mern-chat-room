import React, { useEffect, useRef, useState } from 'react'
import { AiFillMessage } from 'react-icons/ai'
import Message from '../../shared/components/Message'
import { BsSend, BsThreeDotsVertical} from 'react-icons/bs'
import {HiOutlineBackspace} from 'react-icons/hi';
import { Link, useNavigate, useParams} from 'react-router-dom'
import chat from '../../utils/services/chat'
import { errorResponseHelper } from '../../utils/helpers/response'
import TextSkeleton from '../../shared/components/TextSkeleton'
import Spinner from '../../shared/components/Spinner'
import Landing from './Landing'
import socket from '../../utils/config/socket'
import { useSelector } from 'react-redux';

const RoomPage = () => {
    const {roomId} = useParams();
    const scrollRef = useRef(null);
    const navigate = useNavigate();
    const [roomDetails, setRoomDetails] = useState([]);
    const [roomChatsDetails, setRoomChatsDetails] = useState(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isChatCompLoading, setIsChatCompLoading] = useState(true);
    const [isDetailsCompLoading, setIsDetailsCompLoading] = useState(true);
    const {user} = useSelector(state=> state.user);
    const [message, setMessage] = useState('');

    const [isSendEnable, setIsSendEnable] = useState(false);

    useEffect(() => {
        

        fetchRoom();

    }, [roomId]);

    useEffect(()=> {

        socket.on('add_message', (data) => {
            setRoomChatsDetails((roomChats)=> [...roomChats, data] )
            scrollToBottom();
        })

        socket.on('refresh_room_details', () => {
            fetchRoom()
        })

        return () => {
            socket.off('add_message');
            socket.off('refresh_room_details');
        }
},[])

    useEffect(()=>{

        scrollRef.current.scrollTop = scrollRef.current.scrollHeight

    })

    const fetchRoom = async () => {

        try {
            const roomDetails = await chat.getRoom(roomId);

            setIsDetailsCompLoading(false);

            socket.emit('join_room', {room_uuid: roomDetails.uuid})
            setRoomDetails(roomDetails);
            await fetchRoomChats();
            scrollToBottom();

        }catch(error){
            errorResponseHelper(error.response.data.message)

            navigate(-1);

        }

    }

    const scrollToBottom = () => {
        if (scrollRef.current) { 
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight
        }
    };

    const sendMessage = (e) => {

        e.preventDefault()
        
        socket.emit('message', {
            message,
            room_uuid: roomId   
        })

        setMessage('');
        setIsSendEnable(false);

    }

    const fetchRoomChats = async () => {

        try {
            
            const roomChatsDetails = await chat.getRoomChats(roomId);
            setIsChatCompLoading(false);

            setRoomChatsDetails(roomChatsDetails)

        }catch(error){

            errorResponseHelper(error.response.data.message)
            navigate(-1);

        }

    }

    const handleChange = e => {

        e.preventDefault();

        setMessage(e.target.value);

        if(e.target.value !== ''){

            setIsSendEnable(true);

        }else{

            setIsSendEnable(false);

        }

    }

    const handleMenuToggle = async () => {

        setIsMenuOpen(!isMenuOpen);

    }

  return (
    <div className='flex h-full flex-col '>
        <div className='p-8 bg-teal-800 relative text-gray-700 flex justify-between items-center' >
        
        {
            isDetailsCompLoading ? <TextSkeleton /> : 
            <>
            <h4 className='text-white flex items-center '><span className='md:hidden block text-2xl bg-teal-500 text-teal-900 px-3 py-2 mr-2 rounded-md' onClick={()=> navigate('/')}><HiOutlineBackspace /></span> {roomDetails?.title}</h4>

            
            {
                user.uuid === roomDetails.created_by && <div className='text-white text-2xl cursor-pointer' onClick={handleMenuToggle}><BsThreeDotsVertical /></div>
            }
            </>
        }
            
        {
            isMenuOpen && <div className='bg-white right-8 rounded-b-md z-50 max-w-[250px] w-full shadow-2xl absolute top-[100%]'>
                <ul className='divide-y-[1px]' onClick={handleMenuToggle}>
                    <li className=''><Link to={`/room/${roomId}/edit`}><p className='p-5 hover:bg-gray-100 cursor-pointer'>Edit room name</p></Link></li>
                </ul>
            </div>
        }
        </div>
        <div className={`flex-grow relative flex flex-col px-4 bg-gray-100 overflow-y-auto `} ref={scrollRef}  style={{ height: '400px', overflowY: 'auto' }}>
        {
            isChatCompLoading ? <Spinner /> : <>
                {
                    roomChatsDetails?.length > 0 ?  <>
                    {
                        roomChatsDetails?.map((item, index)=> {
                            return <Message float={item.created_by === user.uuid ? 'right': 'left'} key={item.uuid} message={item} />
                        })
                    }
                    </>: <Landing />
                }
            </>
        }
        </div>
        <div className='p-4 pb-10 bg-slate-100 flex gap-x-8 border-t-[1px] border-t-gray-300'>
            <textarea value={message} onChange={handleChange} className='bg-white shadow w-full flex-grow rounded-full p-3 pl-5 border-none outline-none' rows={1}  placeholder='Write a message'></textarea>
            <button disabled={!isSendEnable} onClick={sendMessage} onKeyUp={(e)=>{
            }} className='disabled:bg-gray-500 bg-teal-400 text-white text-2xl p-4 rounded-full hover:bg-teal-500'>{isSendEnable ? <BsSend /> : <AiFillMessage />}</button>
        </div> 
        
    </div>
  )
}

export default RoomPage