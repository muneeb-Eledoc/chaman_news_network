import React from 'react'
import NewsCard from './NewsCard'

const TopStories = () => {
  return (
    <div className='w-full md:w-auto md:basis-1/2 bg-white'>
        <h1 className='text-right text-lg font-semibold py-2 border-r-4 border-yellow-300 pr-2'>اہم خبریں</h1>
        <hr className='my-2 mx-1'/>
        <div className="grid lg:grid-cols-2 md:grid-cols-3 grid-cols-2 gap-2 justify-items-center">
          <NewsCard />
          <NewsCard />
          <NewsCard />
          <NewsCard />
          <NewsCard />
          <NewsCard />
        </div>
    </div>
  )
}

export default TopStories