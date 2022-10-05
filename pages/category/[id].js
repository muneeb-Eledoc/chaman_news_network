import { groq } from 'next-sanity'
import Head from 'next/head'
import { useRouter } from 'next/router'
import React from 'react'
import MainPage from '../../components/category/MainPage'
import Footer from '../../components/footer/Footer'
import NavBar from '../../components/NavBar'
import { TopBar } from '../../components/TopBar'
import { sanityClient } from '../../sanity'

const Category = ({ yoffset, links, categoryNews }) => {
  const router = useRouter()
  const { id: catId } = router.query
  return (
    <div>
      <Head>
        <title>Truth Speaks News</title>
        <meta name="description" content='Truth Speaks News' />
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <meta property="og:url" content={"https://truthspeaksnews.com/category/"+catId} />
        <link rel="icon" href="/index.jpg" />
      </Head>
      <div className='xl:container m-auto bg-white shadow-lg'>
        <TopBar yoffset={yoffset} />
        <NavBar yoffset={yoffset} links={links} />
        <MainPage links={links} categoryNews={categoryNews} catId={catId} />
      </div>
      <Footer links={links} />
    </div>
  )
}

export async function getServerSideProps(context) {
  const { params } = context

  const categoryQuery = groq`*[_type == 'newsPost' && $catRef in categories[]._ref ] {
      _id,
     slug,
     title,
     publishedAt,
     mainImage,
     metadesc 
    }| order(_createdAt desc)[0...36]`
  const categoryNews = await sanityClient.fetch(categoryQuery, { catRef: params.id })

  return {
    props: {
      categoryNews
    }
  }
}

export default Category