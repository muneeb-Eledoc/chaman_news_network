import { groq } from 'next-sanity'
import React, { useState } from 'react'
import { sanityClient, urlFor } from '../../sanity'
import ImageModal from './ImageModal'

const Pictures = ({images}) => {
  const [imageToOpen, setImageToOpen] = useState('')
  return (
    <div className='w-full lg:w-[25%] bg-white'>
       <h1 className='section__Heading'>تازہ ترین تصاویر</h1>
       <hr className='my-2 mx-1'/>
       <div className="flex p-1 m-1 justify-between border border-gray-200 shadow rounded-md flex-wrap">
        {images.map((image, index) => (
          <img onClick={()=> setImageToOpen(urlFor(image.image).url())} key={image._id} loading="lazy" className='w-[49%] cursor-pointer shadow h-32 md:h-44 lg:h-28 rounded-md my-1 object-cover md:hover:scale-105 transition-all duration-75' src={urlFor(image.image).url()} alt="" />
        ))}
       </div>
       <ImageModal imageToOpen={imageToOpen} setImageToOpen={setImageToOpen} />
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