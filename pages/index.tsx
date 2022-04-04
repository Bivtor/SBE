import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../pages/components/Header'
import HomePage from './Home'


const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>SBE</title>
        <meta name="description" content="Solution Based Enterprises" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <HomePage />

    </div>
  )
}

export default Home