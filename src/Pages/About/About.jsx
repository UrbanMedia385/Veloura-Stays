import React from 'react'
import CommonHero from '../../components/CommonHero'
import Section1 from './Section1'
import Section2 from './Section2'
import Section3 from './Section3'
import Testimonials from '../../components/Testimonials'
import Platforms from '../../components/Platforms'
import Section4 from './Section4'
import IMAGES from '../../Constants/Images'

const About = () => {
  const hero = IMAGES.ABOUTHERO;

  return (
    <div>
      <head>
        <title>About Veloura Stays – Discover Luxury Villas for Rent</title>
        <meta name="description" content="Explore Veloura Stays and experience curated luxury villas for rent. Enjoy premium amenities, private pools, and unforgettable vacation experiences." />
        <meta name="keywords" content="About Veloura Stays" />
      </head>
      <CommonHero
        // height='400px'
        image={hero}
        title="About Us"
        description="Home / About Us"
      />


      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Testimonials />
      <div className='mb-12'>
        <Platforms />
      </div>
    </div>
  )
}

export default About
