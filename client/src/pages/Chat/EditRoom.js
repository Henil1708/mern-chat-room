import React, { useEffect, useState } from 'react'
import {useFormik} from 'formik';
import CustomInput from '../../shared/components/CustomInput';
import CustomButton from '../../shared/components/CustomButton';
import { addRoomSchema } from '../../utils/schema/room';
import { useNavigate, useParams } from 'react-router-dom';
import Spinner from '../../shared/components/Spinner';
import chat from '../../utils/services/chat';
import { errorResponseHelper } from '../../utils/helpers/response';


const EditRoom = () => {
    const {roomId} = useParams()
    const navigate = useNavigate()
    const [isCompLoading, setIsCompLoading] = useState(true);
    const {errors, handleBlur, handleSubmit, handleChange, values, setValues} = useFormik({
        initialValues: {
            title: ''
        },
        validationSchema: addRoomSchema,
        onSubmit:async () => {

        }
    })

    const fetchRoom = async () => {

        try {
            
            const roomDetails = await chat.getRoom(roomId);

            setValues({...values, title: roomDetails.title})

            setIsCompLoading(false);
        }catch(error){
            errorResponseHelper(error.response.data.message)

            setTimeout(()=>{
                navigate(-1);
            }, 2000)

        }

    }

    useEffect(()=>{
        
        fetchRoom();

    }, [])

    return (
    <div className='h-full flex items-center justify-center bg-gray-200 '>
        <form onSubmit={handleSubmit} className=' max-w-2xl min-h-[100px] w-full p-4 bg-white shadow-md rounded-md relative'>
            {
                isCompLoading ? <Spinner /> : <>
                <CustomInput type={'text'} handleBlur={handleBlur} error={errors.title} handleChange={handleChange} value={values.title} name={'title'} id={"title"} placeholder={"Room name"} />
                <CustomButton title='Edit room' varient='fill' />
                </>
            }
            
        </form>
    </div>
  )
}

export default EditRoom