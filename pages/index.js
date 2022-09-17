import Head from 'next/head'
import NavBar from '../components/NavBar'
import HomeContent from '../components/home/Home'
import { TopBar } from '../components/TopBar'
import { sanityClient } from '../sanity'
import { groq } from 'next-sanity'

export default function Home({images, yoffset, latestVideo, moreVideos, headlineVideos}) {

  return (
    <div className='bg-gray-50 m-0 p-0'>
      <Head>
        <title>Truth Speaks</title>
        <meta name="description" content="Truth Speaks" />
        <link rel="icon" href="/index.jpg" />
      </Head>

      <div className='xl:container m-auto bg-white shadow-lg'>
        <TopBar yoffset={yoffset} />
        <NavBar yoffset={yoffset} />
        <HomeContent headlineVideos={headlineVideos} moreVideos={moreVideos} latestVideo={latestVideo} images={images} />
      </div>

    </div>
  )
}

export async function getServerSideProps(context) {
  const query = groq`*[_type == 'images' ] {
    _id,
    ...
  } | order(_createdAt desc)`

  const latestVideoQuery = groq`*[_type == 'videos' ] {
    _id,
    ...
  } | order(_createdAt desc)[0]`

  const moreVideosQuery = groq`*[_type == 'videos'] {
    _id,
     slug,
     thumbnail,
     title,
     _createdAt
   }| order(_createdAt desc)[1...5]`

  const headlineVideosQuery = groq`*[_type == 'videos' && isHeadline == true] {
    _id,
     slug,
     thumbnail,
     title,
     isHeadline
   }| order(_createdAt desc)[0...4]`

  const images = await sanityClient.fetch(query)
  const latestVideo = await sanityClient.fetch(latestVideoQuery)
  const moreVideos = await sanityClient.fetch(moreVideosQuery)
  const headlineVideos = await sanityClient.fetch(headlineVideosQuery)

  return {
    props: {
      images,
      latestVideo,
      moreVideos,
      headlineVideos
    }
  }
}

