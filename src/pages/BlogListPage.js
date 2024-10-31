import React from 'react';
import HeaderThree from "../common/header/HeaderThree";
import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import BlogSix from '../components/blog/BlogSix';
import BrandOne from '../components/brand/BrandOne';
import FooterOne from '../common/footer/FooterOne';

const BlogListPage = () => {
    return (
        <>
            <HeaderThree />
            <Breadcrumb
                heading="Blog List"
                currentPage="Blog List" 
            />
            <BlogSix />
            <BrandOne />
            <FooterOne />
        </>
    )
}

export default BlogListPage;