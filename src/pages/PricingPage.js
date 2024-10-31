import React from 'react';
import HeaderThree from "../common/header/HeaderThree";
import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import PricingOne from '../components/pricing/PricingOne';
import BrandOne from '../components/brand/BrandOne';
import FooterOne from '../common/footer/FooterOne';

const PricingPage = () => {
    return (
        <>
            <HeaderThree />
            <Breadcrumb
                heading="Pricing Page"
                currentPage="Pricing Page" 
            />
            <PricingOne />
            <BrandOne />
            <FooterOne />
        </>
    )
}

export default PricingPage;