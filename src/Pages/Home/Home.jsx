import React from 'react'
import HeroSection from '../../components/HomeHeroSection'
import DividerWithIcon from '../../components/HorizontalDivider'
import BestResorts from './BestResorts'
import Testimonials from '../../components/Testimonials'
import Wander from './Wander'
import Villas from './Villas'
import Rooms from './Rooms'
import Occasion from './Occations'
import AlternatingContent from './AlternatingContent'
import Services from './Services'
import HomeFooter from './HomeFooter'
import Platforms from '../../components/Platforms'
import { Title, Meta } from "react-head"

const Home = () => {
  return (
    <>
      {/* SEO Meta Tags */}
      <Title>Best Luxury Pool Villa Rentals for Vacations | Veloura Stays</Title>
      <Meta name="description" content="Explore the best luxury pool villas with Veloura Stays. Book private pool villas and holiday homes on rent for relaxing vacations, romantic getaways, or family retreats." />
      <Meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://velourastays.com/" />

      {/* Open Graph Tags */}
      <Meta property="og:title" content="Best Luxury Pool Villa Rentals for Vacations| Veloura Stays" />
      <Meta property="og:description" content="Explore the best luxury pool villas with Veloura Stays. Book private pool villas and holiday homes on rent for relaxing vacations, romantic getaways, or family retreats." />
      <Meta property="og:url" content="https://velourastays.com/" />
      <Meta property="og:type" content="website" />
      <Meta property="og:image" content="https://velourastays.com/home1.jpg" />
      <Meta property="og:site_name" content="Veloura Stays" />

      <div>
        <HeroSection

        />
        <BestResorts />
        <Wander />
        <Villas />
        <Rooms />
        <Occasion />
        <AlternatingContent />
        <Services />
        <Platforms />
        <Testimonials />
        <HomeFooter />
      </div>
    </>
  )
}

export default Home
