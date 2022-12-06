import Head from 'next/head'
import { HeaderPortfolio } from '../src/components/Header/header-portfolio/header-portfolio'
import { Footer } from '../src/components/Footer/Footer'
import { PortfolioPageComponent } from '../src/components'

const PortfolioPage = () => {
  return (
    <>
      <Head>
        <title>Портфолио</title>
        <meta name='description' content='Протфолио Веб-дизайнера, created by David Klorikyan' />
        <link rel='shortcut icon' href='#' />
      </Head>
      <HeaderPortfolio />
      <PortfolioPageComponent />
      <Footer />
    </>
  )
}

export default PortfolioPage
