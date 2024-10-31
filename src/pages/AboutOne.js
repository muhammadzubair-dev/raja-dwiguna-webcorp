import React from 'react';
import HeaderThree from "../common/header/HeaderThree";
import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import WorkPerformanceOne from '../components/work-performance/WorkPerformanceOne';
import FeatureFive from '../components/features/FeatureFive';
import ProjectOne from '../components/project/ProjectOne';
import BrandOne from '../components/brand/BrandOne';
import FooterOne from '../common/footer/FooterOne';

const AboutOne = () => {
    return (
        <>
            <HeaderThree />
            <Breadcrumb 
                heading="About Us"
                currentPage="About Us" 
            />
            <WorkPerformanceOne />
            <FeatureFive />
            <ProjectOne />
            <BrandOne />
            <FooterOne />
        </>
    )
}

export default AboutOne;