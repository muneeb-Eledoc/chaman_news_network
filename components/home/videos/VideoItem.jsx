import React from 'react'
import { PlayIcon } from '@heroicons/react/24/solid'
import { urlFor } from '../../../sanity'
import Link from 'next/link'

const VideoItem = ({ video }) => {

  return (
    video &&
    (<Link href={`/video/${video?.slug.current}`} >
      <a>
        <div className='flex flex-row-reverse mb-2 p-1 shadow mx-1 hover:bg-gray-50 rounded cursor-pointer active:scale-95 transition-scale duration-150 ease-in-out'>
          <div className="relative">
            <img loading="lazy" className='h-[75px] min-w-[105px] max-w-[105px] object-cover rounded' src={urlFor(video.thumbnail).url()} alt="" />
            <div className="absolute shadow bg-gray-200 rounded-full flex items-center justify-center pl-1 pr-[2px] py-[3px] top-1 right-1">
              <PlayIcon className='w-4 h-4' />
            </div>
          </div>
          <div>
            <h1 className='text-xs md:text-sm leading-8 text-right mr-2 tracking-wide'>{video.title.substring(0, 70)}</h1>
          </div>
        </div>
      </a>
    </Link>)
  )
}

export default VideoItem