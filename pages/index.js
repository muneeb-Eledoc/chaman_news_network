import Head from 'next/head'
import NavBar from '../components/NavBar'
import HomeContent from '../components/home/Home'
import { TopBar } from '../components/TopBar'
import { sanityClient } from '../sanity'
import { groq } from 'next-sanity'
import Footer from '../components/footer/Footer'

export default function Home({ images, yoffset, latestVideo, moreVideos, headlineVideos, topStories, latestnews, headline }) {

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
        <HomeContent topStories={topStories} headline={headline} latestnews={latestnews} headlineVideos={headlineVideos} moreVideos={moreVideos} latestVideo={latestVideo} images={images} />
      </div>
      <Footer />
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

  const topStoriesQuery = groq`*[_type == 'newsPost' && isHeadline == true && addToBanner == false ] {
    _id,
     slug,
     title,
     publishedAt,
     mainImage,
     metadesc
   }| order(_createdAt desc)[0...8]`

  const latestQuery = groq`*[_type == 'newsPost' && isHeadline == false && addToBanner == false ] {
    _id,
     slug,
     title,
     publishedAt,
     mainImage,
     metadesc
   }| order(_createdAt desc)[0...8]`

  const forBannerQuery = groq`*[_type == 'newsPost' && isHeadline == false && addToBanner == true ] {
    _id,
     slug,
     title,
     publishedAt,
     mainImage,
     metadesc
   }| order(_createdAt desc)[0]`

  const catagoryQuery = groq`*[_type == 'category' && addToNav == true] {
    _id,
   ...
   }| order(_createdAt desc)`

  const topStories = await sanityClient.fetch(topStoriesQuery)

  const images = await sanityClient.fetch(query)

  const latestVideo = await sanityClient.fetch(latestVideoQuery)

  const latestnews = await sanityClient.fetch(latestQuery)

  const moreVideos = await sanityClient.fetch(moreVideosQuery)

  const headlineVideos = await sanityClient.fetch(headlineVideosQuery)

  const headline = await sanityClient.fetch(forBannerQuery)

  const catagories = await sanityClient.fetch(catagoryQuery)

  return {
    props: {
      images,
      catagories,
      headline,
      latestVideo,
      latestnews,
      topStories,
      moreVideos,
      headlineVideos
    }
  }
}

