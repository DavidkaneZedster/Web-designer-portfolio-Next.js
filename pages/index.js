import Head from 'next/head'
import { Contacts, Layout, Portfolio, WhyMe } from '../src/components'

const Home = () => {
  return (
    <div>
      <Head>
        <title>Главная страница</title>
        <meta name='description' content='Протфолио Веб-дизайнера, created by David Klorikyan' />
      </Head>
      <Layout>
        <div className='container'>
          <Portfolio />
          <WhyMe />
          <Contacts />
        </div>
      </Layout>
    </div>
  )
}

export default Home
