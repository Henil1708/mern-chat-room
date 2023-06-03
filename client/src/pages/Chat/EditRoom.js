import React, { useEffect, useState } from 'react'
import {useFormik} from 'formik';
import CustomInput from '../../shared/components/CustomInput';
import CustomButton from '../../shared/components/CustomButton';
import { addRoomSchema } from '../../utils/schema/room';
import { useParams } from 'react-router-dom';
import Spinner from '../../shared/components/Spinner';


const EditRoom = () => {
    const {roomId} = useParams()
    const [isCompLoading, setIsCompLoading] = useState(true);
    const {errors, handleBlur, handleSubmit, handleChange, values, setValues} = useFormik({
        initialValues: {
            roomName: ''
        },
        validationSchema: addRoomSchema,
        onSubmit: () => {

        }
    })

    useEffect(()=>{
        
        setValues({...values, roomName: roomId})
        
        setTimeout(() => {
            setIsCompLoading(false);
        }, 3000);

    }, [])

    return (
    <div className='h-full flex items-center justify-center bg-gray-200 '>
        <form onSubmit={handleSubmit} className=' max-w-2xl min-h-[100px] w-full p-4 bg-white shadow-md rounded-md relative'>
            {
                isCompLoading ? <Spinner /> : <>
                <CustomInput type={'text'} handleBlur={handleBlur} error={errors.roomName} handleChange={handleChange} value={values.roomName} name={'roomName'} id={"roomName"} placeholder={"Room name"} />
                <CustomButton title='Edit room' varient='fill' />
                </>
            }
            
        </form>
    </div>
  )
}

export default EditRoom