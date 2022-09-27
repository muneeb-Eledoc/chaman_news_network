import Link from 'next/link'
import React from 'react'
import { urlFor } from '../../sanity'

const NewsCard = ({story}) => {
  return (
    <Link href={'/newspost/'+story.slug.current}>
    <div className='cursor-pointer p-1 bg-gray-50 w-full shadow active:scale-95 active:bg-gray-100 rounded border border-slate-100 transition-all duration-100'>
        <div className="flex">
          <img className='w-full h-32 sm:h-48 rounded object-cover border border-gray-200' loading='lazy' src={urlFor(story.mainImage).url()} alt="" />
        </div>
        <div className="flex mt-2 mb-2 flex-row-reverse">
          <h3 className='text-right text-xs md:text-sm leading-4'>{story.title.substring(0, 40)}</h3>
        </div>
    </div>
    </Link>
  )
}

export default NewsCard