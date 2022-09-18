import Link from 'next/link'
import React from 'react'
import { urlFor } from '../../sanity'

const NewsCardHorizontal = ({latest}) => {
  return latest && (
    <Link href={'/newspost/'+latest.slug.current}>
    <div className='flex flex-row-reverse mb-3 py-2 px-1 cursor-pointer bg-white rounded shadow mx-1 hover:bg-gray-50 active:scale-95 transition-all duration-75'>
        <img className='w-20 h-20 rounded object-cover ml-3 shadow' src={urlFor(latest.mainImage).url()} alt=''/>
        <div className='flex flex-col'>
            <h4 className='text-right text-sm md:text-[16px] mt-[2px] font-medium max-h-[36px]'>{latest.title.substring(0,55)}</h4>
            <p className='text-right mt-3 text-xs text-gray-700 leading-6'>{latest.metadesc.substring(0, 90)}</p>
        </div>
    </div>
    </Link>
  )
}

export default NewsCardHorizontal