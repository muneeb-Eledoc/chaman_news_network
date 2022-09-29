import { ClockIcon } from '@heroicons/react/24/outline'
import React from 'react'
import { urlFor } from '../../sanity'
import moment from 'moment'
import Link from 'next/link'

const NewsCard = ({newspost}) => {
  return (
    <Link href={'/newspost/'+newspost.slug.current}>
    <div className='rounded shadow p-1 w-full cursor-pointer hover:bg-gray-100 active:scale-95 transition-scale duration-150 ease-out'>
        <img className='h-[160px] w-full' src={urlFor(newspost.mainImage).url()} alt="" />
        <hr className="my-1" />
        <div className="">
            <h1 className='text-[13px] sm:text-xs text-right leading-9 mb-2'>{newspost.title.substring(0, 40)}</h1>
            <div className='flex justify-end space-x-1'>
                <span className='text-gray-500 text-xs'>
                    {moment(newspost.publishedAt).format('LL')}
                </span>
                <ClockIcon className='w-4 h-4 mt-1 text-gray-500' />
            </div>
        </div>
    </div>
    </Link>
  )
}

export default NewsCard