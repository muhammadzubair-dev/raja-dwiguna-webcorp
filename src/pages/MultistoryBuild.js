import React from 'react';
import HeaderThree from "../common/header/HeaderThree";
import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import SingleMultistoryBuild from '../components/single-service/SingleMultistoryBuild';
import BrandOne from '../components/brand/BrandOne';
import FooterOne from '../common/footer/FooterOne';

const MultistoryBuild = () => {
    return (
        <>
            <HeaderThree />
            <Breadcrumb
                heading="Multistory Build"
                currentPage="Multistory Build" 
            />
            <SingleMultistoryBuild />
            <BrandOne />
            <FooterOne />
        </>
    )
}

export default MultistoryBuild;