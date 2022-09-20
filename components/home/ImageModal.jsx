import React, { useEffect } from 'react'

const ImageModal = ({imageToOpen, setImageToOpen}) => {
    useEffect(() => {
        if(imageToOpen !== ''){
            document.body.style.overflow = 'hidden'
        }else{
            document.body.style.overflow = 'auto'
        }
    }, [imageToOpen])
    
    const closeModal = ()=>{
        setImageToOpen('')
    }
  return (
    <div onClick={closeModal} className={`w-full h-screen fixed flex justify-center items-center top-0 left-0 bg-black z-50 transition-all duration-300 ease-in-out ${imageToOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}>
        <svg onClick={closeModal} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-white absolute top-6 right-6 shadow cursor-pointer hover:scale-125 transition-all duration-100 ease-out">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>

        <img className='max-w-[100%] max-h-screen' src={imageToOpen} alt="" />
    </div>
  )
}

export default ImageModal