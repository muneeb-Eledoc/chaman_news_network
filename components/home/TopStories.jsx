import React from 'react'
import NewsCard from './NewsCard'

const TopStories = ({topStories}) => {
  return (
    <div className='w-full md:w-auto md:basis-1/2 bg-white'>
        <h1 className='text-right text-lg font-semibold py-2 border-r-4 border-yellow-300 pr-2'>اہم خبریں</h1>
        <hr className='my-2 mx-1'/>
        <div className="grid lg:grid-cols-2 md:grid-cols-3 grid-cols-2 gap-2 justify-items-center">
          {topStories.map((story) => (
            <NewsCard key={story.slug.current} story={story} />
          ))}
        </div>
    </div>
  )
}

export default TopStories