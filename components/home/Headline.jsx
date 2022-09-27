import React from 'react'
import { urlFor } from '../../sanity'

const Headline = ({headline}) => {
  return headline&&(
    <div className='flex flex-col'>
        {/* <h1 className='text-right mb-2 text-lg font-semibold pb-2 border-r-4 border-green-500 pr-2'>نیوز ہیڈلائن</h1> */}
        <div className=' flex flex-col lg:flex-row-reverse cursor-pointer p-1 rounded border border-gray-200 shadow'>
            <div className="flex group overflow-hidden rounded-r-[2px]">
                <img loading='lazy' className='h-[260px] w-full lg:w-80 object-cover group-hover:scale-105' src={urlFor(headline.mainImage).url()} alt="" />
            </div>
            <div className="flex flex-col flex-1 max-h-70 bg-gray-100 lg:rounded-l-[2px] overflow-hidden">
                <div className='relative bg-red-500 py-3 px-3 w-full h-[64px] overflow-hidden'>
                    <img className='absolute opacity-20 h-[64px] top-0 left-0 w-full z-[1]' src="/headlineBG.jpg" alt="" />
                    <h1 className='absolute top-2 right-3 text-shadow text-right leading-[48px] text-[17px] text-white z-[2] tracking-wide'>{headline.title}</h1>
                </div>
                <div className='mt-3'>
                    <p className='text-right leading-9 px-2 tracking-wide '>{headline.metadesc}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Headline