import React from 'react'
import CommonHero from '../../components/CommonHero'
import { Contact } from 'lucide-react'
import ContactForm from './EmailForm'
import Map from './Map'
import OffersEmail from '../../components/OffersEmail'
import IMAGES from '../../Constants/Images'
import { Title, Meta } from "react-head"

const ContactUs = () => {
  return (
    <>
      {/* SEO Meta Tags */}
      <Title>Contact Us | Veloura Stays – Luxury Villa Rentals</Title>
      <Meta name="description" content="Contact Veloura Stays today for luxury villa rentals. Our team is ready to assist you with bookings, inquiries, and personalized stays. Call Now - +91 9797979075" />
      <Meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://velourastays.com/contact" />

      {/* Open Graph Tags */}
      <Meta property="og:title" content="Contact Us | Veloura Stays – Luxury Villa Rentals" />
      <Meta property="og:description" content="Contact Veloura Stays today for luxury villa rentals. Our team is ready to assist you with bookings, inquiries, and personalized stays. Call Now - +91 9797979075" />
      <Meta property="og:url" content="https://velourastays.com/contact" />
      <Meta property="og:type" content="website" />
      <Meta property="og:image" content="https://velourastays.com/contactushero.jpg" />
      <Meta property="og:site_name" content="Veloura Stays" />

      <div>
        <CommonHero
          image={IMAGES.CONTACTUSHERO}
          title="Contact Us"
          description="Home / Contact Us"
        />

        <ContactForm />

        <OffersEmail />

        <Map />
      </div>
    </>
  )
}

export default ContactUs
