import React from 'react'
import {useFormik} from 'formik';
import CustomInput from '../../shared/components/CustomInput';
import CustomButton from '../../shared/components/CustomButton';
import { addRoomSchema } from '../../utils/schema/room';

const addRoomInitialVal = {
    roomName: ''
}

const AddRoom = () => {

    const {errors, handleBlur, handleSubmit, handleChange, values} = useFormik({
        initialValues: addRoomInitialVal,
        validationSchema: addRoomSchema,
        onSubmit: () => {

        }
    })

  return (
    <div className='h-full flex items-center justify-center bg-gray-200 '>
        <form onSubmit={handleSubmit} className=' max-w-2xl w-full p-4 bg-white shadow-md rounded-md'>
            <CustomInput type={'text'} handleBlur={handleBlur} error={errors.roomName} handleChange={handleChange} value={values.roomName} name={'roomName'} id={"roomName"} placeholder={"Room name"} />
            <CustomButton title='Add room' varient='fill' />
        </form>
    </div>
  )
}

export default AddRoom