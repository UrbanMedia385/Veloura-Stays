import React from 'react'
import HeroIzara from './HeroIzara'
import Navbar2 from '../../layout/Navbar2'
import FullSection from './FullSection'
import SendMessage from '../../components/SendMessage'

const VillaIzara = () => {
    return (
        <div>
            <head>
                <title>Villa Izara - Book 5 BHK Pvt Pool Hanging Villa in Udaipur</title>
                <meta name="description" content="Book Villa Izara, A Luxury 5 BHK private pool hanging villa in Udaipur at ₹60,000. Enjoy panoramic hill views, and top-notch amenities for your perfect stay. Book Now!" />
                <meta name="keywords" content="Villa Izara, 5 BHK Villa in Udaipur, Private Pool Villa in Udaipur, Hanging Villa in Udaipur" />
            </head>
            <Navbar2 />
            <HeroIzara />
            <FullSection />
            <SendMessage />
        </div>
    )
}

export default VillaIzara
