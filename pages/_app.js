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
  color="#367E18"
  startPosition={0.3}
  stopDelayMs={200}
  height={3}
  showOnShallow={true}
  options={{ showSpinner: false }}
  />
  <Component yoffset={yoffset} {...pageProps} />
  </>
}

export default MyApp
