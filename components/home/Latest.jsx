import React from 'react'
import NewsCardHorizontal from './NewsCardHorizontal'

const Latest = ({latestnews}) => {
  return (
    <div className='w-full md:w-auto md:basis-1/2 bg-white '>
       <h1 className='section__Heading'> تازہ ترین خبریں</h1>
       <hr className='my-2 mx-1'/>
       <div className="flex flex-col pb-2 shadow border border-gray-200 rounded space-y-2">
        <span></span>
        {latestnews.map((latest, index)=>(
          <NewsCardHorizontal key={latest._id} latest={latest} />
        ))}
       </div>
    </div>
  )
}

export default Latest