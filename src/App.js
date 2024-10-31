import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";
import WOW from 'wowjs';
import { FaAngleUp } from "react-icons/fa";

//Pages
import HomeDefault from "./pages/HomeDefault";
import HomeTwo from './pages/HomeTwo';
import HomeThree from './pages/HomeThree';
import HomeFour from './pages/HomeFour';
import HomeFive from './pages/HomeFive';
import AboutOne from "./pages/AboutOne";
import AboutTwo from "./pages/AboutTwo";
import ServicesPage from "./pages/ServicesPage";
import GeneralContracting from './pages/GeneralContracting';
import MetrialManagment from './pages/MetrialManagment';
import BuildingRenovation from './pages/BuildingRenovation';
import ArchitectureDesign from './pages/ArchitectureDesign';
import MultistoryBuild from './pages/MultistoryBuild';
import PortfolioPage from './pages/PortfolioPage';
import PortfolioDetails from './pages/PortfolioDetails';
import TeamPage from './pages/TeamPage';
import TeamDetails from './pages/TeamDetails';
import TestimonialsPage from './pages/TestimonialsPage';
import PricingPage from './pages/PricingPage';
import FaqPage from './pages/FaqPage';
import BlogPage from './pages/BlogPage';
import BlogGridPage from './pages/BlogGridPage';
import BlogListPage from './pages/BlogListPage';
import BlogStandardPage from './pages/BlogStandardPage';
import BlogDetails from './pages/BlogDetails';
import ContactPage from './pages/ContactPage';
import Error from "./pages/Error";
import ScrollToTopRoute from './components/scroll-to-top-route/ScrollToTopRoute';

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

function App() {
  useEffect(() => {
    new WOW.WOW({
        live: false
      }).init();
    }, []
  );
  return (
    <Router>
      <ScrollToTopRoute />
        <Routes>
            <Route path={`${process.env.PUBLIC_URL}/`} exact element={<HomeDefault />} />
            <Route path={`${process.env.PUBLIC_URL}/home-two`} exact element={<HomeTwo />} />
            <Route path={`${process.env.PUBLIC_URL}/home-three`} exact element={<HomeThree />} />
            <Route path={`${process.env.PUBLIC_URL}/home-four`} exact element={<HomeFour />} />
            <Route path={`${process.env.PUBLIC_URL}/home-five`} exact element={<HomeFive />} />
            <Route path={`${process.env.PUBLIC_URL}/about-one`} exact element={<AboutOne />} />
            <Route path={`${process.env.PUBLIC_URL}/about-two`} exact element={<AboutTwo />} />
            <Route path={`${process.env.PUBLIC_URL}/services`} exact element={<ServicesPage />} />
            <Route path={`${process.env.PUBLIC_URL}/general-contracting`} exact element={<GeneralContracting />} />
            <Route path={`${process.env.PUBLIC_URL}/metrial-managment`} exact element={<MetrialManagment />} />
            <Route path={`${process.env.PUBLIC_URL}/building-renovation`} exact element={<BuildingRenovation />} />
            <Route path={`${process.env.PUBLIC_URL}/architecture-design`} exact element={<ArchitectureDesign />} />
            <Route path={`${process.env.PUBLIC_URL}/multistory-build`} exact element={<MultistoryBuild />} />
            <Route path={`${process.env.PUBLIC_URL}/portfolio`} exact element={<PortfolioPage />} />
            <Route path={`${process.env.PUBLIC_URL}/portfolio-details`} exact element={<PortfolioDetails />} />
            <Route path={`${process.env.PUBLIC_URL}/team`} exact element={<TeamPage />} />
            <Route path={`${process.env.PUBLIC_URL}/team-details`} exact element={<TeamDetails />} />
            <Route path={`${process.env.PUBLIC_URL}/testimonials`} exact element={<TestimonialsPage />} />
            <Route path={`${process.env.PUBLIC_URL}/pricing`} exact element={<PricingPage />} />
            <Route path={`${process.env.PUBLIC_URL}/faq`} exact element={<FaqPage />} />
            <Route path={`${process.env.PUBLIC_URL}/blog`} exact element={<BlogPage />} />
            <Route path={`${process.env.PUBLIC_URL}/blog-grid`} exact element={<BlogGridPage />} />
            <Route path={`${process.env.PUBLIC_URL}/blog-list`} exact element={<BlogListPage />} />
            <Route path={`${process.env.PUBLIC_URL}/blog-standard`} exact element={<BlogStandardPage />} />
            <Route path={`${process.env.PUBLIC_URL}/blog-details`} exact element={<BlogDetails />} />
            <Route path={`${process.env.PUBLIC_URL}/contact`} exact element={<ContactPage />} />
            <Route path={`${process.env.PUBLIC_URL}/*`} exact element={<Error />} />
        </Routes>
        <ScrollToTop className="scrollUp" smooth top="1500" component={<FaAngleUp />} />
    </Router>
  );
}

export default App;