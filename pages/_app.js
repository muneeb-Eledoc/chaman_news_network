import { useEffect, useState } from 'react';
import '../styles/globals.css'

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

  return <Component yoffset={yoffset} {...pageProps} />
}

export default MyApp
