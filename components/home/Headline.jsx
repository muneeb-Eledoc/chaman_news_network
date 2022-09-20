import React from 'react'
import { urlFor } from '../../sanity'

const Headline = ({headline}) => {
  return headline&&(
    <div className='flex flex-col'>
        {/* <h1 className='text-right mb-2 text-lg font-semibold pb-2 border-r-4 border-green-500 pr-2'>نیوز ہیڈلائن</h1> */}
        <div className=' flex flex-col lg:flex-row-reverse cursor-pointer p-1 rounded border border-gray-200 shadow'>
            <div className="flex group overflow-hidden rounded">
                <img loading='lazy' className='h-[260px] w-full lg:w-80 rounded object-cover group-hover:scale-105' src={urlFor(headline.mainImage).url()} alt="" />
            </div>
            <div className="flex flex-col flex-1 lg:mr-1 max-h-70 bg-gray-100 rounded overflow-hidden">
                <div className='bg-gray-600 py-3 px-3 shadow w-full animate-pulse'>
                    <h1 className='text-right leading-9 text-[17px] text-white tracking-wide max-h-18'>{headline.title}</h1>
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