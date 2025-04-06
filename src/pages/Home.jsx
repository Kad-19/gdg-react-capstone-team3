import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Feature from '../components/Feature'
import Banner from '../components/Banner'
import Testimonial from '../components/Testimonial'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <section className='home'>
      <Header/>
      <Hero/>
      <Feature/>
      <Banner/>
      <Testimonial/>
      <Footer/>
    </section>
  )
}

export default Home
