import { groq } from 'next-sanity'
import Image from 'next/image'
import React, { useState } from 'react'
import { sanityClient, urlFor } from '../../sanity'
import ImageModal from './ImageModal'

const Pictures = ({images}) => {
  const [imageToOpen, setImageToOpen] = useState('')
  return (
    <div className='w-full lg:w-[25%] bg-white'>
       <h1 className='section__Heading'>تازہ ترین تصاویر</h1>
       <hr className='my-2 mx-1'/>
       <div className="grid p-1 m-1 shadow lg:grid-cols-2 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-1">
        {images.map((image, index) => (
          <div onClick={()=> setImageToOpen(urlFor(image.image).url())} key={image._id} className='w-full relative group cursor-pointer'>
            <Image
              className='rounded-lg object-cover cursor-pointer'
              src={urlFor(image.image).url()}
              alt=""
              width={148}
              height={130}
              sizes="(min-width: 1578px) 100%,"
            />
            <div className='w-full group-hover:opacity-100 opacity-0 transition-opacity duration-300 border-4 border-green-500 h-full bg-[#0000] absolute top-0 left-0 rounded-md'></div>
          </div>
          // <img onClick={()=> setImageToOpen(urlFor(image.image).url())} key={image._id} loading="lazy" className='w-[49%] cursor-pointer shadow h-32 md:h-44 lg:h-28 rounded-md my-1 object-cover md:hover:scale-105 transition-all duration-75' src={urlFor(image.image).url()} alt="" />
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