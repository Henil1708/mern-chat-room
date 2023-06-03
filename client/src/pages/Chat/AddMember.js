import React from 'react'
import CustomInput from '../../shared/components/CustomInput'

const AddMember = ({
    roomId
}) => {


  return (
    <div className='max-w-xl w-full mx-auto'>
        <CustomInput styling={'rounded-full mt-4 shadow-lg'} placeholder={'Search member'} />
        <div className='bg-white'>
        </div>
    </div>
  )
}

export default AddMember