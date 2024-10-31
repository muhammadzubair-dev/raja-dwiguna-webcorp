import React from 'react';
import HeaderThree from "../common/header/HeaderThree";
import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import BlogSeven from '../components/blog/BlogSeven';
import BrandOne from '../components/brand/BrandOne';
import FooterOne from '../common/footer/FooterOne';

const BlogStandardPage = () => {
    return (
        <>
            <HeaderThree />
            <Breadcrumb
                heading="Blog Standard"
                currentPage="Blog Standard" 
            />
            <BlogSeven />
            <BrandOne />
            <FooterOne />
        </>
    )
}

export default BlogStandardPage;