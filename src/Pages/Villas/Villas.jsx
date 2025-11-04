import React from 'react'
import CommonHero from '../../components/CommonHero'
import OffersEmail from '../../components/OffersEmail'
import Filters from './Filters'
import IMAGES from '../../Constants/Images'

const Villas = () => {
    return (
        <div>
            <head>
                <title>Private Villas in Udaipur | Book Now - Veloura Stays</title>
                <meta name="description" content="Book your private villas in Udaipur with Veloura Stays. Enjoy private pools, dedicated staff, luxury accommodations, and the best deals. book with Veloura Stays now." />
            </head>
            <CommonHero
                image={IMAGES.VILLAPAGEHERO}
                title="Villas & Resorts"
                description="Home/ Villas & Resorts"
            />

            <Filters />

            <OffersEmail />
        </div>
    )
}

export default Villas