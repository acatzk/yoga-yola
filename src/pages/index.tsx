import Head from 'next/head'
import type { NextPage } from 'next'

import Hero from '~/components/Hero'
import Layout from '~/layouts/Layout'

const Index: NextPage = (): JSX.Element => {
  return (
    <Layout metaTitle="Yoga">
      <Head>
        <title>Yoga</title>
      </Head>
      <Hero />
      <div className="h-[2000px]"></div>
    </Layout>
  )
}

export default Index
