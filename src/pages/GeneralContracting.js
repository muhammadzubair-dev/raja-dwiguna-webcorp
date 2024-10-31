import React from 'react';
import HeaderThree from "../common/header/HeaderThree";
import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import SingleGeneralContracting from '../components/single-service/SingleGeneralContracting';
import BrandOne from '../components/brand/BrandOne';
import FooterOne from '../common/footer/FooterOne';

const GeneralContracting = () => {
    return (
        <>
            <HeaderThree />
            <Breadcrumb
                heading="General Contracting"
                currentPage="General Contracting" 
            />
            <SingleGeneralContracting />
            <BrandOne />
            <FooterOne />
        </>
    )
}

export default GeneralContracting;