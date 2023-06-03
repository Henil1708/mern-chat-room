import React from 'react'

const CustomButton = ({
    varient= "outline",
    type= 'submit',
    title= 'Submit',
    isLoading= false,
    loadingTitle= 'Please wait...'
}) => {
  return (
    <button disabled={isLoading} className={`w-full disabled:bg-gray-500 disabled:text-white disabled:border-transparent  ${varient === 'outline' ? "text-teal-500 bg-transparent border-2 border-teal-500 hover:bg-teal-500 hover:text-white": "text-white hover:bg-transparent border-2 border-white hover:border-teal-500 bg-teal-500 hover:text-teal-500" } duration-100 py-3 mt-3`} type={type}>{isLoading ? loadingTitle : title}</button>
  )
}

export default CustomButton