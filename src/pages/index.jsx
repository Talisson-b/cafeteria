import About from '@/components/About'
import Details from '@/components/Details'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import NavBar from '@/components/NavBar'
import Products from '@/components/Products'
import Reviews from '@/components/Reviews'
import Social from '@/components/Social'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Cafeteria</title>
      </Head>
      <NavBar />
      <Header />
      <Details />
      <Products />
      <About />
      <Social />
      <Reviews />
      <Footer />
    </>
  )
}
