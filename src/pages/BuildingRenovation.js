import React from 'react';
import HeaderThree from "../common/header/HeaderThree";
import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import SingleBuildingRenovation from '../components/single-service/SingleBuildingRenovation';
import BrandOne from '../components/brand/BrandOne';
import FooterOne from '../common/footer/FooterOne';

const BuildingRenovation = () => {
    return (
        <>
            <HeaderThree />
            <Breadcrumb
                heading="Metrial Managment"
                currentPage="Metrial Managment" 
            />
            <SingleBuildingRenovation />
            <BrandOne />
            <FooterOne />
        </>
    )
}

export default BuildingRenovation;