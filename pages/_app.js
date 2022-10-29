import { useEffect, useState } from 'react';
import '../styles/globals.css'
import NextNProgress from "nextjs-progressbar";
import { sanityClient } from '../sanity';
import Script from 'next/script'

function MyApp({ Component, pageProps }) {
  const [yoffset, setYoffset] = useState(0)
  const [links, setLinks] = useState([])

  useEffect(() => {
    const scrollCallBack = () => {
      setYoffset(window.pageYOffset)
    }
    window.addEventListener('scroll', scrollCallBack);
    return () => {
      window.removeEventListener('scroll', scrollCallBack)
    }
  }, [])

  useEffect(() => {
    const fetchLinks = async () => {
      const q = `*[_type == 'category' && addToNav == true]{_id, title}| order(_createdAt desc)`
      const data = await sanityClient.fetch(q)
      setLinks(data)
    }
    fetchLinks()
  }, [])


  return <>
    <NextNProgress
      color="#7DCE13"
      startPosition={0.3}
      stopDelayMs={200}
      height={2}
      showOnShallow={true}
      options={{ showSpinner: false }}
    />
    <div className='w-full flex-col flex justify-center items-center h-screen fixed top-0 right-0 bg-white z-50' id='loader'>
      <img className='w-36 rounded shadow animate-logo' src='/index.jpg' alt='Truth Speaks News' />
      <img className='w-20 absolute bottom-20 rounded ' src='/loading2.gif' alt='Truth Speaks News' />
      <span className='font-sans absolute bottom-10 font-medium'>
        By<b className='font-sans text-lg'> Truth Speaks News™</b>
      </span>
    </div>
    <Component links={links} yoffset={yoffset} {...pageProps} />
    <Script src="/script.js" />
  </>
}

export default MyApp
