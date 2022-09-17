import React from 'react'
import Latest from './Latest'
import Pictures from './Pictures'
import TopStories from './TopStories'
import Videos from './videos/Videos'

const HomeContent = ({images, latestVideo, moreVideos, headlineVideos}) => {
  console.log(latestVideo)
  return (
    <div className='flex flex-col'>
        <div className="flex lg:flex-row w-full md:space-x-2 flex-col-reverse my-4 px-1">
          <Pictures images={images} />
          <TopStories />
          <Latest />
        </div>
        <hr className='my-5 mx-1 md:mx-3'/>
        <div className="flex p-1">
          <Videos latestVideo={latestVideo} moreVideos={moreVideos} headlineVideos={headlineVideos}/>
        </div>
    </div>
  )
}

export default HomeContent