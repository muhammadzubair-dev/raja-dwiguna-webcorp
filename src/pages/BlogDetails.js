import React from 'react';
import HeaderThree from "../common/header/HeaderThree";
import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import SingleBlogDetails from '../components/single-blog/SingleBlogDetails';
import BrandOne from '../components/brand/BrandOne';
import FooterOne from '../common/footer/FooterOne';

const BlogDetails = () => {
    return (
        <>
            <HeaderThree />
            <Breadcrumb
                heading="Blog Details"
                currentPage="Blog Details" 
            />
            <SingleBlogDetails />
            <BrandOne />
            <FooterOne />
        </>
    )
}

export default BlogDetails;