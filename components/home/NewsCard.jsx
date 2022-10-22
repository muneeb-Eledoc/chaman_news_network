import Link from 'next/link'
import React from 'react'
import { urlFor } from '../../sanity'

const NewsCard = ({story}) => {
  return (
    <Link href={'/newspost/'+story.slug.current}>
      <a className='w-full group'>
        <div className='p-1 shadow active:scale-95 active:bg-gray-100 rounded transition-all duration-100'>
            <div className="flex h-32 sm:h-48 overflow-hidden rounded">
              <img className='w-full h-32 sm:h-48 rounded hover:scale-110 transition-all duration-200 ease-in-out object-cover border border-gray-200' loading='lazy' src={urlFor(story.mainImage).url()} alt="" />
            </div>
            <div className="flex mt-2 mb-2 flex-row-reverse">
              <h3 className='text-right text-[10px] sm:text-xs mr-1 mb-1 md:text-sm leading-4 group-hover:text-green-600 transition-all duration-300 group-hover:bg-gray-50'>{story.title.length > 35 &&'...'}{story.title.substring(0, 35)}</h3>
            </div>
        </div>
      </a>
    </Link>
  )
}

export default NewsCard