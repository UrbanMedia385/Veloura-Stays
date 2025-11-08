import React from 'react'
import CommonHero from '../../components/CommonHero'
import OffersEmail from '../../components/OffersEmail'
import Filters from './Filters'
import IMAGES from '../../Constants/Images'
import { Title, Meta } from "react-head"

const Villas = () => {
    return (
        <>
            {/* SEO Meta Tags */}
            <Title>Private Villas in Udaipur | Book Now - Veloura Stays</Title>
            <Meta name="description" content="Book your private villas in Udaipur with Veloura Stays. Enjoy private pools, dedicated staff, luxury accommodations, and the best deals. book with Veloura Stays now." />
            <Meta name="robots" content="index, follow" />
            <link rel="canonical" href="https://velourastays.com/villas" />

            {/* Open Graph Tags */}
            <Meta property="og:title" content="Private Villas in Udaipur | Book Now - Veloura Stays" />
            <Meta property="og:description" content="Book your private villas in Udaipur with Veloura Stays. Enjoy private pools, dedicated staff, luxury accommodations, and the best deals. book with Veloura Stays now." />
            <Meta property="og:url" content="https://velourastays.com/villas" />
            <Meta property="og:type" content="website" />
            <Meta property="og:image" content="https://velourastays.com/VillapageHero.jpg" />
            <Meta property="og:site_name" content="Veloura Stays" />

            <div>
                <CommonHero
                    image={IMAGES.VILLAPAGEHERO}
                    title="Villas & Resorts"
                    description="Home/ Villas & Resorts"
                />

                <Filters />

                <OffersEmail />
            </div>
        </>
    )
}

export default Villas