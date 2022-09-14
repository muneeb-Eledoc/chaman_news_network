import Head from 'next/head'
import NavBar from '../components/NavBar'
import HomeContent from '../components/home/Home'
import { TopBar } from '../components/TopBar'
import { sanityClient } from '../sanity'
import { groq } from 'next-sanity'

export default function Home({images, yoffset}) {

  return (
    <div className='bg-gray-50'>
      <Head>
        <title>Truth Speaks</title>
        <meta name="description" content="Truth Speaks" />
        <link rel="icon" href="/index.jpg" />
      </Head>
      <div className='xl:container m-auto bg-white shadow-lg'>
        <TopBar yoffset={yoffset} />
        <NavBar yoffset={yoffset} />
        <HomeContent images={images} />
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
  return {
    props: {
      images
    }
  }
}

