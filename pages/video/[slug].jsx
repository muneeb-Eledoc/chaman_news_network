import { groq } from 'next-sanity'
import Head from 'next/head'
import Link from 'next/link'
import React, { useEffect } from 'react'
import NavBar from '../../components/NavBar'
import { TopBar } from '../../components/TopBar'
import VideoPage from '../../components/video/VideoPage'
import { sanityClient } from '../../sanity'

const Video = ({ video, yoffset, relatedVideos}) => {
  
  return video ? (
    <div>
      <Head>
        <title>{video.title + ' | Truth Speaks'}</title>
        <meta name="description" content={video.title + " | Truth Speaks"} />
        <link rel="icon" href="/index.jpg" />
      </Head>
      <div className='xl:container m-auto bg-white shadow-lg'>
        <TopBar yoffset={yoffset} />
        <NavBar yoffset={yoffset} />
        <VideoPage video={video} relatedVideos={relatedVideos} />
      </div>
    </div>
  ): (
    <div>
      <Head>
        <title>404 Not found</title>
        <link rel="icon" href="/index.jpg" />
      </Head>
      <div className='flex w-full h-screen justify-center items-center flex-col bg-gray-50 space-y-4'>
        <span></span>
        <span className='text-xl'>
          404 Not found
        </span>
        <Link href='/'>
            <a className='back-button'>
                Go Back
            </a>
        </Link>
      </div>
    </div>
  )

}

export async function getServerSideProps(context) {
  const { params } = context

  const query = groq`*[_type == 'videos' && slug.current == '${params.slug}'] {
    _id,
    ...
  }[0]`
  
  const video = await sanityClient.fetch(query)
  if(!video) return {
    props: {}
  }

  let tags = video.tags
  let slug = video.slug.current

  const relatedVideosQuery = groq`*[_type == 'videos' &&  count(($tags)[@ in ^.tags]) > 0 && slug.current != $slug ] {
    _id,
     slug,
     thumbnail,
     title,
     isHeadline,
     tags
   }| order(_createdAt desc)`

  const relatedVideos = await sanityClient.fetch(relatedVideosQuery, {tags, slug})

  return {
    props: {
      video,
      relatedVideos
    }
  }
}


export default Video