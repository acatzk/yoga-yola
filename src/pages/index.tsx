import Head from 'next/head'
import type { NextPage } from 'next'

import Hero from '~/components/Hero'
import Layout from '~/layouts/Layout'
import Cards from '~/components/Cards'
import Facts from '~/components/Facts'
import Courses from '~/components/Courses'
import Pricing from '~/components/Pricing'
import Features from '~/components/Features'

const Index: NextPage = (): JSX.Element => {
  return (
    <Layout metaTitle="Yoga">
      <Head>
        <title>Yoga</title>
      </Head>
      <Hero />
      <Cards />
      <Facts />
      <Features />
      <Courses />
      <Pricing />
      <div className="h-[2000px]"></div>
    </Layout>
  )
}

export default Index
