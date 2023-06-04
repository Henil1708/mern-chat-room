import React, { useState } from 'react'
import {useFormik} from 'formik';
import CustomInput from '../../shared/components/CustomInput';
import CustomButton from '../../shared/components/CustomButton';
import { addRoomSchema } from '../../utils/schema/room';
import chat from '../../utils/services/chat';
import {useNavigate} from 'react-router-dom';
const addRoomInitialVal = {
    title: ''
}

const AddRoom = () => {
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(false);
    const {errors, handleBlur, handleSubmit, handleChange, values} = useFormik({
        initialValues: addRoomInitialVal,
        validationSchema: addRoomSchema,
        onSubmit: async (values) => {
            setIsLoading(true)
            try {

                const roomDetails = await chat.createRoom(values) 
                
                navigate(`/room/${roomDetails.uuid}`)

            }finally{
                setIsLoading(true)
            }

        }
    })

  return (
    <div className='h-full flex items-center justify-center bg-gray-200 '>
        <form onSubmit={handleSubmit} className=' max-w-2xl w-full p-4 bg-white shadow-md rounded-md'>
            <CustomInput type={'text'} handleBlur={handleBlur} error={errors.title} handleChange={handleChange} value={values.title} name={'title'} id={"title"} placeholder={"Room name"} />
            <CustomButton title='Add room' type='submit' varient='fill' isLoading={isLoading} />
        </form>
    </div>
  )
}

export default AddRoom