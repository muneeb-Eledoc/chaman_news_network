import { groq } from 'next-sanity'
import React from 'react'
import { sanityClient, urlFor } from '../../sanity'

const Pictures = ({images}) => {
  return (
    <div className='w-full md:w-auto md:basis-1/3 bg-white'>
       <h1 className='text-right font-semibold py-2 border-r-4 border-yellow-300 pr-2'>تازہ ترین تصاویر</h1>
       <hr className='my-2 mx-1'/>
       <div className="flex p-1 m-1 justify-between border border-gray-200 rounded-md flex-wrap">
        {images.map((image, index) => (
          <img key={image._id} className='w-[49%] h-32 md:h-28 rounded-md my-1 object-cover md:hover:scale-125 transition-all duration-75' src={urlFor(image.image).url()} alt="" />
        ))}
       </div>
    </div>
  )
}

export async function getServerSideProps(context) {
  const query = groq`*[_type == 'images' ] {
    _id,
    ...
  } | order(_createdAt desc)`
  const images = await sanityClient.fetch(query)
  console.log(images)
  return {
    props: {}
  }
}


export default Pictures