import Head from 'next/head'
import NavBar from '../components/NavBar'
import HomeContent from '../components/home/Home'
import { TopBar } from '../components/TopBar'
import { sanityClient } from '../sanity'
import Footer from '../components/footer/Footer'

export default function Home({ images, yoffset, latestVideo, moreVideos, headlineVideos, topStories, latestnews, headline, links }) {

  return (
    <div className='bg-gray-50 m-0 p-0'>
      <Head>
        <title>Truth Speaks News</title>
        <meta name="description" content="Truth Speaks News is provding you, Urdu News, Urdu Poetry, Horoscope, Technology, Weather, Business, Sports, Health, Islam, Women, Show-biz, Addab, Islamic Names, Articles and Features" />
        <meta property="og:title" content="Truth Speaks News" />
        <meta name="keywords" content="truth speaks news, truth speaks news in urdu, urdu news, urdu updates, latest urdu news, breaking news in urdu, truth speaks news urdu, truth speaks news tv urdu"></meta>
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:site_name" content="Truth Speaks News" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://truthspeaksnews.com/" />

        <meta name="google-site-verification" content="kcYzfPJkKq9bMhND4L3ZF_yvEbBZn1UtMmXq8PDuX0I" />
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
        <link rel="icon" href="/index.jpg" />
      </Head>

      <div className='xl:container m-auto bg-white shadow-lg'>
        <TopBar yoffset={yoffset} />
        <NavBar yoffset={yoffset} links={links} />
        <HomeContent topStories={topStories} headline={headline} latestnews={latestnews} headlineVideos={headlineVideos} moreVideos={moreVideos} latestVideo={latestVideo} images={images} />
      </div>
      <Footer links={links}/>
    </div>
  )
}

export async function getServerSideProps(context) {
  const query = `*[_type == 'images' ] {
    _id,
    image,
    _createdAt
  } | order(_createdAt desc)[0...17]`

  const latestVideoQuery = `*[_type == 'videos' ] {
    _id,
    ...
  } | order(_createdAt desc)[0]`

  const moreVideosQuery = `*[_type == 'videos'] {
    _id,
     slug,
     thumbnail,
     title,
     _createdAt
   }| order(_createdAt desc)[1...5]`

  const headlineVideosQuery = `*[_type == 'videos' && isHeadline == true] {
    _id,
     slug,
     thumbnail,
     title,
     isHeadline
   }| order(_createdAt desc)[1...5]`

  const topStoriesQuery = `*[_type == 'newsPost' && isHeadline == true && addToBanner == false ] {
    _id,
     slug,
     title,
     publishedAt,
     mainImage,
     metadesc
   }| order(publishedAt desc)[0...8]`

  const latestQuery = `*[_type == 'newsPost' && isHeadline == false && addToBanner == false ] {
    _id,
     slug,
     title,
     publishedAt,
     mainImage,
     metadesc
   }| order(publishedAt desc)[0...8]`

  const forBannerQuery = `*[_type == 'newsPost' && isHeadline == false && addToBanner == true ] {
    _id,
     slug,
     title,
     publishedAt,
     mainImage,
     metadesc
   }| order(publishedAt desc)[0]`

  const catagoryQuery = `*[_type == 'category' && addToNav == true] {
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

