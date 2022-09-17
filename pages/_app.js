import { useEffect, useState } from 'react';
import '../styles/globals.css'
import NextNProgress from "nextjs-progressbar";

function MyApp({ Component, pageProps }) {
  const [yoffset, setYoffset] = useState(0)

  useEffect(()=>{
    const scrollCallBack = ()=>{
      setYoffset(window.pageYOffset)
    }
    window.addEventListener('scroll', scrollCallBack);
    return ()=>{
      window.removeEventListener('scroll', scrollCallBack)
    }
  }, [])

  return <>
  <NextNProgress 
  color="#47B5FF"
  startPosition={0.3}
  stopDelayMs={200}
  height={3}
  showOnShallow={true}/>
  <Component yoffset={yoffset} {...pageProps} />
  </>
}

export default MyApp
