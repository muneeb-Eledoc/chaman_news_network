import React from 'react'
import NewsCard from './NewsCard'

const TopStories = ({topStories}) => {
  return (
    <div className='w-full md:w-auto md:basis-1/2 bg-white'>
        <h1 className='section__Heading'>اہم خبریں</h1>
        <hr className='my-2 mx-1'/>
        <div className="grid lg:grid-cols-2 md:grid-cols-3 grid-cols-2 gap-3 justify-items-center shadow py-2 px-1 rounded ">
          {topStories.map((story) => (
            <NewsCard key={story.slug.current} story={story} />
          ))}
        </div>
    </div>
  )
}

export default TopStories