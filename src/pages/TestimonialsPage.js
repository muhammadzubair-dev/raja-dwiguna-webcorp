import React from 'react';
import HeaderThree from "../common/header/HeaderThree";
import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import SingleTestimonialContent from '../components/single-testimonial/SingleTestimonialContent';
import BrandOne from '../components/brand/BrandOne';
import FooterOne from '../common/footer/FooterOne';

const TestimonialsPage = () => {
    return (
        <>
            <HeaderThree />
            <Breadcrumb
                heading="Testimonials Page"
                currentPage="Testimonials Page" 
            />
            <SingleTestimonialContent />
            <BrandOne />
            <FooterOne />
        </>
    )
}

export default TestimonialsPage;