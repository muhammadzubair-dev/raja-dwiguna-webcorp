import React from 'react';
import HeaderThree from "../common/header/HeaderThree";
import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import SingleMetrialManagment from '../components/single-service/SingleMetrialManagment';
import BrandOne from '../components/brand/BrandOne';
import FooterOne from '../common/footer/FooterOne';

const MetrialManagment = () => {
    return (
        <>
            <HeaderThree />
            <Breadcrumb
                heading="Metrial Managment"
                currentPage="Metrial Managment" 
            />
            <SingleMetrialManagment />
            <BrandOne />
            <FooterOne />
        </>
    )
}

export default MetrialManagment;