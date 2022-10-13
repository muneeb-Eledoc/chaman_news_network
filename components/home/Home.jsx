import React from 'react'
import Headline from './Headline'
import Latest from './Latest'
import Pictures from './Pictures'
import TopStories from './TopStories'
import Videos from './videos/Videos'

const HomeContent = ({images, latestVideo, moreVideos, headlineVideos, topStories, latestnews, headline}) => {
  return (
    <div className='flex flex-col md:px-1'>
        <div className="flex lg:flex-row w-full lg:space-x-2 flex-col-reverse md:my-4">
          <Pictures images={images} />
          <div className='flex flex-col lg:w-[75%]'>
            <Headline headline={headline} />
            <hr className='my-3 mx-1 hidden lg:block'/>
            <div className='flex flex-col lg:flex-row lg:space-x-2'>
              <TopStories topStories={topStories} />
              <Latest latestnews={latestnews}/>
            </div>
          </div>
        </div>
        <hr className='my-5 mx-1 md:mx-3'/>
        <div className="flex">
          <Videos latestVideo={latestVideo} moreVideos={moreVideos} headlineVideos={headlineVideos}/>
        </div>
    </div>
  )
}

export default HomeContent