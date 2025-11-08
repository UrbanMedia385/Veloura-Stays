import React from 'react'
import HeroIzara from './HeroIzara'
import Navbar2 from '../../layout/Navbar2'
import FullSection from './FullSection'
import SendMessage from '../../components/SendMessage'
import { Title, Meta } from "react-head"

const VillaIzara = () => {
    return (
        <>
            {/* SEO Meta Tags */}
            <Title>Villa Izara - Book 5 BHK Pvt Pool Hanging Villa in Udaipur</Title>
            <Meta name="description" content="Book Villa Izara, A Luxury 5 BHK private pool hanging villa in Udaipur at ₹60,000. Enjoy panoramic hill views, and top-notch amenities for your perfect stay. Book Now!" />
            <Meta name="robots" content="index, follow" />
            <link rel="canonical" href="https://velourastays.com/villa-izara" />

            {/* Open Graph Tags */}
            <Meta property="og:title" content="Villa Izara - Book 5 BHK Pvt Pool Hanging Villa in Udaipur" />
            <Meta property="og:description" content="Book Villa Izara, A Luxury 5 BHK private pool hanging villa in Udaipur at ₹60,000. Enjoy panoramic hill views, and top-notch amenities for your perfect stay. Book Now!" />
            <Meta property="og:url" content="https://velourastays.com/villa-izara" />
            <Meta property="og:type" content="website" />
            <Meta property="og:image" content="https://velourastays.com/izarahero1.jpg" />
            <Meta property="og:site_name" content="Veloura Stays" />

            <div>
                <Navbar2 />
                <HeroIzara />
                <FullSection />
                <SendMessage />
            </div>
        </>
    )
}

export default VillaIzara
