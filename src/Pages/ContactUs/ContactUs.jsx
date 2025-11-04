import React from 'react'
import CommonHero from '../../components/CommonHero'
import { Contact } from 'lucide-react'
import ContactForm from './EmailForm'
import Map from './Map'
import OffersEmail from '../../components/OffersEmail'
import IMAGES from '../../Constants/Images'

const ContactUs = () => {
  return (
    <div>
      <head>
        <title>Contact Us | Veloura Stays – Luxury Villa Rentals</title>
        <meta name="description" content="Contact Veloura Stays today for luxury villa rentals. Our team is ready to assist you with bookings, inquiries, and personalized stays. Call Now - +91 9797979075" />
        <meta name="keywords" content="Contact Us | Veloura Stays" />
      </head>
      <CommonHero
        image={IMAGES.CONTACTUSHERO}
        title="Contact Us"
        description="Home / Contact Us"
      />

      <ContactForm />

      <OffersEmail />

      <Map />
    </div>
  )
}

export default ContactUs
