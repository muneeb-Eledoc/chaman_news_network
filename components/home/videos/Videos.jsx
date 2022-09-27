import { PlayIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'
import React from 'react'
import { urlFor } from '../../../sanity'
import VideoItem from './VideoItem'

const Videos = ({latestVideo, moreVideos, headlineVideos}) => {

  return (
    <div className='mb-8 flex lg:flex-row-reverse flex-col flex-1'>
      <div className="flex flex-col basis-5/12 border-l border-gray-200">
        <h1 className='section__Heading'>ویڈیوز</h1>
        <hr className='my-2 mx-2' />
        <Link href={`/video/${latestVideo.slug.current}`} >
          <div className="flex flex-col px-1 cursor-pointer" >
            <div className='relative'>
              <img loading="lazy" className='h-[330px] w-full rounded shadow object-cover' src={urlFor(latestVideo.thumbnail).url()} alt="" />
              <div className="absolute shadow bg-gray-200 rounded-full flex items-center justify-center pl-1 pr-[2px] py-[3px] top-2 right-2">
                <PlayIcon className='w-7 h-7' />
              </div>
            </div>
            <div>
              <h4 className='text-right mt-4 text-md'>{latestVideo.title.substring(0, 60)}</h4>
            </div>
          </div>
        </Link>
      </div>
      <div className="flex lg:flex-row-reverse flex-col basis-7/12 mx-1">
        <div className="flex flex-col w-full">
          <h1 className='section__Heading'>تازہ ترین ویڈیوز</h1>
          <hr className='my-2 mx-2' />
          {moreVideos.map((video)=>(
            <VideoItem key={video._id} video={video} />
          ))}
        </div>
        <div className="flex flex-col w-full lg:mx-1">
          <h1 className='section__Heading'>نیوز ہیڈلائن</h1>
          <hr className='my-2 mx-2' />
          {headlineVideos.map((video)=>(
            <VideoItem key={video._id} video={video} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Videos