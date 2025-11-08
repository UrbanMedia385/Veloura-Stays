import React from 'react'
import Testimonials from "../../components/Testimonials"
import CommonHero from '../../components/CommonHero'
import Section from './Section'
import Platforms from '../../components/Platforms'
import SendMessage from '../../components/SendMessage'
import IMAGES from '../../Constants/Images'
import { Title, Meta } from "react-head"


const Blogs = () => {
    return (
        <>
            {/* SEO Meta Tags */}
            <Title>Latest Blogs on Luxury Villas & Holiday Homes | Veloura Stays</Title>
            <Meta name="description" content="Stay updated with the latest blogs & trends on Luxury Villas & Holiday Homes. Get travel tips, villa recommendations, and vacation ideas for your dream stay." />
            <Meta name="robots" content="index, follow" />
            <link rel="canonical" href="https://velourastays.com/blogs" />

            {/* Open Graph Tags */}
            <Meta property="og:title" content="Latest Blogs on Luxury Villas & Holiday Homes | Veloura Stays" />
            <Meta property="og:description" content="Stay updated with the latest blogs & trends on Luxury Villas & Holiday Homes. Get travel tips, villa recommendations, and vacation ideas for your dream stay." />
            <Meta property="og:url" content="https://velourastays.com/blogs" />
            <Meta property="og:type" content="website" />
            <Meta property="og:image" content="https://velourastays.com/bloghero.jpg" />
            <Meta property="og:site_name" content="Veloura Stays" />

            <div>
                <CommonHero
                    image={IMAGES.BLOGHERO}
                    title="Blogs"
                    description="Home / Blog"
                />

                <Section />
                <Testimonials />
                <Platforms />
                <div className='mb-6 sm:mb-12'>
                    <SendMessage />

                </div>
            </div>
        </>
    )
}

export default Blogs
