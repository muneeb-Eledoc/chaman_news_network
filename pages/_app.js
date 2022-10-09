import { useEffect, useState } from 'react';
import '../styles/globals.css'
import NextNProgress from "nextjs-progressbar";
import { sanityClient } from '../sanity';

function MyApp({ Component, pageProps }) {
  const [yoffset, setYoffset] = useState(0)
  const [links, setLinks] = useState([])

  useEffect(()=>{
    const scrollCallBack = ()=>{
      setYoffset(window.pageYOffset)
    }
    window.addEventListener('scroll', scrollCallBack);
    return ()=>{
      window.removeEventListener('scroll', scrollCallBack)
    }
  }, [])

  useEffect(() => {
    const fetchLinks = async ()=>{
      const q = `*[_type == 'category' && addToNav == true]{_id, title}| order(_createdAt desc)`
      const data = await sanityClient.fetch(q)
      setLinks(data)
    }
    fetchLinks()
  }, [])
  

  return <>
  <NextNProgress 
  color="#90EE90"
  startPosition={0.3}
  stopDelayMs={200}
  height={2}
  showOnShallow={true}
  options={{ showSpinner: false }}
  />
  <Component links={links} yoffset={yoffset} {...pageProps} />
  </>
}

export default MyApp
