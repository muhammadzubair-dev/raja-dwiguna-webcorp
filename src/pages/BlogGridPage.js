import React from 'react';
import HeaderThree from "../common/header/HeaderThree";
import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import BlogFive from '../components/blog/BlogFive';
import BrandOne from '../components/brand/BrandOne';
import FooterOne from '../common/footer/FooterOne';

const BlogGridPage = () => {
    return (
        <>
            <HeaderThree />
            <Breadcrumb
                heading="Blog Grid"
                currentPage="Blog Grid" 
            />
            <BlogFive />
            <BrandOne />
            <FooterOne />
        </>
    )
}

export default BlogGridPage;