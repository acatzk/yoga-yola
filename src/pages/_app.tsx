import Aos from 'aos'
import React from 'react'
import { useEffect } from 'react'
import type { AppProps } from 'next/app'

import '~/styles/video.scss'
import '~/styles/globals.css'

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  useEffect(() => {
    Aos.init({
      duration: 1800,
      offset: 100
    })
  }, [])

  return <Component {...pageProps} />
}

export default App
