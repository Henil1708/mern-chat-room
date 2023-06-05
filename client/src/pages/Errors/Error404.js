import React from 'react'
import Err404 from '../../assets/404.svg';
import { Link } from 'react-router-dom';

const Error404 = () => {
  return (
    <div className='h-screen bg-white flex justify-center items-center'>
        <div className='max-w-2xl md:mx-auto px-5 w-full'>
            <img src={Err404} alt="404" className='object-contain' />
            <div className='w-fit mx-auto mt-10'>
            <Link to={'/'} className='w-fit text-white rounded-md hover:bg-teal-500 hover:shadow-md duration-150 bg-teal-600 py-3 px-4 '>Go to home</Link>
            </div>
        </div>
    </div>
  )
}

export default Error404