import React from 'react'
import CommonHero from '../../components/CommonHero'
import Villas from './Villas'
import PopularAttraction from './PopularAttraction'
import BottomCard from './BottomCard'
import OffersEmail from '../../components/OffersEmail'
import Theme from '../../Constants/Theme'
import IMAGES from '../../Constants/Images'
import { Title, Meta } from "react-head"

const UdaipurPage = () => {
    return (
        <>
            {/* SEO Meta Tags */}
            <Title>Book Luxury Villas with Pvt Pool in Udaipur - Veloura Stays</Title>
            <Meta name="description" content="Luxury Villas with Pvt Pool - Experience luxury villas with private pools in Udaipur with Veloura Stay. We offers premium villas for family getaways, romantic escapes, and luxury vacations." />
            <Meta name="robots" content="index, follow" />
            <link rel="canonical" href="https://velourastays.com/destinations/udaipur" />

            {/* Open Graph Tags */}
            <Meta property="og:title" content="Book Luxury Villas with Pvt Pool in Udaipur - Veloura Stays" />
            <Meta property="og:description" content="Luxury Villas with Pvt Pool - Experience luxury villas with private pools in Udaipur with Veloura Stay. We offers premium villas for family getaways, romantic escapes, and luxury vacations." />
            <Meta property="og:url" content="https://velourastays.com/destinations/udaipur" />
            <Meta property="og:type" content="website" />
            <Meta property="og:image" content="https://velourastays.com/UdaipurHero2.jpg" />
            <Meta property="og:site_name" content="Veloura Stays" />

            <div>
                <CommonHero
                    image={IMAGES.VILLAPAGEHERO}
                    description="Home / Udaipur Villa"
                    title="Udaipur Villa"
                />

                <Villas />
                <PopularAttraction />
                <BottomCard />
                <OffersEmail />
                <div className="section-container ">
                    <h2
                        className={`font-serif text-[${Theme.colors.darkText}]
       text-base sm:text-lg md:text-xl
        text-center leading-relaxed sm:leading-snug md:leading-normal
        sm:mb-8 md:mb-10  mx-auto mb-12`}
                    >
                        On your next trip to Udaipur, don’t just plan the sights — you deserve an
                        experience that stays with you. Let <span className={`font-semibold text-[${Theme.colors.text}]`}>Veloura Stays </span>
                        turn every moment into a memory you’ll cherish.
                    </h2>
                </div>
            </div>
        </>
    )
}

export default UdaipurPage
