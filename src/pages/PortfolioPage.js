import React from 'react';
import HeaderThree from "../common/header/HeaderThree";
import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import ProjectFour from '../components/project/ProjectFour';
import BrandOne from '../components/brand/BrandOne';
import FooterOne from '../common/footer/FooterOne';

const PortfolioPage = () => {
    return (
        <>
            <HeaderThree />
            <Breadcrumb 
                heading="Portfolio"
                currentPage="Portfolio" 
            />
            <ProjectFour />
            <BrandOne />
            <FooterOne />
        </>
    )
}

export default PortfolioPage;