import React from 'react'
import { useState } from 'react'
import { sanityClient } from '../../sanity'
import NewsCard from './NewsCard'

const TopStories = ({ topStories }) => {
  const [newposts, setNewposts] = useState(topStories)
  const [startIndex, setStartIndex] = useState(8)
  const [endIndex, setEndIndex] = useState(12)
  const [isEmpty, setIsEmpty] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  async function fetchNextPage() {    
    try{
      setIsLoading(true)
      const q = `*[_type == 'newsPost' && isHeadline == true && addToBanner == false]{
        _id,
         slug,
         title,
         publishedAt,
         mainImage,
         metadesc
       }| order(publishedAt desc)[${startIndex}...${endIndex}]`
      const result = await sanityClient.fetch(q)
      if (result.length > 0) {
        setNewposts([...newposts, ...result])
        setStartIndex(endIndex)
        setEndIndex(endIndex+4)
      }else{
        setIsEmpty(true)
      }
      setIsLoading(false)
    }catch(e){
      console.log('Something went wrong.')
    }
  }

  return (
    <div className='w-full flex flex-col md:w-auto md:basis-1/2 bg-white'>
      <h1 className='section__Heading'>اہم خبریں</h1>
      <hr className='my-2 mx-1' />
      <div className="grid lg:grid-cols-2 md:grid-cols-3 grid-cols-2 gap-3 justify-items-center shadow py-2 px-1 ">
        {newposts.map((story) => (
          <NewsCard key={story.slug.current} story={story} />
        ))}
      </div>
      {isLoading&&(
      <div className='bg-green-800 rounded-3xl mt-2 shadow w-12 mx-auto'>
        <img className='w-12 h-10' src='/loading.gif' alt='loading'/>
      </div>
      )}
      <button onClick={fetchNextPage} disabled={isEmpty} className='text-sm disabled:from-gray-400 disabled:to-gray-500 disabled:border-none w-36 block mx-auto hover:from-green-700 hover:to-green-500 bg-gradient-to-b tracking-wide from-green-500 to-green-700 rounded-md pt-2 pb-4 mt-2 text-white border border-green-600 shadow transition-all duration-300 relative'>{'مزید لوڈ کریں'}</button>
    </div>
  )
}

export default TopStories