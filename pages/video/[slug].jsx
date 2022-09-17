import { groq } from 'next-sanity'
import Head from 'next/head'
import React from 'react'
import NavBar from '../../components/NavBar'
import { TopBar } from '../../components/TopBar'
import VideoPage from '../../components/video/VideoPage'
import { sanityClient } from '../../sanity'

const Video = ({video, yoffset}) => {
  return (
    <div>
      <Head>
        <title>{video.title + ' | Truth Speaks'}</title>
        <meta name="description" content={video.title + " | Truth Speaks"} />
        <link rel="icon" href="/index.jpg" />
      </Head>
       <div className='xl:container m-auto bg-white shadow-lg'>
        <TopBar yoffset={yoffset} />
        <NavBar yoffset={yoffset} />
        <VideoPage video={video} />
      </div>
    </div>
  )
}

export async function getServerSideProps(context) {
  const {params} = context

  const query = groq`*[_type == 'videos' && slug.current == '${params.slug}'] {
    _id,
    ...
  }[0]`

  const video = await sanityClient.fetch(query)

  return {
    props: {
      video
    }
  }
}


export default Video