import React from 'react'
import Latest from './Latest'
import Pictures from './Pictures'
import TopStories from './TopStories'

const HomeContent = ({images}) => {
  return (
    <div className='flex flex-col'>
        <div className="flex lg:flex-row w-full md:space-x-2 flex-col-reverse my-4 px-1">
          <Pictures images={images} />
          <TopStories />
          <Latest />
        </div>
        <hr className='my-2 mx-1'/>
        <div className="flex">
          
        </div>
    </div>
  )
}

export default HomeContent