import React from "react";
import HeaderOne from "../common/header/HeaderOne";
import HeroOne from "../components/hero/HeroOne";
import AboutFour from '../components/about/AboutFour';
import ProjectThree from "../components/project/ProjectThree";
import ServiceThree from "../components/services/ServiceThree";
import FeatureFour from "../components/features/FeatureFour";
import FeatureThree from "../components/features/FeatureThree";
import FaqOne from "../components/faq/FaqOne";
import TestimonialThree from "../components/testimonial/TestimonialThree";
import PricingOne from "../components/pricing/PricingOne";
import WorkPerformanceOne from "../components/work-performance/WorkPerformanceOne";
import BrandOne from "../components/brand/BrandOne";
import BlogOne from "../components/blog/BlogOne";
import FooterOne from "../common/footer/FooterOne";

const HomeDefault = () => {
    return (
        <>
            <HeaderOne />
            <HeroOne />
            <ServiceThree />
            <AboutFour />
            <ProjectThree />
            <FeatureFour />
            <FeatureThree />
            <FaqOne />
            <TestimonialThree />
            <PricingOne />
            <WorkPerformanceOne />
            <BrandOne />
            <BlogOne />
            <FooterOne />
        </>
    )
}

export default HomeDefault;