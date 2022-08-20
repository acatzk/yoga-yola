import React from 'react'
import Head from 'next/head'

type Props = {
  metaTitle: string
  children: React.ReactNode
}

const Layout: React.FC<Props> = ({ metaTitle, children }): JSX.Element => {
  return (
    <div className="overflow-hidden font-primary">
      <Head>
        <title>{metaTitle}</title>
      </Head>
      {children}
    </div>
  )
}

export default Layout
