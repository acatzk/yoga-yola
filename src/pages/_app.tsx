import Aos from 'aos'
import { useEffect } from 'react'
import type { AppProps } from 'next/app'

import '~/styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    Aos.init({
      duration: 1800,
      offset: 100
    })
  }, [])

  return <Component {...pageProps} />
}

export default MyApp
