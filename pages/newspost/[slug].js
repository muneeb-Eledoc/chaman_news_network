import { groq } from 'next-sanity'
import Head from 'next/head'
import Link from 'next/link'
import Footer from '../../components/footer/Footer'
import NavBar from '../../components/NavBar'
import NewsPostPage from '../../components/newspost/NewsPostPage'
import { TopBar } from '../../components/TopBar'
import { sanityClient, urlFor } from '../../sanity'
import { formatRelatedNews } from '../../utils/formatRelatedNews'

const Newspost = ({yoffset, newspost, latestnews, relatedNews, links}) => {
  return newspost ? (
    <div>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
        <title>{newspost.title + ' | Chaman News'}</title>
        <meta name="description" content={newspost.metadesc + ' | Chaman News'} />
        <meta property="og:image" content={urlFor(newspost.mainImage).url()} />
        <meta property="og:image:width" content="480" />
        <meta property="og:image:height" content="360" />
        <meta property="og:site_name" content="Chaman News" />
        <meta property="og:url" content={"https://truthspeaksnews.com/newspost/"+newspost.slug.current} />

        <link rel="icon" href="/index.jpg" />
      </Head>
      <div className='xl:container m-auto bg-white shadow-lg'>
        <TopBar yoffset={yoffset} />
        <NavBar yoffset={yoffset} links={links}/>
        <NewsPostPage latestnews={latestnews} newspost={newspost} relatedNews={relatedNews}/>
      </div>
      <Footer links={links} />
    </div>
  ) : (
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
  
    const query = `*[_type == 'newsPost' && slug.current == '${params.slug}'] {
      _id,
      ...
    }[0]`
    
    const latestQuery = `*[_type == 'newsPost'] {
        _id,
         slug,
         title,
         publishedAt,
         mainImage,
         metadesc
    }| order(_createdAt desc)[0...9]`

       
    const newspost = await sanityClient.fetch(query)
    if(!newspost){
      return {
        props: {}
      }
    }
    const latestnews = await sanityClient.fetch(latestQuery)

    let categories = newspost.categories
    let slug = newspost.slug.current

    const relatedNewsQuery = groq`*[_type == 'newsPost' && $catRef in categories[]._ref && $slug != slug.current] {
      _id,
     slug,
     title,
     publishedAt,
     mainImage,  
    }| order(_createdAt desc)[0...8]`

    const relatedNews = formatRelatedNews(await Promise.all(categories.map((cat)=> sanityClient.fetch(relatedNewsQuery, {catRef: cat._ref, slug}))))

    return {
      props: {
        newspost,
        latestnews,
        relatedNews
      }
    }
  }

export default Newspost