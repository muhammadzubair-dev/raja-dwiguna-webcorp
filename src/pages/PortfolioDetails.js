import React from 'react';
import HeaderThree from "../common/header/HeaderThree";
import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import SinglePortfolioContent from '../components/single-portfolio/SinglePortfolioContent';
import BrandOne from '../components/brand/BrandOne';
import FooterOne from '../common/footer/FooterOne';

const PortfolioDetails = () => {
    return (
        <>
            <HeaderThree />
            <Breadcrumb
                heading="Portfolio Details"
                currentPage="Portfolio Details" 
            />
            <SinglePortfolioContent />
            <BrandOne />
            <FooterOne />
        </>
    )
}

export default PortfolioDetails;