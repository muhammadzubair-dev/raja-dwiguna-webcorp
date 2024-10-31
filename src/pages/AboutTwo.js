import React from 'react';
import HeaderThree from "../common/header/HeaderThree";
import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import AboutFive from '../components/about/AboutFive';
import WhyChooseTwo from '../components/why-choose-us/WhyChooseTwo';
import FeatureTwo from '../components/features/FeatureTwo';
import TeamOne from '../components/team/TeamOne';
import TestimonialTwo from '../components/testimonial/TestimonialTwo';
import BlogTwo from '../components/blog/BlogTwo';
import BrandOne from '../components/brand/BrandOne';
import FooterOne from '../common/footer/FooterOne';

const AboutTwo = () => {
    return (
        <>
            <HeaderThree />
            <Breadcrumb 
                heading="About Us"
                currentPage="About Us" 
            />
            <AboutFive />
            <WhyChooseTwo />
            <FeatureTwo />
            <TeamOne />
            <TestimonialTwo />
            <BlogTwo />
            <BrandOne />
            <FooterOne />
        </>
    )
}

export default AboutTwo;