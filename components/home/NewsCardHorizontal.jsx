import Link from 'next/link'
import React from 'react'
import { urlFor } from '../../sanity'

const NewsCardHorizontal = ({latest}) => {
  return latest && (
    <Link href={'/newspost/'+latest.slug.current}>
    <div className='flex flex-col py-2 group px-1 cursor-pointer bg-white rounded shadow mx-1 active:scale-95 transition-all duration-75'>
        <h4 className='text-right text-sm md:text-[16px] mb-5 mt-1 mx-2 group-hover:text-green-800 font-medium max-h-[36px] tracking-wide leading-[30px] sm:leading-[10px]'>{latest.title.substring(0,60)}</h4>
        <div className='flex flex-row-reverse'>
            <img loading="lazy" className='w-16 h-16 rounded object-cover ml-3 shadow' src={urlFor(latest.mainImage).url()} alt=''/>
            <p className='text-right text-xs text-slate-900 leading-8 tracking-wide'>{latest.metadesc.substring(0, 100)}</p>
        </div>
    </div>
    </Link>
  )
}

export default NewsCardHorizontal