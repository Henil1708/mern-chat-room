import React, { useState } from 'react'
import {AiFillExclamationCircle, AiFillEye, AiFillEyeInvisible} from "react-icons/ai"
const CustomInput = ({
    type,
    name,
    id,
    styling,
    placeholder,
    protectedField = false,
    handleChange,
    handleBlur,
    error = '',
    value
}) => {

    const [fieldType, setFieldType] = useState(type); 
    const toggleProtected = () => {

        if(fieldType === "password"){
            setFieldType("text");
        }else{
            setFieldType("password")
        }

    }

  return (
    <div className='mb-3'>
        <div className={`w-full  bg-white flex items-center divide-x-2 ${styling}`}>
            <input type={fieldType} name={name} value={value} onBlur={handleBlur} onChange={handleChange} id={id} className={`w-full bg-transparent py-3 px-2 pl-5 border-none outline-none rounded-sm `} placeholder={placeholder} />
            {
                protectedField && <div onClick={toggleProtected} className='px-2 cursor-pointer text-2xl hover:text-gray-600'> {fieldType === "password" ? <AiFillEye  />: <AiFillEyeInvisible />} </div>
            }
            {
                error !== '' && <p className='px-2 text-xl text-red-500'><AiFillExclamationCircle /> </p>
            }
        </div>
        {
            error !== '' && <p className='mt-1 text-red-400'>{error}</p> 
        }
    </div>
  )
}

export default CustomInput