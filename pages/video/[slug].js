import { groq } from 'next-sanity'
import Head from 'next/head'
import Link from 'next/link'
import React, { useEffect } from 'react'
import Footer from '../../components/footer/Footer'
import NavBar from '../../components/NavBar'
import { TopBar } from '../../components/TopBar'
import VideoPage from '../../components/video/VideoPage'
import { sanityClient, urlFor } from '../../sanity'

const Video = ({ video, yoffset, relatedVideos, links}) => {
  
  return video ? (
    <div>
      <Head>
        <meta charset="UTF-8" />
        <title>{video.title + ' | Chaman News'}</title>
        <meta name="description" content={video.title + " | Chaman News"} />
        <meta property="og:image" content={urlFor(video.thumbnail).url()} />
        <meta property="og:image:width" content="480" />
        <meta property="og:image:height" content="360" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={"https://truthspeaksnews.com/video/"+video.slug.current} />
        <meta property="og:site_name" content="Chaman News" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"/>

        <link rel="icon" href="/index.jpg" />
      </Head>
      <div className='xl:container m-auto bg-white shadow-lg'>
        <TopBar yoffset={yoffset} />
        <NavBar yoffset={yoffset} links={links} />
        <VideoPage video={video} relatedVideos={relatedVideos} />
      </div>
      <Footer links={links}/>
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

  const query = `*[_type == 'videos' && slug.current == '${params.slug}'] {
    _id,
    ...
  }[0]`
  
  const video = await sanityClient.fetch(query)
  if(!video) return {
    props: {}
  }

  let tags = video.tags
  let slug = video.slug.current

  const relatedVideosQuery = `*[_type == 'videos' &&  count(($tags)[@ in ^.tags]) > 0 && slug.current != $slug ] {
    _id,
     slug,
     thumbnail,
     title,
     isHeadline,
     tags
   }| order(_createdAt desc)[0...14]`

  const relatedVideos = await sanityClient.fetch(relatedVideosQuery, {tags, slug})

  return {
    props: {
      video,
      relatedVideos
    }
  }
}


export default Video